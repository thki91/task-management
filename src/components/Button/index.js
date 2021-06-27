import React from 'react';
import "./button.css";

const Button = ({name, disabled, tooltipText, handleClick, id}) => {
  const buttonClassesDisabled = 'text-gray-400 border-gray-300 cursor-not-allowed';
  const buttonClassesEnabled = 'text-blue-600 border-blue-500 hover:border-blue-700 hover:text-blue-700 cursor-pointer';
  const buttonClassesDefault = 'border p-2 text-xs rounded-lg font-semibold relative tooltip uppercase';
  const tooltipClasses = (
    'bg-gray-500 text-white absolute tooltiptext font-normal normal-case ' +
    'text-center rounded-lg p-2 w-full invisible z-10 left-0'
  );
  return (
    <button
      className={`${disabled ? buttonClassesDisabled : buttonClassesEnabled} ${buttonClassesDefault}`}
      onClick={() => disabled || !handleClick ? () => false : handleClick(id)}>
      {tooltipText &&
      <div className={tooltipClasses}>{tooltipText}</div>}
      {name}
    </button>
  );
};

export default Button;