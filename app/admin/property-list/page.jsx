// "use client";

// import { SquareArrowDownRight, Trash2 } from "lucide-react"
// import ToggleButton from "./ToggleButton"
// import axios from "axios"
// import axiosInstance from "@/redux/services/axiosInstance"
// import { useEffect, useState } from "react"


// export default function page() {
// // const [list,setList]=useState([]);
// // const [loading,setLoading]=useState(false);

// //     useEffect(()=>{

// //         fetchPropertyList();
// //     },[list])
// //     const fetchPropertyList=()=>{
// //         setLoading(true);
// //         const response=axiosInstance.get("/admin/all-list");
// //         console.log(response.data?.list);

// //         setList(response.data?.list);
// //         setLoading(false);
// //     }
// const [lists, setList] = useState([]);
// const [loading, setLoading] = useState(false);

// useEffect(() => {
//   fetchPropertyList();
// }, []);

// const fetchPropertyList = async () => {
//   try {
//     setLoading(true);
//     const response = await axiosInstance.get("/admin/all-list"); // Await the API call
//     setList(response.data?.list || []); // Handle cases where `list` is undefined
//     console.log(response.data?.list)
//   } catch (error) {
//     console.error("Failed to fetch property list:", error);
//   } finally {
//     setLoading(false); // Ensure loading state is reset
//   }
// };
//   return (
//     <div className="pt-10 px-8 pb-6 w-full ">
//         <div className='bg-secondary-50 rounded-lg p-6 w-full h-full'>
//             <div className='flex items-center justify-between'>
//                 <h3 className='text-neutral-600 text-2xl font-semibold'>Property List</h3>
//                 <div className='flex gap-6'>
//                     <select className='px-6 py-2 border text-neutral-600 border-neutral-200 rounded-lg'>
//                         <option disabled selected>City</option>
//                         <option>Dhaka</option>
//                         <option>Chittagong</option>
//                         <option>khulna</option>
//                     </select>
//                     <select  className='px-6 py-2 border text-neutral-600 border-neutral-200 rounded-lg'>
//                         <option disabled selected>Country</option>
//                         <option>Bangladesh</option>
//                         <option>India</option>
//                         <option>Nepal</option>

//                     </select>
//                 </div>
//             </div>

//             <ul className='text-neutral-400 font-xl font-medium | flex gap-14 py-6'>
//                 <li>Pending</li>
//                 <li className='text-primary-400 underline'>Listed</li>
//                 <li>Rejected</li>
//                 <li>Inactive</li>
//             </ul>

