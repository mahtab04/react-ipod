import artistsPic from './images/artists.jpg';

const Artists = (props) => {
  return (
    <div>
      <img style={style} src={artistsPic} alt=""></img>
    </div>
  );
}

export default Artists;

const style = {
  width: 100.5 + '%',
  height: 184
}