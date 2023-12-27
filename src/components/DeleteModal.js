import React from "react";

// Delete Confirmation Modal Component
const DeleteModal = ({ onConfirm, onCancel }) => {
  return (
    // Modal container with fixed position and backdrop blur
    <div className="modal fixed top-0 left-0 w-full h-full flex items-center justify-center backdrop-blur-sm">
      <div className="max-w-md bg-white p-4 border rounded-xl">
        {/* Confirmation message */}
        <p>Are you sure you want to delete this task?</p>
        {/* Buttons for confirming or canceling the deletion */}
        <div className="flex justify-end mt-4">
          {/* Cancel button */}
          <button className="text-gray-500 mr-4" onClick={onCancel}>
            Cancel
          </button>
          {/* Delete button */}
          <button className="text-red-600" onClick={onConfirm}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
