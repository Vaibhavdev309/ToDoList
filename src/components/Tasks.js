// Tasks.js
import React, { useState, useEffect } from "react";
import tasks from "./DummyData.js";
import Task from "./Task";
import Description from "./Description";
import TaskModal from "./Modal";

// Main Tasks Component
const Tasks = () => {
  // State for filtering tasks and managing modal
  const [state, setState] = useState("false");
  const [selectedTask, setSelectedTask] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Set initial selected task on component mount
  useEffect(() => {
    setSelectedTask(tasks[0]);
  }, []);

  // Handle task click to open modal
  const onTaskClick = (task) => {
    setSelectedTask(task);
    setIsModalOpen(true);
  };

  // Handle modal close
  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Filter tasks based on completion state
  const filteredTasks = tasks.filter(
    (task) => task.completed.toString() === state
  );

  // Render the main tasks component
  return (
    <div className="p-8 flex bg-gradient-to-b from-[#D5D4FFA6] to-[#F7F7FF] flex-col w-[100%] h-[700px] md:w-[85%] mx-auto my-0 rounded-[15px] top-[100px]">
      {/* Header */}
      <div className="text-[30px] font-[700]">Pending Tasks</div>
      {/* Main content */}
      <div className="flex flex-row">
        <div className="flex flex-col flex-auto">
          {/* Task list */}
          <div className="text-[20px] h-[450px] overflow-auto font-[600]">
            {filteredTasks.map((task, index) => (
              <Task
                key={index}
                onClick={() => onTaskClick(task)}
                completed={task.completed}
                heading={task.heading}
              />
            ))}
          </div>
          {/* Filters for pending/completed tasks */}
          <div className="flex h-[100px]  items-center text-[20px] font-[700] justify-center">
            <div
              className="flex-1 flex bg-[#ACA7D5] h-full items-center justify-center text-center"
              onClick={() => setState("false")}
            >
              Pending
            </div>
            <div
              className="flex-1 text-center"
              onClick={() => setState("true")}
            >
              Completed
            </div>
          </div>
        </div>

        {/* Mobile view: Show TaskModal */}
        <div className="lg:hidden">
          {selectedTask && (
            <TaskModal
              isOpen={isModalOpen}
              onClose={closeModal}
              task={selectedTask}
            />
          )}
        </div>

        {/* Desktop view: Show Description */}
        <div className="hidden lg:block lg:w-[40%]">
          {selectedTask && (
            <Description
              heading={selectedTask.heading}
              due={selectedTask.due}
              description={selectedTask.description}
              file={selectedTask.file}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Tasks;
