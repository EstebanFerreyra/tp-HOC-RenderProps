import { useState } from "react";

const Tooltip = ({ text, children }) => {
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);

  const showTooltip = () => {
    setIsTooltipVisible(true);
  };

  const hideTooltip = () => {
    setIsTooltipVisible(false);
  };

  return (
    <div className="position-relative">
      <div
        onMouseEnter={showTooltip}
        onMouseLeave={hideTooltip}
        className="d-inline-block"
      >
        {children}
      </div>
      {isTooltipVisible && (
        <div className="position-absolute bg-secondary text-white p-2 rounded">
          {text}
        </div>
      )}
    </div>
  );
};

export default Tooltip