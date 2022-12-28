import './css/allSongs.css';

import song from './songs/TroyBoiAfterhours.mp3';

function AllSongs(props) {
    return (
      <div id="allSongs">
          <div className="thumnail">
          <img src="https://covers.djpunjab.pro/image/497801/Signed-To-God-1.jpg" alt="thumbnail"></img>
              <div className="song-details">
                <span>Afterhours</span>
                <small>TroyBoi</small>
              </div>
          </div>
          
          <audio 
            src={song} 
            controls autoPlay
          >
          </audio>
      </div>
    );
  }
  
  export default AllSongs;
  