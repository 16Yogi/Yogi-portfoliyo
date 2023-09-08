import React from 'react'
import './Nav.scss'
// import { TypeAnimation } from 'react-type-animation';
export default function Nav() {
  return (
    <>
       <div className='container-fluid position-sticky fixed-top' id="nav-co-f">
           <div className='container p-3'>
                <nav className="navbar navbar-expand-md navbar-dark">
                    <a className="navbar-brand " href="/">
                        <h1>Yoge<span className='text-info'>ndra</span></h1>
                    </a>
                    <button className="navbar-toggler bg-dark" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                      <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="collapsibleNavbar">
                        <ul className="navbar-nav">
                            <li className="nav-item p-2">
                                <a className="nav-link" href="/">Home</a>
                            </li> 
                            <li className="nav-item p-2">
                                <a className="nav-link" href="/">About us</a>
                            </li> 
                            <li className="nav-item p-2">
                                <a className="nav-link" href="/">Service</a>
                            </li> 
                            <li className="nav-item p-2">
                                <a className="nav-link" href="/">Projects</a>
                            </li> 
                            <li className="nav-item p-2">
                                <a className="nav-link" href="/">Contact us</a>
                            </li>    
                        </ul>
                    </div>  
                </nav>
           </div>
       </div>
    </>
    )
}
