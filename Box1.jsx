const Box1 = ({ title }) => {
    return (
      <div className="OverallBox1">
        <div className="Box1Text">
          <h1 className="Box1title">{title} Fully Responsive</h1>
          <p className="box1para">
            When you use a theme created by Start Bootstrap, you know <br />
            that the theme will look great on any device, whether it's a <br />
            phone, tablet, or desktop the page will behave responsively!
          </p>
        </div>
        <img
          className="Box1img"
          src="https://th.bing.com/th/id/OIP.pENhHYTRCNhO4D7l8tpRmQAAAA?rs=1&pid=ImgDetMain"
          alt={title}
        />
      </div>
    );
  };
  
  export default Box1;
  