//             <div>
//                 {/* <div>
//                     <ul className='grid grid-cols-[104px_250px_200px_180px_162px_154px] | text-neutral-600 text-base font-medium bg-white rounded-lg border border-neutral-200 py-4'>
//                         <li className='marker-class pl-6'>Owner</li>
//                         <li className='marker-class pl-6'>Property Name</li>
//                         <li className='marker-class pl-6 text-center'>City</li>
//                         <li className='marker-class pl-6 text-center'>Revenue</li>
//                         <li className='marker-class pl-6 text-center'>Files</li>
//                         <li className='marker-class pl-6 text-center'>Action</li>
//                     </ul>
//                 </div> */}
//                 <div className='text-neutral-400 text-base font-medium font-medium'>
//                     <ul className='grid grid-cols-[100px_230px_200px_170px_140px_160px] |  font-medium bg-white rounded-lg border border-neutral-200 py-2'>
//                         <li className='pl-6'>Owner</li>
//                         <li className='pl-6'>Property Name</li>
//                         <li className='pl-6 text-center'>City</li>
//                         <li className='pl-6 text-center'>Revenue</li>
//                         <li className='pl-6 text-center'>Files</li>
//                         <li className='pl-6 text-center'>Action</li>
//                     </ul>
//                     <div className="space-y-2 mt-2 ">
//                         <ul className='admin-property-list-table-item even:bg-white odd:bg-transparent marker-class'>
//                             <li className='pl-6 text-secondary-400 hover:underline cursor-pointer'>45336</li>
//                             <li className='pl-6'>Property A <span className='text-secondary-400 hover:underline cursor-pointer'>(45336)</span></li>
//                             <li className='pl-6 text-center'>Chattogram</li>
//                             <li className='pl-6 text-center'>23/13,230</li>
//                             <li className='pl-6 text-center'>
//                                 <button className="rounded-lg mx-auto bg-[#E7EDFF] p-2 ">
//                                     <SquareArrowDownRight className="icon text-[#45B500]" size={24}/>
//                                 </button>
//                             </li>
//                             <li className='pl-6 text-center flex items-center justify-center gap-6'>
//                                 <button className="py-2 px-2 rounded-lg bg-neutral-50">
//                                     <ToggleButton/>
//                                 </button>
//                                 <button className="py-2 px-2 rounded-lg bg-[#F7E1E1]">
//                                     <Trash2 className="icon text-[#FF4D4D]" size={24}/>
//                                 </button>
//                             </li>
//                         </ul>
//                         <ul className='admin-property-list-table-item even:bg-white odd:bg-transparent'>
//                             <li className='pl-6 text-secondary-400 hover:underline cursor-pointer'>45336</li>
//                             <li className='pl-6'>Property A <span className='text-secondary-400 hover:underline cursor-pointer'>(45336)</span></li>
//                             <li className='pl-6 text-center'>Dhaka</li>
//                             <li className='pl-6 text-center'>23/13,230</li>
//                             <li className='pl-6 text-center'>
//                                 <button className="rounded-lg mx-auto bg-[#E7EDFF] p-2 ">
//                                     <SquareArrowDownRight className="icon text-[#45B500]" size={24}/>
//                                 </button>
//                             </li>
//                             <li className='pl-6 text-center flex items-center justify-center gap-6'>
//                                 <button className="py-2  px-2 rounded-lg bg-neutral-50">
//                                     <ToggleButton/>
//                                 </button>
//                                 <button className="py-2  px-2 rounded-lg bg-[#F7E1E1]">
//                                     <Trash2 className="icon text-[#FF4D4D]" size={24}/>
//                                 </button>
//                             </li>
//                         </ul>
//                         <ul className='admin-property-list-table-item even:bg-white odd:bg-transparent'>
//                             <li className='pl-6 text-secondary-400 hover:underline cursor-pointer'>45336</li>
//                             <li className='pl-6'>Property A <span className='text-secondary-400 hover:underline cursor-pointer'>(45336)</span></li>
//                             <li className='pl-6 text-center'>Chattogram</li>
//                             <li className='pl-6 text-center'>23/13,230</li>
//                             <li className='pl-6 text-center'>
//                                 <button className="rounded-lg mx-auto bg-[#E7EDFF] p-2 ">
//                                     <SquareArrowDownRight className="icon text-[#45B500]" size={24}/>
//                                 </button>
//                             </li>
//                             <li className='pl-6 text-center flex items-center justify-center gap-6'>
//                                 <button className="py-2  px-2 rounded-lg bg-neutral-50">
//                                     <ToggleButton/>
//                                 </button>
//                                 <button className="py-2  px-2 rounded-lg bg-[#F7E1E1]">
//                                     <Trash2 className="icon text-[#FF4D4D]" size={24}/>
//                                 </button>
//                             </li>
//                         </ul>
                       
//                         {/* <ul className='admin-property-list-table-item even:bg-white odd:bg-transparent'>
//                             <li className='pl-6 text-secondary-400 hover:underline cursor-pointer'>45336</li>
//                             <li className='pl-6'>Property A <span className='text-secondary-400 hover:underline cursor-pointer'>(45336)</span></li>
//                             <li className='pl-6 text-center'>Chattogram</li>
//                             <li className='pl-6 text-center'>23/13,230</li>
//                             <li className='pl-6 text-center'>
//                                 <button className="rounded-lg mx-auto bg-[#E7EDFF] p-2 ">
//                                     <SquareArrowDownRight className="icon text-[#45B500]" size={24}/>
//                                 </button>
//                             </li>
//                             <li className='pl-6 text-center flex items-center justify-center gap-6'>
//                                 <button className="py-2  px-2 rounded-lg bg-neutral-50">
//                                     <ToggleButton/>
//                                 </button>
//                                 <button className="py-2  px-2 rounded-lg bg-[#F7E1E1]">
//                                     <Trash2 className="icon text-[#FF4D4D]" size={24}/>
//                                 </button>
//                             </li>
//                         </ul>
//  */}
//  {loading ? (
//   <p>Loading...</p>
// ) : lists.length > 0 ? (
//   lists.map((property, index) => (
//     <ul
//       key={property._id || index}
//       className="admin-property-list-table-item even:bg-white odd:bg-transparent"
//     >
//       <li className="flex items-center gap-6">
//         <div className="pl-6 text-secondary-400 hover:underline cursor-pointer">
//           {property._id}
//         </div>
//         <div className="pl-6">
//           {property.propertyTitle}{" "}
//           <span className="text-secondary-400 hover:underline cursor-pointer">
//             ({property.location?.district || "N/A"})
//           </span>
//         </div>
//         <div className="pl-6 text-center">{property.price || "No price"}</div>
//         <div className="pl-6 text-center">
//           <button className="rounded-lg mx-auto bg-[#E7EDFF] p-2">
//             <SquareArrowDownRight className="icon text-[#45B500]" size={24} />
//           </button>
//         </div>
//         <div className="pl-6 text-center flex items-center justify-center gap-6">
//           <button className="py-2 px-2 rounded-lg bg-neutral-50">
//             <ToggleButton />
//           </button>
//           <button className="py-2 px-2 rounded-lg bg-[#F7E1E1]">
//             <Trash2 className="icon text-[#FF4D4D]" size={24} />
//           </button>
//         </div>
//       </li>
//     </ul>
//   ))
// ) : (
//   <p>No properties found.</p>
// )}


