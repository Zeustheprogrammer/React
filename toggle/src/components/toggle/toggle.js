import { useState } from "react";
const Toggle = () => {
  const [show, setShow] = useState(false);
  const toggleShow = () => {
    setShow(!show);
  };
  return (
    <div className="toggle mt-4">
      <div className="btn btn-primary" onClick={toggleShow}>
        {show ? "Hide Text" : "Show Text"}
      </div>
      {show && (
        <div className="text text-danger">I want to talk with you(;</div>
      )}
    </div>
  );
};

export default Toggle;
