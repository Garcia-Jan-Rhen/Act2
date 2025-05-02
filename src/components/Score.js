import React from 'react';

const Score = ({ score, total }) => {
  const percentage = ((score / total) * 100).toFixed(2);
  return (
    <div className="text-center mt-5">
      <h2>Quiz Complete!</h2>
      <div className="alert alert-info mt-4">
        <h4>Your Score: {score} / {total}</h4>
        <p>Percentage: {percentage}%</p>
      </div>
    </div>
  );
};

export default Score;
