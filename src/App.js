import React, { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  const [step, setStep] = React.useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function handlePrevious() {
    let newStep;
    if (step > 1) newStep = step - 1;
    setStep(newStep);
  }

  function handleNext() {
    let newStep;
    if (step < 3) newStep = step + 1;
    setStep(newStep);
  }

  return (
    <>
      <button className="close" onClick={() => setIsOpen(!isOpen)}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step === 1 ? "active" : ""}>1</div>
            <div className={step === 2 ? "active" : ""}>2</div>
            <div className={step === 3 ? "active" : ""}>3</div>
          </div>

          <p className="message">
            Step {step}: {messages[step - 1]}
          </p>

          <div className="buttons">
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={() => handlePrevious()}
              disabled={step === 1 ? true : false}
            >
              Previous
            </button>
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={() => handleNext()}
              disabled={step === 3 ? true : false}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
}
