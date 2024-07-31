const Feedback = ({ good, neutral, bad, updateFeedback, setFeedback }) => {
  return (
    <>
      <ul>
        <li>
          <button type="button" onClick={() => updateFeedback("good")}>
            Good
          </button>
        </li>
        <li>
          <button type="button" onClick={() => updateFeedback("neutral")}>
            Neutral
          </button>
        </li>
        <li>
          <button type="button" onClick={() => updateFeedback("bad")}>
            Bad
          </button>
        </li>
        <li>
          <button type="button">Reset</button>
        </li>
      </ul>
      <ul>
        <li>Good: {good}</li>
        <li>Neutral: {neutral}</li>
        <li>Bad: {bad}</li>
      </ul>
    </>
  );
};

export default Feedback;
