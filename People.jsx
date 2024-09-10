import PropTypes from "prop-types"


const People = ({ title1, description1, image1}) =>{

    
        return(
            <div className="IconOverall">
             
                <img src={image1} alt ={title1}/>
                <h2>{title1}</h2>
                <p>{description1}</p>
            </div>
        )

}

People.PropTypes={
    title1:PropTypes.string,
    description1: PropTypes.string,
    type:PropTypes.string
}

export default People