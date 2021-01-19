import React from 'react';

function PrimaryButton({text}) {
  return (
    <button className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:bg-indigo-500 focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-indigo-500">
        {text}
    </button>
  );
}

export default PrimaryButton;
