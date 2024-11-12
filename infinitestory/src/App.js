// App.js
import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const storyParts = {
  1: {
      text: "You are Ava Carter, a young artist living in the bustling city of Silvergate. One rainy afternoon, you walk into your favorite café and see someone you haven't spoken to in years: Ethan. The last time you saw him, things didn't end well. You stand frozen, unsure if you should say hello or leave quietly. What will you do?",
      choices: [
          { text: "Enter the café and say hello.", nextPart: 2 },
          { text: "Pretend not to see him and leave the store.", nextPart: 3 }
      ]
  },
  2: {
      text: "You decide to confront your nerves head-on and walk up to Ethan. He looks up, surprised, but a warm smile quickly forms on his face. 'Ava? It's been a while. How are you?' he asks, his voice familiar yet distant. You feel a mix of emotions. Do you want to reconnect, or are you still holding on to the past?",
      choices: [
          { text: "Agree to meet for coffee.", nextPart: 4 },
          { text: "Say you’re not ready to revisit the past.", nextPart: 5 },
          { text: "Politely decline and leave.", nextPart: 6 }
      ]
  },
  3: {
      text: "You decide to walk away. As you step out of the café, you can't help but feel a pang of regret, wondering what might have happened if you'd stopped to talk. Life continues as usual, but the memory of that moment lingers, like a chapter that remains unfinished.\n\nThe End.",
      choices: [
          { text: "Start Over", nextPart: 1 },
          { text: "End Game", nextPart: null}
      ]
  },
  4: {
      text: "You agree to meet Ethan for coffee, curiosity getting the better of you. As you sit down, the conversation flows easily, yet there's an underlying tension. Eventually, he brings up the past. 'I've thought a lot about us,' he admits. 'I regret how things ended.' You feel your heart skip a beat. What will you do?",
      choices: [
          { text: "Admit that you’ve thought about him too.", nextPart: 7 },
          { text: "Change the subject to something lighter.", nextPart: 8 },
          { text: "Tell him you’ve moved on and don’t want to revisit the past.", nextPart: 9 }
      ]
  },
  5: {
      text: "You tell Ethan that you're not ready to revisit the past. He nods, understanding, but there's a look of disappointment in his eyes. 'Maybe another time,' he says softly. You leave the café, feeling like you closed a door that was slightly ajar. Perhaps it's for the best, but you can't help but wonder what might have been.\n\nThe End.",
      choices: [
          { text: "Start Over", nextPart: 1 },
          { text: "End Game", nextPart: null}
      ]
  },
  6: {
      text: "You politely decline and leave, your heart heavy with the weight of unresolved feelings. As you walk down the street, the rain starts pouring harder. You tell yourself you made the right choice, but deep down, a part of you is unsure. Some stories, it seems, are never fully over.\n\nThe End.",
      choices: [
          { text: "Start Over", nextPart: 1 },
          { text: "End Game", nextPart: null}
      ]
  },
  7: {
      text: "You admit to Ethan that you’ve thought about him too. A sense of relief washes over him, and the conversation turns deeper. You talk about what went wrong, what could have been, and whether there's a chance to start over. After hours of talking, you both agree to try again, but cautiously. Life has changed, but perhaps you can find a new path together.\n\nEnding: A New Beginning.",
      choices: [
          { text: "Start Over", nextPart: 1 },
          { text: "End Game", nextPart: null}
      ]
  },
  8: {
      text: "You decide to change the subject, avoiding the emotional weight of the conversation. Ethan notices and follows your lead, but the atmosphere remains a little awkward. You finish your coffee, exchange polite words, and part ways. It feels like there was more to say, but neither of you had the courage to go there.\n\nEnding: Unfinished Business.",
      choices: [
          { text: "Start Over", nextPart: 1 },
          { text: "End Game", nextPart: null}
      ]
  },
  9: {
      text: "You tell Ethan that you’ve moved on. His face falls, but he nods in understanding. 'I see,' he says quietly. 'I'm happy for you.' The two of you finish your coffee in a subdued silence. When you leave the café, you feel a sense of closure, but also an unshakable sadness. Some doors are meant to remain closed.\n\nEnding: Closed Chapter.",
      choices: [
          { text: "Start Over", nextPart: 1 },
          { text: "End Game", nextPart: null}
      ]
  }
};

const StoryText = ({ text }) => {
    const [displayedText, setDisplayedText] = useState('');

    useEffect(() => {
        let isMounted = true;
        setDisplayedText('');
        
        const displayText = async () => {
            for (let i = 0; i <= text.length; i++) {
                if (isMounted) {
                    setDisplayedText(text.slice(0, i));
                    await new Promise((resolve) => setTimeout(resolve, 30)); // Typing delay
                }
            }
        };

        displayText();

        return () => {
            isMounted = false;
        };
    }, [text]);

    return <div className="story-text">{displayedText}</div>;
};

const ChoiceButtons = ({ choices, onChoiceSelect }) => (
    <div className="choices">
        {choices.map((choice, index) => (
            <button
                key={index}
                className="choice-btn"
                onClick={() => onChoiceSelect(choice.nextPart)}
            >
                {choice.text}
            </button>
        ))}
    </div>
);

const ProgressBar = ({ progress, isGameOver }) => (
    <div className="progress-bar">
        <div
            className="progress"
            style={{
                width: isGameOver ? '100%' : `${progress}%`,
                backgroundColor: isGameOver ? 'gold' : '#4caf50', // Change color to gold when game is over
            }}
        ></div>
    </div>
);

const App = () => {
    const [currentPartId, setCurrentPartId] = useState(1);
    const [progress, setProgress] = useState(0);
    const [isGameOver, setIsGameOver] = useState(false); 

    const storyPart = storyParts[currentPartId];

    useEffect(() => {
        const totalParts = Object.keys(storyParts).length;
        setProgress((currentPartId / totalParts) * 100);
    }, [currentPartId]);

    const handleChoiceSelect = (nextPartId) => {
        if (nextPartId === null) {
            setIsGameOver(true); 
        } else {
            setCurrentPartId(nextPartId);
        }
    };

    const restartGame = () => {
        setIsGameOver(false);
        setCurrentPartId(1);
    };

    return (
        
        <div className="app">
            <div className="story-container">
                <ProgressBar progress={progress} isGameOver={isGameOver} /> {}
                {!isGameOver ? (
                    <>
                        <StoryText text={storyPart.text} />
                        <ChoiceButtons choices={storyPart.choices} onChoiceSelect={handleChoiceSelect} />
                    </>
                ) : (
                    <div className="end-game">
                        <h2>Thank you for playing!</h2>
                        <p>We hope you enjoyed the journey of Ava Carter. Feel free to start over or explore more stories.</p>
                        <a href="http://127.0.0.1:5500/newstory.html" className="choice-btn">
                            Explore More Stories
                        </a>
                        <button className="choice-btn" onClick={restartGame}>
                            Start Over
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default App;

