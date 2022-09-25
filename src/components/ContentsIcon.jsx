import React from 'react'
import './conteneticon.css'
const ContentsIcon = () => {
  return (
    <div className="ContentIconBox">
        <div className="contentBoxChild">
        <div>
            {/* <span class="material-symbols-outlined icon">lightbulb</span> */}
        <div className="ColorPicker">
            <input type='color' />
        </div>
        </div>
        
        </div>
        <div className="contentBoxChild">
        <div><span class="material-symbols-outlined icon">edit</span></div>
        </div>
        <div className="contentBoxChild">
        <div><span class="material-symbols-outlined icon">delete</span></div>
        </div>
        {/* <div className="contentBoxChild"></div> */}
    </div>
  )
}

export default ContentsIcon