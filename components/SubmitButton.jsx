import React from "react";
import { BsFillCheckCircleFill } from "react-icons/bs";

const SubmitButton = () => {
  return (
    <button type="submit" className="mt-5 btn btn-outline btn-accent">
      <div className="flex flex-row items-center px-4 md:px-6 gap-2 text-md md:text-lg">
        {<BsFillCheckCircleFill className="mt-1" />}提交
      </div>
    </button>
  );
};

export default SubmitButton;
