import React from 'react'
import classes from './footer.module.css'
import { SocialIcon } from 'react-social-icons'
const Footer = () => {
  return (
    <footer>
      <div className={classes.wrapper}>
        <div className={classes.col}>
          <h2>About the App</h2>
          <p>
          Real estate website: A platform for buying and selling  properties. Features listings, property details, and tools for users.
          </p>
        </div>
        <div className={classes.col}>
          <h2>Contacts</h2>
          <span>Phone: +91 7761 920532</span>
          <span onClick  = {()=>{  window.location.href = 'mailto:987654321akbr@gmail.com';}}>
    
        <SocialIcon url="https://mail.google.com/" style={{ height: '25px', position: 'relative', right: '10px' }} />
        987654321akbr@gmail.com
     
    </span>
          <span><SocialIcon url="https://github.com/AkbarImam1" style = {{height:'25px',position:'relative',right:'10px'}}/>GitHub: AkbarImam1</span>
        </div>
        <div className={classes.col}>
          <h2>Location</h2>        
          <span>Country: India</span>
          <span>Current Location: Aligarh</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer