import React from "react";
import "./Modal.css"; // Importing the modal styles
import Description from "./Description";

const CreateTaskModal = ({ isOpen, onClose }) => {
  // Function to handle modal close
  const handleModalClose = () => {
    onClose(); // Call the provided onClose function
    console.log("Modal closed"); // Log a message for debugging
  };

  return (
    // Modal container with dynamic class based on isOpen prop
    <div
      className={`task ${isOpen ? "open" : "close"} hidden
        fixed
        top-0
        left-0
        w-full
        h-full
        justify-center items-center backdrop-blur-sm
      `}
    >
      <div>
        {/* Modal content */}
        <div className="max-w-md md:m-20 mt-20 bg-white p-4 border rounded-xl">
          <div className="font-[600] text-[40px] text-[#3D00C0] text-start">
            New Task
          </div>

          {/* Input for task title */}
          <input
            type="text"
            className="w-full h-[40px] px-2 my-3 bg-[#E5E4FF] rounded-[15px]"
            placeholder="Title"
          />
          {/* Textarea for task description */}
          <textarea
            name=""
            placeholder="Description..."
            id=""
            className="w-full px-2 my-3 bg-[#E5E4FF] rounded-[15px]"
            cols="30"
            rows="10"
          ></textarea>
          {/* Due date input with change button */}
          <div className="flex">
            <input
              type="text"
              className="h-[40px] rounded-l-[15px] w-[70%] px-2 my-3 bg-[#E5E4FF] "
              placeholder="Due on: 15-11-2023"
            />
            <div className="bg-[#737374] h-[40px] my-3 flex items-center justify-center w-[30%] rounded-r-[15px]">
              Change
            </div>
          </div>
          {/* Image input with add image button */}
          <div className="flex rounded-[15px]">
            <input
              type="text"
              className="h-[40px] px-2 my-3 w-[70%] bg-[#E5E4FF] rounded-l-[15px]"
              placeholder="No image..."
            />
            <div className="bg-[#737374] flex items-center justify-center w-[30%] h-[40px] my-3 rounded-r-[15px]">
              Add Image
            </div>
          </div>
          {/* Buttons for cancel and save */}
          <div className="flex justify-between">
            <button
              className="text-black h-[50px] flex items-center justify-center w-[40%] rounded-[15px]"
              onClick={handleModalClose}
            >
              Cancel
            </button>
            <button
              className="bg-[#3D00C0] h-[50px] w-[40%] rounded-[15px]"
              type="submit"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateTaskModal;
