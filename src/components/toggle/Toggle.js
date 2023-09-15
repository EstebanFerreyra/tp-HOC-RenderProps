import { useState } from "react";

const Toggle = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="mt-3">
      <button className="btn btn-primary" onClick={toggleVisibility}>
        Toggle
      </button>
      {isVisible && <div className="mt-3">{children}</div>}
    </div>
  );
};

export default Toggle