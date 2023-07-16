import React from 'react'

export default function Modal({open, children, onClose}) {
    if (!open) return null

  return (
    <div className='homeModal bg-slate-950/50 h-screen w-screen flex justify-center items-center'>
        <div className='w-9/12 h-5/6 bg-orange-300  overflow-auto pb-10 '>
          <div className='grid grid-cols-4  p-6'>
            {children}
           
            <div>
            <button onClick={onClose} className='fixed border border-black p-2 top-20 right-60 p-2 rounded-lg hover:bg-orange-600 hover:text-white hover:rounded-lg bg-orange-500  font-bold'>Close</button>
          </div>
          </div>
          
        </div>
    </div>
  )
}
