import React from "react";

const Description = (props) => {
  const { heading, due, description, file } = props;

  return (
    <div className="mx-auto h-[700px] p-5">
      <div className="text-[30px] p-2 font-[700]">Description</div>
      <div className=" lg:h-[325px] overflow-auto">
        <div className="text-[20px] p-2 font-[600]">{heading}</div>
        <div className="text-red-600 p-2 text-[14px] font-[600]">
          Due: {due}
        </div>
        <div className="text-[18px] p-2 font-[400]">{description}</div>
        {file && (
          <img
            src={process.env.PUBLIC_URL + file}
            alt="Task"
            className="max-w-full"
          />
        )}
      </div>
    </div>
  );
};

export default Description;
