import React from 'react';

interface ButtonBlueProps {
  type: string;
  title: string;
}

const ButtonBlue = ({ type, title }: ButtonBlueProps) => {
  return (
    <button
      className={`px-5 py-2 rounded-md text-14 ${type === 'Follow' ? 'bg-mygreenblue text-white hover:bg-white hover:text-mygreenblue' : 'bg-white text-mygreenblue hover:bg-mygreenblue hover:text-white'}`}
    >
      {title}
    </button>
  );
};

export default ButtonBlue;
