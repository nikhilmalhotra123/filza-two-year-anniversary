import './App.css';
import quotes from './quotes';
import React, { useState } from 'react';
import Countdown from 'react-countdown';
import img0 from './images/0.png';
import img1 from './images/1.png';
import img2 from './images/2.png';
import img3 from './images/3.png';
import img4 from './images/4.png';
import img5 from './images/5.png';
import img6 from './images/6.png';
import img7 from './images/7.png';
import img8 from './images/8.png';
import img9 from './images/9.png';
import img10 from './images/10.png';
import img11 from './images/11.png';
import img12 from './images/12.png';
import img13 from './images/13.png';
import img14 from './images/14.png';
import img15 from './images/15.png';
import img16 from './images/16.png';
import img17 from './images/17.png';
import img18 from './images/18.png';
import img19 from './images/19.png';
import img20 from './images/20.png';
import img21 from './images/21.png';


const IMAGES = [img0, img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16, img17, img18, img19, img20, img21];

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function App() {
  const numQuotes = quotes.length;
  const numImages = IMAGES.length;

  const [quoteIndex, setQuoteIndex] = useState(getRandomInt(numQuotes));
  const [imageIndex, setImageIndex] = useState(getRandomInt(numImages));

  function updateQuoteAndImage() {
    setQuoteIndex(getRandomInt(numQuotes));
    setImageIndex(getRandomInt(numImages));
  }

  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return <div>I didn't program what to do anymore</div>;
    } else {
      // Render a countdown
      return <span>Time till 3 years: {days} Days {hours} Hours {minutes} Minutes {seconds} Seconds</span>;
    }
  };

  return (
    <div className="App">
      <header className="header">
        <div>❤️❤️❤️ Happy 2 Year Anniversary Cutie! ❤️❤️❤️</div>

      </header>
      <Countdown
        date={new Date(2022, 9, 27)}
        renderer={renderer}
      />
      <div className="main">
        <img src={IMAGES[imageIndex]} className="App-logo" alt="logo" />
        <p>{quotes[quoteIndex]}</p>
        <button className="new-button" onClick={() => updateQuoteAndImage()}>Click to get a new picture or quote or both</button>
      </div>
      <div>Made with ❤️ by Nikhil</div>
    </div>
  );
}

export default App;
