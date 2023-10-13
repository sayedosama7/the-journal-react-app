/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

const Journal = () => {
    return (
        <>
    <div className="container journal text-center">
        <div className="row">
            <div className="col-md-12 my-3">
                <h1>the journal</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure fugiat vitae adipisci. Aliquid in,
                    <span>necessitatibus, accusantium enim facere error doloribus quo ab est magnam quisquam tenetur
                        sunt id!
                        Explicabo, quisquam?</span>
                </p>
            </div>
            <div className="col-md-6">
                <img className="img-fluid mb-3" src="./imgs/blog-1.jpg" alt=""/>
                <h6>30 June, 2018</h6>
                <h2>etismd tempar</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. <span>Quo libero voluptates minus quidem
                        eveniet
                        quas, est hic nesciunt nobis voluptate!</span></p>
            </div>

            <div className="col-md-6">
                <img className="img-fluid mb-3" src="./imgs/blog-2.jpg" alt=""/>
                <h6>30 June, 2018</h6>
                <h2>etismd tempar</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. <span>Quo libero voluptates minus quidem
                        eveniet
                        quas, est hic nesciunt nobis voluptate!</span></p>
            </div>

            <div className="col-md-12">
                <a href="#">all posts<i className="fa-solid fa-angles-right text-info m-2"></i></a>
            </div>
        </div>
    </div>
        </>
    )
}

export default Journal