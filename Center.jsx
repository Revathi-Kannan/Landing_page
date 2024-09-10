import PropTypes from "prop-types"
import styles from "./Center.module.css"

const Center = ({text,email}) => {
return( 
<div>
<img className={styles["pic"]}
        src="https://images.hdqwalls.com/download/sunset-ocean-5k-xx-1920x1200.jpg"
        alt="Ocean Sunset"
      
      />
<h2 className={styles["text"]}>{text} Generate more leads with a<br/> professional landing page!</h2>
<button className= {styles['sub']}>Submit</button>

<input className= {styles['emailbut']}
type="email"
placeholder="Email Address"
value={email}
 /> 
</div>

)
}


export default Center

// Header.PropTypes ={
//     title:PropTypes.string
// }   


Center.PropTypes = {
  
    text: PropTypes.string,
    email: PropTypes.string
}


