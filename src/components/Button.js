import React from 'react';
import './Button.css';

/**
 * The only true button.
 */

function click() {
  alert('I am here');
}

function Button() {
  return (
    <button type="button" class="Button" onClick={click}>Go</button>
  )
}

export default Button;
















