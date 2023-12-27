import React from "react";
import "./Modal.css";
import Description from "./Description";

const TaskModal = ({ isOpen, onClose, task }) => {
  return (
    <div
      className={`modal ${isOpen ? "open" : ""} hidden
    fixed
    top-0
    left-0
    w-full
    h-full
    justify-center backdrop-blur-sm
    `}
    >
      <div className="max-w-sm mt-20 bg-white p-4 border rounded-xl">
        <button className="text-end text-2xl cursor-pointer" onClick={onClose}>
          &times;
        </button>
        {task && (
          <Description
            heading={task.heading}
            due={task.due}
            description={task.description}
            file={task.file}
          />
        )}
      </div>
    </div>
  );
};

export default TaskModal;
