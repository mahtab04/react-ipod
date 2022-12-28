import './css/allSongs.css';

import song from './songs/Signed to God - Moosetape 320 Kbps.mp3';

const AllSongs = (props) => {
  return (
    <div id="allSongs">
      <div className="thumnail">
        <img src="https://covers.djpunjab.pro/image/497801/Signed-To-God-1.jpg" alt="thumbnail"></img>
        <div className="song-details">
          <span>Signed to God</span>
          <small>Siddhu Moosewala</small>
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
