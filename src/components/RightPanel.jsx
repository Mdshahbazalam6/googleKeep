import React from 'react'
import './body.css'
import ContentsIcon from './ContentsIcon'
const RightPanel = () => {
    let arr = [1,2,3,1,1,1,1,1,1,1]
  return (
    <div className='MainBody'>
        <div className="inputContainer">
            <input className='BodyInput' type="text" placeholder='Take a Note...' />
        </div>
    <div className="notesContainer">
        {
            arr.map((ele)=>{
                return <div className='ContentBox'>
                 <div className="noteBox">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est natus, delectus nam voluptates officiis commodi exercitationem nihil porro asperiores in veniam, provident deleniti harum, dicta obcaecati aperiam rerum eligendi. Quis.</div>
                 <ContentsIcon />
                </div>
            })
        }
    </div>
    </div>
  )
}

export default RightPanel