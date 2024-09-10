const Box2 = ({ title }) => {
    return (
      <div className="OverallBox2">
          <img
          className="Box2img"
          src="https://th.bing.com/th/id/OIP.vqAFiVTfsVLvrB4mUCh48QHaEo?rs=1&pid=ImgDetMain"
          alt={title}
        />
        <div className="Box2Text">
          <h1 className="Box2title">{title} Updated For Bootstrap 5</h1>
          <p className="box2para">
          Newly improved, and full of great utility classes, Bootstrap 5 <br/> is leading the way in mobile responsive web development! All of <br/>the themes on Start Bootstrap are now using Bootstrap 5!!
          </p>
        </div>
      
      </div>
    );
  };
  
  export default Box2;
  