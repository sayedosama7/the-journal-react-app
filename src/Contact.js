/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

const Contact = () => {
  return (
    <>
      <div class="container-fluid contact">
        <div class="row">
          <div class="col-md-12 mt-5">
            <h1>contact us</h1>
            <p>Feel Free To Drop Us A Line.</p>
            <form action="">
              <input type="text" name="name" id="" placeholder="your name"/>
                <input type="text" name="email" id="" placeholder="enter email"/>
                  <textarea name="" id="" placeholder="write something"></textarea>
                  <input type="submit" value="send message"/>
                  </form>
                  <h3 class="mt-3">© 2023, Made with <span><a href="#">sayed osama</a></span></h3>
                </div>
              </div>
          </div>
        </>
        )
}

        export default Contact