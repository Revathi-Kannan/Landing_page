import PropTypes from "prop-types"
import styles from "./Header.module.css"

const Header = () => {
return(
    <div>
    <h1 className={styles['Bootstrap']}>Start Bootstrap</h1>
    <button className={styles['sign']}>Sign Up</button>
    
  
    </div>
)

}

export default Header


// Header.PropTypes ={
//     title:PropTypes.string
// }   