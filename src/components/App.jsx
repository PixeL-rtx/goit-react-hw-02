import { useState, useEffect } from "react";
import Feedback from "./components/Feedback/Feedback";
import Options from "./components/Options/Options";
import Notification from "./components/Notification/Notification";
import Description from "./components/Description/Description";
import "./style.css";

const App = () => {
  const [feedback, setFeedback] = useState(() => {
    const saveFeedback = localStorage.getItem("feedback");
    return saveFeedback
      ? JSON.parse(saveFeedback)
      : { good: 0, neutral: 0, bad: 0 };
  });
  useEffect(() => {
    localStorage.setItem("feedback", JSON.stringify(feedback));
  }, [feedback]);

  const updateFeedback = (key) => {
    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      [key]: prevFeedback[key] + 1,
    }));
  };

  const resetFeedback = () => {
    setFeedback({ good: 0, neutral: 0, bad: 0 });
  };
  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const percentageFeedback = totalFeedback
    ? Math.round((feedback.good / totalFeedback) * 100)
    : 0;
  return (
    <>
      <h1>Sip Happens Café</h1>
      <p>
        Please leave your feedback about our service by selecting one of the
        options below.
      </p>
      <Options
        onFeedback={updateFeedback}
        resetFeedback={resetFeedback}
        totalFeedback={totalFeedback}
      />
      {totalFeedback > 0 ? (
        <Feedback
          feedback={feedback}
          totalFeedback={totalFeedback}
          percentageFeedback={percentageFeedback}
        />
      ) : (
        <Notification message="No feedback given yet" />
      )}
    </>
  );
};

export default App;
