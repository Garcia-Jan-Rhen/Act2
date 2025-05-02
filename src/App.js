// src/App.js
import React, { useState } from 'react';
import { questions } from './data';
import QuestionCard from './components/QuestionCard';
import Score from './components/Score';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState('');      // ← track the picked answer
  const [showScore, setShowScore] = useState(false);

  // Called when user clicks an option button
  const handleSelect = (option) => {
    setSelected(option);
  };

  // Called when user clicks the Next button
  const handleNext = () => {
    // Check answer
    if (selected === questions[current].answer) {
      setScore((s) => s + 1);
    }

    const next = current + 1;
    if (next < questions.length) {
      setCurrent(next);
      setSelected('');     // reset for new question
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="container mt-5">
      {!showScore ? (
        <QuestionCard
          question={questions[current]}
          selected={selected}
          onSelect={handleSelect}
          onNext={handleNext}
        />
      ) : (
        <Score score={score} total={questions.length} />
      )}
    </div>
  );
}

export default App;
