import React from 'react'
import './header.css'
const Header = () => {
  return (
    <div className="headerContainer">
        <div className="headerfirstChild">
            <div><span class="material-symbols-outlined icon" >menu</span></div>
            <div><img className='headerfirstChildimg' src="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png" alt="googlekeep" /></div>
            <div><p className='headerfirstChildptag'>Keep</p></div>
        </div>
       <div className='headersecChildParent'>
       <div className="headersecChild">
            <div><span class="material-symbols-outlined headersecChildicon icon">search</span></div>
            <input className='headersecChildinput' type="text" placeholder='Search'/>
            <div><span class="material-symbols-outlined headersecChildicon icon">close</span></div>
        </div>
       </div>
        <div className="headerthirdChild">
            <div><span class="material-symbols-outlined icon2">refresh</span></div>
            <div><span class="material-symbols-outlined icon2" >density_medium</span></div>
            <div><span class="material-symbols-outlined icon2" >settings</span></div>
        </div>
        <div className="headerfourthChild">
            <div><span class="material-symbols-outlined icon">apps</span></div>
            <img className='headerfourthChildimg' src="https://sp.yimg.com/ib/th?id=OPA.Z7wLUfZO9mpFFQ474C474&o=5&pid=21.1" alt="" />
        </div>
        
    </div>
  )
}

export default Header