import React, { useState, useEffect } from 'react';
import styles from '../css/start.module.css';
import { useNavigate } from 'react-router-dom';
import BingoCard from '../images/bingocard.jpg';
import startAudio from '../audio/start.aac'
const StartBingo = () => {
  const [registeredNumbers, setRegisteredNumbers] = useState([]);
  const [selectedAmount, setSelectedAmount] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    const storedNumbers = localStorage.getItem('registeredNumbers');
    const storedAmount = localStorage.getItem('selectedAmount');
    
    if (storedNumbers) {
      setRegisteredNumbers(JSON.parse(storedNumbers));
    }

    if (storedAmount) {
      setSelectedAmount(parseInt(storedAmount, 10));
    }
  }, []);

  const handleClick = () => {
    // Play audio when the 'Start' button is clicked
    const audio = new Audio(startAudio);
    audio.play();

    navigate('/randombingonumber', {
      state: { registeredNumbers, selectedAmount }
    });
  };

  const handleregisterClick = () => {
    navigate('/registerdcard');
  };
  return (
    <div className={styles.container}>
      <div className={styles.link} onClickCapture={handleregisterClick}>registercard</div>
      <div className={styles.card}>
        <img src={BingoCard} alt="Bingo Card" />
      </div>
      <div className={styles.button} onClick={handleClick}>
        Start
      </div>
    </div>
  );
};

export default StartBingo;