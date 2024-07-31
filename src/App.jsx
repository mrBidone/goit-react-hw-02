import Description from "./components/Description/Description";
import Feedback from "./components/Feedback/Feedback";
import { useState } from "react";

function App() {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const updateFeedback = (feedbackType) => {
    setFeedback({ ...feedback, [feedbackType]: feedback[feedbackType] + 1 });
  };

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;

  return (
    <>
      <Description
        title={"Sip Happens Café"}
        description={
          "Please leave your feedback about our service by selecting one of the options below."
        }
      />
      <Feedback
        good={feedback.good}
        neutral={feedback.neutral}
        bad={feedback.bad}
        totalFeedback={totalFeedback}
        updateFeedback={updateFeedback}
      />
    </>
  );
}

export default App;
