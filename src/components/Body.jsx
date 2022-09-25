import React from 'react'
import './body.css'
import RightPanel from './RightPanel'
import Sidebar from './Sidebar'
const Body = () => {
  return (
    <div className='bodyContainer'>
     <Sidebar />
     {/* <div className='Main'></div> */}
     < RightPanel />
    </div>
  )
}

export default Body