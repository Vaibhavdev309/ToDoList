import React, { useState } from "react";

const Footer = () => {
  const [state, setState] = useState("false");
  return (
    <div className="flex justify-center h-[100px] items-center">
      <div
        className="flex-1 h-[100px] text-center"
        onClick={() => setState("false")}
      >
        Pending
      </div>
      <div className="flex-1 text-center" onClick={() => setState("true")}>
        Completed
      </div>
    </div>
  );
};

export default Footer;
