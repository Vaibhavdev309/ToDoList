import React from "react";

const Sorting = () => {
  return (
    <div className="flex  w-full md:w-[588px] h-[48px] justify-center items-center text-[20px] font-[600] rounded-[15px]  border-[2px] border-[#3D00C0] my-auto">
      <div className="md:flex md:items-center md:justify-center hidden md:w-[20%] text-center  rounded-l-[15px] h-full text-[#3D00C0] bg-[#E5E4FF] ">
        Sort By
      </div>
      <div className="bg-[#ACA7D5] w-[50%] h-full text-center md:w-[40%] flex items-center justify-center text-black">
        Date Created
      </div>
      <div className="md:w-[40%] w-[50%] text-center">Due Date</div>
    </div>
  );
};

export default Sorting;
