import React from 'react';

const QuestionCard = ({ question, selected, onSelect, onNext }) => (
  <div className="row justify-content-center">
    <div className="col-md-8">
      <div className="card shadow p-4">
        <h4 className="card-title mb-3">{question.text}</h4>

        <div className="d-grid gap-2">
          {question.options.map((opt) => (
            <button
              key={opt}
              className={`btn btn-outline-primary ${
                selected === opt ? 'active' : ''
              }`}
              onClick={() => onSelect(opt)}
            >
              {opt}
            </button>
          ))}
        </div>

        <button
          className="btn btn-success mt-4 w-100"
          disabled={!selected}
          onClick={onNext}
        >
          Next
        </button>
      </div>
    </div>
  </div>
);

export default QuestionCard;
