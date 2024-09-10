import PropTypes from "prop-types"


const Icons = ({title, description, image}) =>{

    
        return(
            <div className="IconOverall">
                <img src={image} alt ={title}/>
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
        )

}

Icons.PropTypes={
    title:PropTypes.string,
    description: PropTypes.string,
    type:PropTypes.string
}

export default Icons