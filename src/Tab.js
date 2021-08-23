import React from "react";

export const Tab = ({id, title, selectedTab, index, tabPanelId, handleChange, tabRef}) => {
  const handleClick = () => handleChange(index);
  return (
    <li role="presentation">
      <button role="tab" id={id} aria-selected={selectedTab === index} aria-controls={tabPanelId} tabIndex={selectedTab === index ? 0 : -1} onClick={handleClick} ref={tabRef}>
        {title}
      </button>
    </li>
  );
};
