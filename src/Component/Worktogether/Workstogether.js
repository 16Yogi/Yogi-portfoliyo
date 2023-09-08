import React from 'react'
import './Worktogether.scss'
export default function Workstogether() {
  return (
    <>
        <div className='container-fluid' id="worktogether-c-f">
            <div className='container'>
                {/* <div className='row'> */}
                    <div className='col'>
                        <h3>Let's Work Together</h3>
                    </div>
                    <div className='col p-5 mx-auto' id="worktogether-wrapper">
                        <form action="/action_page.php">
                            <div class="form-group">
                              <label for="username">Full Name:</label>
                              <input type="text" class="form-control" placeholder="Full Name" id="username"/>
                            </div>
                            <div class="form-group">
                              <label for="email">Email Address:</label>
                              <input type="email" class="form-control" placeholder="Email" id="email"/>
                            </div>
                            <div class="form-group">
                              <label for="mobile">Mobile:</label>
                              <input type="mobile" class="form-control" placeholder="Mobile Number" id="mobile"/>
                            </div>
                            <div class="form-group">
                              <label for="comment">Comment:</label>
                              <textarea class="form-control" rows="5" id="comment"></textarea>
                            </div>
                            <div class="form-group form-check">
                              <label class="form-check-label">
                                <input class="form-check-input" type="checkbox"/> Remember me
                              </label>
                            </div>
                            <button type="submit" class="btn btn-info">Submit</button>
                        </form>
                    </div>
                {/* </div> */}
            </div>
        </div>
    </>
    )
}
