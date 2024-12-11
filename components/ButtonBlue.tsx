import React from 'react';

interface ButtonBlueProps {
  type: string;
  title: string;
}

const ButtonBlue = ({ type, title }: ButtonBlueProps) => {
  return (
    <button
      className={`px-6 py-2 rounded-md ${type === 'Follow' ? 'bg-mygreenblue text-white hover:bg-white hover:text-mygreenblue' : 'bg-white text-mygreenblue hover:bg-mygreenblue hover:text-white'}`}
    >
      {title}
    </button>
  );
};

export default ButtonBlue;
