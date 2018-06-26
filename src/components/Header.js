import React from 'react';

const Header = (props) => {
  return (
    <div className='header'>
      <p>{props.title}</p>
      <a href='#'>new</a>
      <a href='#' className='header__login'>login</a>
    </div>
  )
}
export default Header;