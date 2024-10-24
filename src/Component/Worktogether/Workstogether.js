import React, { useRef, useState } from 'react';
import './Worktogether.scss';
import emailjs from '@emailjs/browser';

export default function Workstogether() {
  const form = useRef(); // Define the form reference here
  const [buttonText, setButtonText] = useState('Send Email'); // Button text state

  const sendEmail = (e) => {
    e.preventDefault();
    setButtonText('Sending...'); // Change button text when email is sending

    emailjs
      .sendForm(
        'service_y1kqg9t', // Your service ID
        'template_m50xumc', // Your template ID
        form.current, // Form reference
        'yg0fiHD_DMPbD6blQ' // Your public key
      )
      .then(() => {
        setButtonText('Send Email'); // Reset button text after success
        alert('Email successfully sent!');
      })
      .catch((error) => {
        setButtonText('Send Email'); // Reset button text on error
        alert('Email not sent, please try again. ' + JSON.stringify(error));
      });
  };

  return (
    <>
      <div className='container-fluid' id="worktogether-c-f">
        <div className='container'>
          <div className='col'>
            <h3>Let's Work Together</h3>
          </div>
          <div className='col p-5 mx-auto' id="worktogether-wrapper">
            <form ref={form} onSubmit={sendEmail}> {/* Attach the ref to the form */}
              <div className="form-group">
                <label htmlFor="username">Full Name:</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Full Name"
                  id="username"
                  name="from_name" // Change to match the name field in your EmailJS template
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="to_name">To Name:</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="To Name"
                  id="to_name"
                  name="to_name" // Make sure this matches the EmailJS template variable
                  defaultValue="Yogendra" // You can set a default value here
                  readOnly // Prevent user from changing this
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address:</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  id="email"
                  name="reply_to" // Reply_to field for EmailJS
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="mobile">Mobile:</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Mobile Number"
                  id="mobile"
                  name="mobile"
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Comment:</label>
                <textarea
                  className="form-control"
                  rows="5"
                  id="message"
                  name="message" // Message field for EmailJS
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-info" name="submit">
                {buttonText} {/* Dynamic button text */}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
