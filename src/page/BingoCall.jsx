import React, { useEffect, useState } from 'react';
import styles from '../css/BingoCall.module.css';
import Bingocard from '../images/bingocard.jpg'
import B1 from '../audio/B1.aac'
import B2 from '../audio/B2.aac'
import B3 from '../audio/B3.aac'
import B4 from '../audio/B4.aac'
import B5 from '../audio/B5.aac'
import B6 from '../audio/B6.aac'
import B7 from '../audio/B7.aac'
import B8 from '../audio/B8.aac'
import B9 from '../audio/B9.aac'
import B10 from '../audio/B10.aac'
import B11 from '../audio/B11.aac'
import B12 from '../audio/B12.aac'
import B13 from '../audio/B13.aac'
import B14 from '../audio/B14.aac'
import B15 from '../audio/B15.aac'
import I16 from '../audio/I16.aac'
import I17 from '../audio/I17.aac'
import I18 from '../audio/I18.aac'
import I19 from '../audio/I19.aac'
import I20 from '../audio/I20.aac'
import I21 from '../audio/I21.aac'
import I22 from '../audio/I22.aac'
import I23 from '../audio/I23.aac'
import I24 from '../audio/I24.aac'
import I25 from '../audio/I25.aac'
import I26 from '../audio/I26.aac'
import I27 from '../audio/I27.aac'
import I28 from '../audio/I28.aac'
import I29 from '../audio/I29.aac'
import I30 from '../audio/I30.aac'
import N31 from '../audio/N31.aac'
import N32 from '../audio/N32.aac'
import N33 from '../audio/N33.aac'
import N34 from '../audio/N34.aac'
import N35 from '../audio/N35.aac'
import N36 from '../audio/N36.aac'
import N37 from '../audio/N37.aac'
import N38 from '../audio/N38.aac'
import N39 from '../audio/N39.aac'
import N40 from '../audio/N40.aac'
import N41 from '../audio/N41.aac'
import N42 from '../audio/N42.aac'
import N43 from '../audio/N43.aac'
import N44 from '../audio/N44.aac'
import N45 from '../audio/N45.aac'

