import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { BingoCall } from './BingoCall';
import styles from '../css/RandomBingoNumber.module.css';
import notRegisteredAudio from '../audio/notregistered.aac'
function RandomBingoNumber() {
  const [currentNumber, setCurrentNumber] = useState('');
  const [calledNumbers, setCalledNumbers] = useState(() => {
    const cachedCalledNumbers = JSON.parse(localStorage.getItem('calledNumbers'));
    const initialCalledNumbers = new Set(cachedCalledNumbers);
    if (!initialCalledNumbers.has('free')) {
      initialCalledNumbers.add('free');
    }
    return initialCalledNumbers;
  });
  const [isPlaying, setIsPlaying] = useState(false);
  const [cardNumberInput, setCardNumberInput] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const { registeredNumbers, selectedAmount } = location.state;
  const totalAmount = selectedAmount * registeredNumbers.length;

  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const generateNumber = (letter) => {
    switch (letter) {
      case 'B':
        return `B${generateRandomNumber(1, 15)}`;
      case 'I':
        return `I${generateRandomNumber(16, 30)}`;
      case 'N':
        return `N${generateRandomNumber(31, 45)}`;
      case 'G':
        return `G${generateRandomNumber(46, 60)}`;
      case 'O':
        return `O${generateRandomNumber(61, 75)}`;
      default:
        return '';
    }
  };

  const generateRandomBingoNumber = () => {
    const letters = ['B', 'I', 'N', 'G', 'O'];
    let newRandomNumber = '';

    if (calledNumbers.size === 76) {
      setIsPlaying(false);
      return;
    }

    do {
      const randomLetter = letters[Math.floor(Math.random() * letters.length)];
      newRandomNumber = generateNumber(randomLetter);
    } while (calledNumbers.has(newRandomNumber));

    setCalledNumbers(new Set(calledNumbers).add(newRandomNumber));
    setCurrentNumber(newRandomNumber);
  };

  useEffect(() => {
    let interval;

    if (isPlaying) {
      interval = setInterval(() => {
        generateRandomBingoNumber();
      }, 3000);
    }

    return () => {
      clearInterval(interval);
      localStorage.setItem('calledNumbers', JSON.stringify(Array.from(calledNumbers)));
    };
  }, [calledNumbers, isPlaying]);

  const handlePlayStopToggle = () => {
    setIsPlaying((prevIsPlaying) => !prevIsPlaying);
  };

  

  const handleCardNumberChange = () => {
    // Check if the entered card number is found in the registeredNumbers
    if (registeredNumbers.some(number => String(number).includes(cardNumberInput))) {
      setCardNumber(cardNumberInput);
  
      // Use a switch statement to navigate to the corresponding Card component based on the card number
      switch (cardNumberInput) {
        case '1':
          navigate(`/card1?cardNumber=${cardNumberInput}&calledNumbers=${JSON.stringify([...calledNumbers])}`);
          break;
        case '2':
          navigate(`/card2?cardNumber=${cardNumberInput}&calledNumbers=${JSON.stringify([...calledNumbers])}`);
          break;
        // Add cases for more card numbers as needed
        default:
          // Do nothing if the card number is not explicitly handled
          break;
      }
    } else {
      // Play the "not registered" audio when the card number is not found in registeredNumbers
      const audio = new Audio(notRegisteredAudio);
      audio.play();
    }
  };

  return (
    <div className={styles.randombingonumber}>
      <BingoCall currentNumber={currentNumber} calledNumbers={calledNumbers} totalAmount={totalAmount}/>

      <div className={styles.playcard}>
      <button onClick={handlePlayStopToggle} className={isPlaying ? styles.stopbutton : styles.playbutton}>
  {isPlaying ? 'Stop' : 'Play'}
</button>
        <div>
          <input  className={styles.input}
            type="text"
            value={cardNumberInput}
            onChange={(e) => setCardNumberInput(e.target.value)}
            placeholder="Enter Card Number"
          />
          <button onClick={handleCardNumberChange} className={styles.check}>Check</button>
        </div>
      </div>
    </div>
  );
}

export default RandomBingoNumber;