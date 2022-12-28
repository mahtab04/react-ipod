import './css/controls.css';

function Controls(props) {
    return (
      <section id="controls" onClick={props.rotateEvent}>
        <div id="wheel">
          <span 
            id="menu-button"
            className="buttons" 
            style={ {top: 20} }
            onClick={props.handleMenuClick}
          >
            Menu
          </span>
          <img className="buttons" draggable="false"
            src="https://cdn-icons-png.flaticon.com/512/6153/6153441.png" alt="left" 
            style={ {left: 13, width: 40} }>
          </img>
          <img className="buttons" draggable="false"
            src="https://cdn-icons-png.flaticon.com/512/4340/4340043.png" alt="right" 
            style={ {right: 13, width: 40} }>
          </img>
          <img className="buttons" draggable="false"
            src="https://cdn-icons-png.flaticon.com/512/6364/6364389.png" alt="bottom" 
            style={ {bottom: 13, width: 30, height: 37} }>
          </img>
          
          <div id="ok-button" onClick={props.handleOk}>
            
          </div>
        </div>
      </section>
    );
  }
  
  export default Controls;
  