import React from "react";
// import css from "./Feedback.module.css";
const Feedback = ({ feedback, totalFeedback, percentageFeedback }) => (
  <div>
    <h2>Statistics</h2>
    <p>Good: {feedback.good}</p>
    <p>Neutral: {feedback.neutral}</p>
    <p>Bad: {feedback.bad}</p>
    <p>Total feedback: {totalFeedback}</p>
    <p>Positive feedback: {percentageFeedback}%</p>
  </div>
);

export default Feedback;
