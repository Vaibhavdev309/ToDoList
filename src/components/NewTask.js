import React, { useState } from "react";
import CreateTaskModal from "./CreateTaskModal";

const NewTask = () => {
  const [createTask, setCreateTask] = useState(false);

  const onCreateTask = () => {
    setCreateTask(true);
  };

  const onCloseCreate = () => {
    setCreateTask(false);
  };

  return (
    <div
      className="h-[48px] w-full md:w-[228px] flex items-center justify-center text-[18px] font-[600] w-60% text-white bg-[#3D00C0] rounded-[15px] text-center mt-2 
      mb-2"
      onClick={onCreateTask}
    >
      Create New Task
      {createTask && (
        <CreateTaskModal isOpen={createTask} onClose={onCloseCreate} />
      )}
    </div>
  );
};

export default NewTask;
