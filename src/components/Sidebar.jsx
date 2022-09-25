import React from 'react'
import './leftpanl.css'
const Sidebar = () => {
  return (
  <div className="leftPanelContainer">
      <div className='leftpanelFirstChild'>
      <div className='leftPanel'>
     <div id='lightIcon'><span class="material-symbols-outlined icon">lightbulb</span></div>
     <div><span class="material-symbols-outlined icon">notifications</span></div>
     <div><span class="material-symbols-outlined icon">edit</span></div>
     <div> <span class="material-symbols-outlined icon">system_update_alt</span></div>
    <div><span class="material-symbols-outlined icon">delete</span></div>
    </div>
      <div className='leftPanel2'>
      <div className='sidebarName' id='notes'>Notes</div>
      <div className='sidebarName'>Reminders</div>
      <div className='sidebarName'>Edit Labels</div>
      <div className='sidebarName'> Archive</div>
      <div className='sidebarName'>Bin</div>
      </div>
    </div>
  </div>
    // <div className='leftPanel'>
    //  <div className="leftpanelFirstChild ">
    //  <div><span class="material-symbols-outlined icon">lightbulb</span></div>
    //  <div className='sidebarName'>Notes</div>
    //  </div>
    //  <div className="leftPanelSecChild">
    //   <div>     <span class="material-symbols-outlined icon">notifications</span></div>
    //   <div className='sidebarName'>Reminders</div>
    //  </div>
    //  <div className="leftPanelThirdChild">
    //  <div><span class="material-symbols-outlined icon">edit</span></div>
    //  <div className='sidebarName'>Edit Labels</div>
    //  </div>
    //  <div className="leftPanelFourthChild">
    // <div> <span class="material-symbols-outlined icon">system_update_alt</span></div>
    // <div className='sidebarName'> Archive</div>
    //  </div>
    //  <div className="leftPanelFifthChild">
    // <div>
    // <span class="material-symbols-outlined icon">delete</span>
    // </div>
    // <div className='sidebarName'>Bin</div>
    //  </div>
    // </div>
  )
}

export default Sidebar