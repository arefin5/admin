"use client";

import { useEffect, useState } from "react";
import ToggleButton from "../property-list/ToggleButton";
import axiosInstance from "@/redux/services/axiosInstance";
import { SquareArrowDownRight, Trash2 } from "lucide-react"

const page = () => {
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
      console.log(response.data?.users)
    } catch (error) {
      console.error("Failed to fetch property list:", error);
    } finally {
      setLoading(false); // Ensure loading state is reset
    }
  };
  return (
    <div className="pt-10 px-8 pb-6 w-full ">
      <div className='bg-secondary-50 rounded-lg p-6 w-full h-full'>
        <div className='flex items-center justify-between'>
          {/* <h3 className='text-neutral-600 text-2xl font-semibold'>User List</h3> */}
          <div className='text-neutral-400 text-base font-medium font-medium'>
            <ul className='grid grid-cols-[100px_230px_200px_170px_140px_160px] |  font-medium bg-white rounded-lg border border-neutral-200 py-2'>
              <li className='pl-6'>Owner</li>
              <li className='pl-6'>Property Name</li>
              <li className='pl-6 text-center'>City</li>
              <li className='pl-6 text-center'>Revenue</li>
              <li className='pl-6 text-center'>Files</li>
              <li className='pl-6 text-center'>Action</li>
            </ul>
            <div className="space-y-2 mt-2">

              {loading ? (
                <p>Loading...</p>
              ) : users.length > 0 ? (
                users.map((user, index) => (
                  <ul key={user._id || index}
                    className='admin-property-list-table-item even:bg-white odd:bg-transparent marker-class'>
                    <li className='pl-6 text-secondary-400 hover:underline cursor-pointer'>
                      {user?.name || user?.fname || user._id}
                    </li>
                    <li className='pl-6'>{user?.email || user?.phone}</li>

                    <li className='pl-6 text-center flex items-center justify-center gap-6'>
                      <div className="py-2  px-2 rounded-lg bg-neutral-50">
                        <ToggleButton id={user._id} />
                      </div>
                      <button className="py-2  px-2 rounded-lg bg-[#F7E1E1]">
                        <Trash2 className="icon text-[#FF4D4D]" size={24} />
                      </button>
                    </li>
                  </ul>
                ))
              ) : (
                <p>No User Found.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default page;