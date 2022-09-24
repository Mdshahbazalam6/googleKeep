import React from 'react'

const Sidebar = () => {
  return (
    <div className='leftPanel'>
     <div className="leftpanelFirstChild ">
     <div><span class="material-symbols-outlined icon">lightbulb</span></div>
     <div className='sidebarName'>Notes</div>
     </div>
     <div className="leftPanelSecChild">
      <div>     <span class="material-symbols-outlined icon">notifications</span></div>
      <div className='sidebarName'>Reminders</div>
     </div>
     <div className="leftPanelThirdChild">
     <div><span class="material-symbols-outlined icon">edit</span></div>
     <div className='sidebarName'>Edit Labels</div>
     </div>
     <div className="leftPanelFourthChild">
    <div> <span class="material-symbols-outlined icon">system_update_alt</span></div>
    <div className='sidebarName'> Archive</div>
     </div>
     <div className="leftPanelFifthChild">
    <div>
    <span class="material-symbols-outlined icon">delete</span>
    </div>
    <div className='sidebarName'>Bin</div>
     </div>
    </div>
  )
}

export default Sidebar