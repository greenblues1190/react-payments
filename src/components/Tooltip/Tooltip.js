import React from 'react';
import PropTypes from 'prop-types';

const Tooltip = (props) => {
  const { innerText = '?', content } = props;

  return (
    <div className="relative">
      <button
        type="button"
        className="w-6 h-6  ml-2 flex justify-center items-center rounded-full ring-1 ring-gray-400 text-lg text-gray-400"
      >
        {innerText}
      </button>
      <div className="ring-1 rounded-2xl rounded-tl-none ring-black-700 w-24 absolute left-7 top-4 bg-gray-100">
        {content}
      </div>
    </div>
  );
};

export default Tooltip;
Tooltip.propTypes = {
  innerText: PropTypes.string,
  content: PropTypes.element.isRequired,
};
