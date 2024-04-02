import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

const Button = ({ text, color, size }) => {
  const buttonStyle = {
    backgroundColor: color,
    fontSize: size === 'small' ? '12px' : size === 'medium' ? '16px' : '20px',
    padding: size === 'small' ? '5px 10px' : size === 'medium' ? '10px 20px' : '15px 30px',
  };

  return (
    <button className="button" style={buttonStyle}>
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['small', 'medium', 'large']).isRequired,
};

export default Button;