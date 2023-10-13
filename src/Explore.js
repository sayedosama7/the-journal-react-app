/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

const Explore = () => {
  return (
    <>
            <div className="container explore">
        <div className="row">
            <div className="col-md-12">
                <h1>Explore The World</h1>
                <h5>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
                    et
                    <span> dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                        ut
                        aliquip ex
                        ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.</span>
                </h5>
            </div>

            <div className="col-md-4 position-relative mb-4">
                <img className="img-fluid" src="./imgs/img-2.jpg" alt=""/>
                <div className="explore-caption position-absolute fw-bold">
                    <h4>What Happens Tomorrow?</h4>
                    <p>manga aliqua</p>
                </div>
            </div>

            <div className="col-md-4 position-relative mb-4">
                <img className="img-fluid" src="./imgs/img-1.jpg" alt=""/>
                <div className="explore-caption position-absolute fw-bold">
                    <h4>What Happens Tomorrow?</h4>
                    <p>manga aliqua</p>
                </div>
            </div>

            <div className="col-md-4 position-relative mb-4">
                <img className="img-fluid" src="./imgs/img-3.jpg" alt=""/>
                <div className="explore-caption position-absolute fw-bold">
                    <h4>What Happens Tomorrow?</h4>
                    <p>manga aliqua</p>
                </div>
            </div>

            <div className="col-md-12">
                <a href="#">Load More <i className="fa-solid fa-angles-right text-info"></i></a>
            </div>
        </div>
    </div>    
    </>
  )
}

export default Explore