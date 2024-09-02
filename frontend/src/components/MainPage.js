import React, { useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import './IdeaEvaluator.css'; // Import the CSS file

const IdeaEvaluator = () => {
  const [idea, setIdea] = useState('');
  const [evaluation, setEvaluation] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const evaluateIdea = () => {
    // Mock evaluation logic
    const novelty = Math.random() > 0.5 ? 'novel' : 'not novel';
    const worth = Math.random() > 0.5 ? 'worth pursuing' : 'not worth pursuing';
    setEvaluation({ novelty, worth });
  };

  const toggleDarkMode = () => setIsDarkMode(prevMode => !prevMode);

  return (
    <div className={`idea-evaluator ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <div className="container">
        <div className="header">
          <button onClick={toggleDarkMode} className="toggle-mode-btn">
            {isDarkMode ? <Sun size={24} /> : <Moon size={24} />}
          </button>
          <h1 className="title">Idea Evaluator</h1>
        </div>
        <div className="content">
          <label htmlFor="idea" className="label">Enter your groundbreaking idea:</label>
          <textarea
            id="idea"
            value={idea}
            onChange={(e) => setIdea(e.target.value)}
            className="idea-input"
            rows="4"
            placeholder="Type your idea here..."
          />
          <button onClick={evaluateIdea} className="evaluate-btn">
            Evaluate My Idea
          </button>
          {evaluation && (
            <div className="evaluation-result">
              <p>Your idea is: <strong className="evaluation-novelty">{evaluation.novelty}</strong></p>
              <p>It is: <strong className="evaluation-worth">{evaluation.worth}</strong></p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default IdeaEvaluator;
