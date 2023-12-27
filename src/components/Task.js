// Task.js
import React, { useState } from "react";
import DeleteModal from "./DeleteModal";

// Individual Task Component
const Task = (props) => {
  // State to manage the visibility of the delete modal
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  // Open delete modal on delete button click
  const handleDeleteClick = () => {
    setShowDeleteModal(true);
  };

  // Confirm delete action
  const handleConfirmDelete = () => {
    // Handle the delete logic here
    // You can call a function to delete the task or update the state
    // For now, let's just close the delete modal
    setShowDeleteModal(false);
  };

  // Truncate heading text based on a maximum length
  const truncateHeading = (heading, maxLength) => {
    if (heading.length > maxLength) {
      return heading.slice(0, maxLength) + "...";
    }
    return heading;
  };

  // Cancel delete action
  const handleCancelDelete = () => {
    setShowDeleteModal(false);
  };

  // Render the individual task component
  return (
    <div
      className="p-5 flex flex-col rounded-l-[15px] bg-white my-2 md:flex-row justify-between"
      onClick={props.onClick}
    >
      {/* Display truncated task heading */}
      <div>{truncateHeading(props.heading, 100)}</div>
      {/* Action buttons (Delete and Complete) */}
      <div className="flex md:flex-col lg:flex-row gap-1 justify-end">
        {/* Delete button (common for both completed and pending tasks) */}
        <div
          className="flex rounded-[5px] bg-[#FFD2D2] text-[#8C0000] order-2 lg:order-1 items-center justify-center lg:w-[102px] w-[155px] text-[18px] h-35px font-[600] lg:h-[40px] "
          onClick={handleDeleteClick}
        >
          Delete
        </div>
        {/* Conditional rendering for Complete button */}
        {!props.completed && (
          <div className="flex rounded-[5px] text-[#2F7B00] bg-[#F5FFD8] order-1 lg:order-2 items-center justify-center lg:w-[102px] w-[155px] text-[18px] h-35px font-[600] lg:h-[40px] ">
            Complete
          </div>
        )}
        {/* Delete confirmation modal */}
        {showDeleteModal && (
          <DeleteModal
            onConfirm={handleConfirmDelete}
            onCancel={handleCancelDelete}
          />
        )}
      </div>
    </div>
  );
};

export default Task;