// {/*  */}

//                     </div>
                    
//                 </div>
//             </div>
//         </div>
//     </div>
//   )
// }
"use client"
import { SquareArrowDownRight, Trash2 } from "lucide-react"
import ToggleButton from "./ToggleButton"
import { useEffect, useState } from "react";
import axiosInstance from "@/redux/services/axiosInstance";


export default function page() {
  const [lists, setList] = useState([]);
const [loading, setLoading] = useState(false);

useEffect(() => {
  fetchPropertyList();
}, []);

const fetchPropertyList = async () => {
  try {
    setLoading(true);
    const response = await axiosInstance.get("/admin/all-list"); // Await the API call
    setList(response.data?.list || []); // Handle cases where `list` is undefined
    console.log(response.data?.list)
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
                <h3 className='text-neutral-600 text-2xl font-semibold'>Property List</h3>
                <div className='flex gap-6'>
                    <select className='px-6 py-2 border text-neutral-600 border-neutral-200 rounded-lg'>
                        <option disabled selected>City</option>
                        <option>Dhaka</option>
                        <option>Chittagong</option>
                        <option>khulna</option>
                    </select>
                    <select  className='px-6 py-2 border text-neutral-600 border-neutral-200 rounded-lg'>
                        <option disabled selected>Country</option>
                        <option>Bangladesh</option>
                        <option>India</option>
                        <option>Nepal</option>

                    </select>
                </div>
            </div>
    
            <ul className='text-neutral-400 font-xl font-medium | flex gap-14 py-6'>
                <li>Pending</li>
                <li className='text-primary-400 underline'>Listed</li>
                <li>Rejected</li>
                <li>Inactive</li>
            </ul>

            <div>
                {/* <div>
                    <ul className='grid grid-cols-[104px_250px_200px_180px_162px_154px] | text-neutral-600 text-base font-medium bg-white rounded-lg border border-neutral-200 py-4'>
                        <li className='marker-class pl-6'>Owner</li>
                        <li className='marker-class pl-6'>Property Name</li>
                        <li className='marker-class pl-6 text-center'>City</li>
                        <li className='marker-class pl-6 text-center'>Revenue</li>
                        <li className='marker-class pl-6 text-center'>Files</li>
                        <li className='marker-class pl-6 text-center'>Action</li>
                    </ul>
                </div> */}
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
                        <ul className='admin-property-list-table-item even:bg-white odd:bg-transparent'>
                            <li className='pl-6 text-secondary-400 hover:underline cursor-pointer'>45336</li>
                            <li className='pl-6'>Property A <span className='text-secondary-400 hover:underline cursor-pointer'>(45336)</span></li>
                            <li className='pl-6 text-center'>Chattogram</li>
                            <li className='pl-6 text-center'>23/13,230</li>
                            <li className='pl-6 text-center'>
                                <button className="rounded-lg mx-auto bg-[#E7EDFF] p-2 ">
                                    <SquareArrowDownRight className="icon text-[#45B500]" size={24}/>
                                </button>
                            </li>
                            <li className='pl-6 text-center flex items-center justify-center gap-6'>
                                <div className="py-2 px-2 rounded-lg bg-neutral-50">
                                    <ToggleButton/>
                                </div>
                                <button className="py-2 px-2 rounded-lg bg-[#F7E1E1]">
                                    <Trash2 className="icon text-[#FF4D4D]" size={24}/>
                                </button>
                            </li>
                        </ul>
                        <ul className='admin-property-list-table-item even:bg-white odd:bg-transparent'>
                            <li className='pl-6 text-secondary-400 hover:underline cursor-pointer'>45336</li>
                            <li className='pl-6'>Property A <span className='text-secondary-400 hover:underline cursor-pointer'>(45336)</span></li>
                            <li className='pl-6 text-center'>Dhaka</li>
                            <li className='pl-6 text-center'>23/13,230</li>
                            <li className='pl-6 text-center'>
                                <button className="rounded-lg mx-auto bg-[#E7EDFF] p-2 ">
                                    <SquareArrowDownRight className="icon text-[#45B500]" size={24}/>
                                </button>
                            </li>
                            <li className='pl-6 text-center flex items-center justify-center gap-6'>
                                <div className="py-2  px-2 rounded-lg bg-neutral-50">
                                    <ToggleButton/>
                                </div>
                                <button className="py-2  px-2 rounded-lg bg-[#F7E1E1]">
                                    <Trash2 className="icon text-[#FF4D4D]" size={24}/>
                                </button>
                            </li>
                        </ul>
                        <ul className='admin-property-list-table-item even:bg-white odd:bg-transparent'>
                            <li className='pl-6 text-secondary-400 hover:underline cursor-pointer'>45336</li>
                            <li className='pl-6'>Property A <span className='text-secondary-400 hover:underline cursor-pointer'>(45336)</span></li>
                            <li className='pl-6 text-center'>Chattogram</li>
                            <li className='pl-6 text-center'>23/13,230</li>
                            <li className='pl-6 text-center'>
                                <button className="rounded-lg mx-auto bg-[#E7EDFF] p-2 ">
                                    <SquareArrowDownRight className="icon text-[#45B500]" size={24}/>
                                </button>
                            </li>
                            <li className='pl-6 text-center flex items-center justify-center gap-6'>
                                <div className="py-2  px-2 rounded-lg bg-neutral-50">
                                    <ToggleButton/>
                                </div>
                                <button className="py-2  px-2 rounded-lg bg-[#F7E1E1]">
                                    <Trash2 className="icon text-[#FF4D4D]" size={24}/>
                                </button>
                            </li>
                        </ul>
                        {loading ? (
  <p>Loading...</p>
) : lists.length > 0 ? (
  lists.map((property, index) => (
    <ul  key={property._id || index}  className='admin-property-list-table-item even:bg-white odd:bg-transparent marker-class'>
                            <li className='pl-6 text-secondary-400 hover:underline cursor-pointer'>{property.Postedby?.name || property.Postedby?.fname|| property.Postedby._id}</li>
                            <li className='pl-6'>{property.propertyTitle} <span className='text-secondary-400 hover:underline cursor-pointer'>({property._id})</span></li>
                            <li className='pl-6 text-center'>{property.location?.district}</li>
                            <li className='pl-6 text-center'>23/13,230</li>
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
  <p>No properties found.</p>
)}


                        {/* <ul className='admin-property-list-table-item even:bg-white odd:bg-transparent'>
                            <li className='pl-6 text-secondary-400 hover:underline cursor-pointer'>45336</li>
                            <li className='pl-6'>Property A <span className='text-secondary-400 hover:underline cursor-pointer'>(45336)</span></li>
                            <li className='pl-6 text-center'>Chattogram</li>
                            <li className='pl-6 text-center'>23/13,230</li>
                            <li className='pl-6 text-center'>
                                <button className="rounded-lg mx-auto bg-[#E7EDFF] p-2 ">
                                    <SquareArrowDownRight className="icon text-[#45B500]" size={24}/>
                                </button>
                            </li>
                            <li className='pl-6 text-center flex items-center justify-center gap-6'>
                                <div className="py-2  px-2 rounded-lg bg-neutral-50">
                                    <ToggleButton/> test
                                </div>
                                <button className="py-2  px-2 rounded-lg bg-[#F7E1E1]">
                                    <Trash2 className="icon text-[#FF4D4D]" size={24}/>
                                </button>
                            </li>
                        </ul> */}
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}