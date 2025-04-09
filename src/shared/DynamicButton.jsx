import React from 'react';

const DynamicButton = ({
  label,
  icon: Icon,
  disabled = false,
  onClick,
  variant = 'primary', 
  className = '',
}) => {

  const baseStyles =
    'inline-flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 cursor-pointer';
  const variants = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700',
    outline: 'border border-blue-600 text-blue-600 hover:bg-blue-100',
    danger: 'bg-red-600 text-white hover:bg-red-700',
  };

  const disabledStyles = 'opacity-50 cursor-not-allowed';

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variants[variant]} ${disabled ? disabledStyles : ''} ${className}`}
    >
      {Icon && <Icon size={18} />}
      {label}
    </button>
  );
};

export default DynamicButton;
