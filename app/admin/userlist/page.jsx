"use client";

import { useEffect, useState } from "react";
import ToggleButton from "../property-list/ToggleButton";
import axiosInstance from "@/redux/services/axiosInstance";
import { SquareArrowDownRight, Trash2 } from "lucide-react"

const page=()=>{
    const [users, setUser] = useState([]);
const [loading, setLoading] = useState(false);

useEffect(() => {
  fetchPropertyList();
}, []);

const fetchPropertyList = async () => {
  try {
    setLoading(true);
    const response = await axiosInstance.get("/admin/all-user"); // Await the API call
    setUser(response.data?.users || []); // Handle cases where `list` is undefined
    console.log(response.data?.list)
  } catch (error) {
    console.error("Failed to fetch property list:", error);
  } finally {
    setLoading(false); // Ensure loading state is reset
  }
};
return(<>
       {loading ? (
  <p>Loading...</p>
) : users.length > 0 ? (
    users.map((user, index) => (
    <ul  key={user._id || index}  className='admin-property-list-table-item even:bg-white odd:bg-transparent marker-class'>
                            <li className='pl-6 text-secondary-400 hover:underline cursor-pointer'>{user.Postedby?.name || user?.fname|| user._id}</li>
                            <li className='pl-6 text-center'>
                                <button className="rounded-lg mx-auto bg-[#E7EDFF] p-2 ">
                                    <SquareArrowDownRight className="icon text-[#45B500]" size={24}/>
                                </button>
                            </li>
                            <li className='pl-6 text-center flex items-center justify-center gap-6'>
                                <div className="py-2  px-2 rounded-lg bg-neutral-50">
                                    <ToggleButton id={property._id}/>
                                </div>
                                <button className="py-2  px-2 rounded-lg bg-[#F7E1E1]">
                                    <Trash2 className="icon text-[#FF4D4D]" size={24}/>
                                </button>
                            </li>
                        </ul>
  ))
) : (
  <p>No user found.</p>
)} 
    </>)
}
export default page;