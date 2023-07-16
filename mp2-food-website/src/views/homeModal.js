import React from 'react'
import { useState } from 'react';
import { useAccordionButton } from 'react-bootstrap';

const Modal = ({ openModal, setOpenModal }) => {
  const [input, setInput] = useState("");
  const [emailSend, setEmailSend] = useState(false);
  const sendEmail = () => {
     setEmailSend(true);
     console.log("The Email send is" + input);
     setTimeout(() => {
      setOpenModal(false)
     }, 2000)
    
  }

  return (
    <div className='w-screen h-screen border bg-white/60 text-white modalHome'>
      {!emailSend &&
      <div className='w-96 h-68 bg-orange-500/90 p-6 modalHomeEmail drop-shadow-2xl rounded'>
        <h3 className='text-2xl'>Subscribe to our newsletter</h3>
        <div className='pt-5 text-justify indent-4'>
          {" "}
          An email will be send to you everyweek. The email contains a new
          information that will be received and the information about the
          benefits of using our platform.{" "}
        </div>
        
        <div className='pt-3'>
          
          <label className='pr-2'>Email address:</label>
          <input
              type='email'
              placeholder='Email'
              className='border-2 border-black px-2 rounded text-black'
              label={"Input"}
              onChange={(event) => setInput(event.target.value)}
              required
              name='email'
              id='email'
              />
        
        </div>

        <div className='p-2'>
          <button className='mr-20 p-2 mt-4 border border-black rounded-lg bg-black/90 hover:bg-white hover:text-black ' onClick={sendEmail}>
              Send
          </button>
          <button className='p-2 mt-4 border border-black rounded-lg bg-black/90 hover:bg-white hover:text-black' onClick={() => {
          setOpenModal(false);
          }}>
            Cancel
          </button>
        </div>
      </div>}
    {emailSend &&
       
      <div className='w-96 h-68 bg-black/90 p-6 modalHomeEmail drop-shadow-2xl rounded'>
        <div>Email Sent</div>
      </div>}
      
    </div>
  );
};

export default Modal;
