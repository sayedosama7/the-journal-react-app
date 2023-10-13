/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

const Header = () => {
  return (
    <>
    <header>
        <nav>
            <a href="">home</a>
            <a href="">explore</a>
            <i className="fa-solid fa-location-dot"></i>
            <a href="">journal</a>
            <div>
                <i className="fa-solid fa-magnifying-glass"></i>
                <a href="">search</a>
            </div>
        </nav>
        <div className="header-title">
            <h1>What Happens Tomorrow?</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt</p>
            <div className="watch-video">
                <i className="fa-solid fa-play"></i>
                <h4>watch video</h4>
            </div>
        </div>
    </header>
    </>
  )
}

export default Header