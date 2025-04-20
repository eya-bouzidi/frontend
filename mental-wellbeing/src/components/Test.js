import React, { useState } from 'react';
import '../css/csstest.css'; 
import Footer from './Footer';
import { Link } from 'react-router-dom';
function Test() {
  const [answers, setAnswers] = useState({});

  const questions = [
    "Little interest or pleasure in doing things?",
    "Feeling down, depressed, or hopeless?",
    "Trouble falling or staying asleep, or sleeping too much?",
    "Feeling tired or having little energy?",
    "Poor appetite or overeating?"
  ];

  const options = [
    "Not at all",
    "Several days",
    "More than half the days",
    "Nearly every day"
  ];

  const handleOptionChange = (questionIndex, option) => {
    setAnswers(prev => ({ ...prev, [questionIndex]: option }));
  };

  const handleSubmit = () => {
    console.log("User responses:", answers);
    alert("Thank you for completing the test!");
  };

  const handleReset = () => {
    setAnswers({});
  };

  return (
    <div className="test-page">
        <header className="header">
        <div className="container">
          <div className="logo">
            <h1>Mental Health</h1>
          </div>
          <nav>
            <ul className="nav-links">
              <li><Link to="/acceuil" >Home</Link></li>
              <li><Link to="/test"className="active">Test</Link></li>
              <li><Link to="/resources" >Resources</Link></li>
              <li><Link to="/">Exit</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="test-container">
        <h2>Mental Health Test</h2>
        <form className="test-form">
          {questions.map((question, index) => (
            <div className="question-block" key={index}>
              <h4>{index + 1}. {question}</h4>
              {options.map(option => (
                <label key={option}>
                  <input
                    type="radio"
                    name={`question-${index}`}
                    value={option}
                    checked={answers[index] === option}
                    onChange={() => handleOptionChange(index, option)}
                  />
                  {option}
                </label>
              ))}
            </div>
          ))}
          <div className="button-group">
            <button type="button" onClick={handleSubmit}>Submit Test</button>
            <button type="button" onClick={handleReset}>Cancel</button>
          </div>
        </form>
      </main>

      <Footer />
    </div>
  );
}

export default Test;