export const BingoCall = ({ currentNumber, calledNumbers,totalAmount }) => {
  const [animateCurrent, setAnimateCurrent] = useState(false);

useEffect(() => {
setAnimateCurrent(true);


const timeout = setTimeout(() => {
  setAnimateCurrent(false);
}, 2000); // Duration of the 'current' animation

return () => clearTimeout(timeout);
}, [currentNumber]);

  useEffect(() => {
    playAudioForNumber(currentNumber); // Play audio for the current number
  }, [currentNumber]);

  const playAudioForNumber = (number) => {
    let audio;

    switch (number) {
      case 'B1':
        audio = new Audio(B1);
        break;
      case 'B2':
        audio = new Audio(B2);
        break;
      case 'B3':
        audio = new Audio(B3);
        break;
        case 'B4':
          audio = new Audio(B4);
          break;
          case 'B5':
          audio = new Audio(B5);
          break;
          case 'B6':
          audio = new Audio(B6);
          break;
          case 'B7':
          audio = new Audio(B7);
          break;
          case 'B8':
          audio = new Audio(B8);
          break;
          case 'B9':
          audio = new Audio(B9);
          break;
          case 'B10':
          audio = new Audio(B10);
          break;
          case 'B11':
          audio = new Audio(B11);
          break;
          case 'B12':
          audio = new Audio(B12);
          break;
          case 'B13':
          audio = new Audio(B13);
          break;
          case 'B14':
            audio = new Audio(B14);
            break;
            case 'B15':
            audio = new Audio(B15);
            break;
            case 'I16':
              audio = new Audio(I16);
              break;
              case 'I17':
              audio = new Audio(I17);
              break;
              case 'I18':
              audio = new Audio(I18);
              break;
              case 'I19':
              audio = new Audio(I19);
              break;
              case 'I20':
              audio = new Audio(I20);
              break;
              case 'I21':
              audio = new Audio(I21);
              break;
              case 'I22':
              audio = new Audio(I22);
              break;
              case 'I23':
              audio = new Audio(I23);
              break;
              case 'I24':
              audio = new Audio(I24);
              break;
              case 'I25':
              audio = new Audio(I25);
              break;
              case 'I26':
              audio = new Audio(I26);
              break;
              case 'I27':
              audio = new Audio(I27);
              break;
              case 'I28':
              audio = new Audio(I28);
              break;
              case 'I29':
              audio = new Audio(I29);
              break;
              case 'I30':
              audio = new Audio(I30);
              break;
              case 'N31':
              audio = new Audio(N31);
              break;
              case 'N32':
              audio = new Audio(N32);
              break;
              case 'N33':
              audio = new Audio(N33);
              break;
              case 'N34':
              audio = new Audio(N34);
              break;
              case 'N35':
              audio = new Audio(N35);
              break;
              case 'N36':
              audio = new Audio(N36);
              break;
              case 'N37':
              audio = new Audio(N37);
              break;
              case 'N38':
              audio = new Audio(N38);
              break;
              case 'N39':
              audio = new Audio(N39);
              break;
              case 'N40':
              audio = new Audio(N40);
              break;
              case 'N41':
              audio = new Audio(N41);
              break;
              case 'N42':
              audio = new Audio(N42);
              break;
              case 'N43':
              audio = new Audio(N43);
              break;
              case 'N44':
              audio = new Audio(N44);
              break;
              case 'N45':
              audio = new Audio(N45);
              break;
      default:
        // Handle cases where no audio needs to be played
        break;
    }

    if (audio) {
      audio.play();
    }
  };

  const allPossibilities = [
    ...generatePossibilities('B', 1, 15),
    ...generatePossibilities('I', 16, 30),
    ...generatePossibilities('N', 31, 45),
    ...generatePossibilities('G', 46, 60),
    ...generatePossibilities('O', 61, 75)
  ];

  function generatePossibilities(letter, start, end) {
    const possibilities = [];
    for (let i = start; i <= end; i++) {
      possibilities.push(`${letter}${i}`);
    }
    return possibilities;
  }

  const rows = {
    B: allPossibilities.slice(0, 15),
    I: allPossibilities.slice(15, 30),
    N: allPossibilities.slice(30, 45),
    G: allPossibilities.slice(45, 60),
    O: allPossibilities.slice(60, 75),
  };

  // Get the five most recent called numbers
  const recentCalledNumbers = Array.from(calledNumbers).slice(-5);



  return (
    <div className={styles.bingocall}>
      <div className={styles.currentrecent}>
        <div className={styles.current11}>
          <div className={`${styles.current} ${animateCurrent ? styles.animated : ''}`}>
            <h3>{currentNumber}</h3>
          </div>
        </div>
      
      <div className={styles.img}>
        <img src={Bingocard} alt='no'/>
      </div>
      {/* Display the five most recently called numbers */}
      <div className={styles.recentCalledNumbers}>
  <h4>Recent 5 Numbers:</h4>
  <ul >
    {recentCalledNumbers.reverse().map((number) => (
      <li key={number} className={styles.recentNumber}>
        {number.startsWith('free') ? number.slice(4) : number} {/* Remove "free" if it exists */}
      </li>
    ))}
  </ul>
  <div>0948-256222</div>
</div>
      <div className={styles.derash}>
        <div className={styles.de}>ደራሽ</div>
        <div>{totalAmount}</div>
        <div>ብር</div>
      </div>
      </div>
      

      <div className={styles.bingoBoardcontainer}>
        <div className={styles.bingoBoard}>
          {Object.entries(rows).map(([letter, numbers]) => (
            <div key={letter} className={styles.bingoRow}>
               <h4 className={`${styles.letter} ${styles[letter]}`}>{letter}</h4>
              <ul className={styles.ul}>
                {numbers.map((number) => {
                  const numWithoutLetter = number.slice(1); // Remove the first character (letter)
                  return (
                    <li key={number} className={calledNumbers.has(number) ? (number === currentNumber ? `${styles.called} ${styles.animated}` : styles.called) : styles.uncalled}>
  {numWithoutLetter}
</li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};