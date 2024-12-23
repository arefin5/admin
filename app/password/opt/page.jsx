
"use client";

import { useState, useEffect, useRef } from 'react';
import { verifyOtpEmail } from '@/redux/features/auth/authSlice';
import { useRouter } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import axiosInstance from '@/redux/services/axiosInstance';

export default function Page() {
    const [otp, setOtp] = useState(["", "", "", "", "", ""]);
    const inputRefs = useRef([]);
    const dispatch = useDispatch();
    const router = useRouter();
    const { token, loading, error } = useSelector((state) => state.auth);

    const handleOtpChange = (e, index) => {
        const value = e.target.value;
        if (/^\d?$/.test(value)) {
            const newOtp = [...otp];
            newOtp[index] = value;
            setOtp(newOtp);

            // Focus next input
            if (value && index < 5) {
                inputRefs.current[index + 1].focus();
            }
        }
    };

    const handleLoginPhone = async (e) => {
        e.preventDefault();
        const email = localStorage.getItem("useemail").replace(/"/g, '');
        const otpCode = otp.join("");
        dispatch(verifyOtpEmail({ email, otp: otpCode }));
    };

    useEffect(() => {
        if (token) {
            router.push('/password/reset');
        }
    }, [router, token]);

    const resendOtp = (e) => {
        e.preventDefault();
        const email = localStorage.getItem("useemail").replace(/"/g, '');
        axiosInstance.post("/generate-otp", { email });
    };

    return (
        <div className="modal-background">
            <div className="pt-19 pb-20 sm:pb-24 px-14 sm:px-24 bg-white max-w-lg | absolute-center rounded-10px">
                <div className="flex flex-col items-center gap-y-7 max-w-lg">
                    <h3 className="text-sm leading-6 font-medium text-neutral-600">
                        Enter 6-digit verification code
                    </h3>

                    <div className="flex gap-3">
                        {otp.map((value, index) => (
                            <input
                                key={index}
                                ref={(el) => (inputRefs.current[index] = el)}
                                className="w-11 h-14 py-3.5 px-4 border border-neutral-500 rounded"
                                type="text"
                                maxLength="1"
                                inputMode="numeric"
                                pattern="[0-9]*"
                                value={value}
                                onChange={(e) => handleOtpChange(e, index)}
                            />
                        ))}
                    </div>

                    <button className="btn max-w-48 btn-primary" onClick={handleLoginPhone}>Submit</button>
                    {loading && <p>Loading...</p>}
                    {error && <p style={{ color: 'red' }}>{error}</p>}

                    <div className="text-sm font-normal text-center">
                        {`Didn't receive your code? `}
                        <span className="text-primary-400 font-medium" onClick={resendOtp}>
                            Resend
                        </span>
                        <div className="border border-primary-400 w-8 h-8 mt-2 rounded-full m-auto py-2 text-center text-xs font-medium">
                            1:59
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
