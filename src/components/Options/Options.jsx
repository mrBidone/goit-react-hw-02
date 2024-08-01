import css from "./Options.module.css";

const Options = ({ updateFeedback, totalFeedback, resetFeedback }) => {
  return (
    <>
      <ul className={css.list}>
        <li className={css.listItem}>
          <button
            className={css.button}
            type="button"
            onClick={() => updateFeedback("good")}
          >
            Good
          </button>
        </li>
        <li>
          <button
            className={css.button}
            type="button"
            onClick={() => updateFeedback("neutral")}
          >
            Neutral
          </button>
        </li>
        <li>
          <button
            className={css.button}
            type="button"
            onClick={() => updateFeedback("bad")}
          >
            Bad
          </button>
        </li>
        {totalFeedback != 0 && (
          <li>
            <button
              className={css.button}
              type="button"
              onClick={resetFeedback}
            >
              Reset
            </button>
          </li>
        )}
      </ul>
    </>
  );
};

export default Options;
