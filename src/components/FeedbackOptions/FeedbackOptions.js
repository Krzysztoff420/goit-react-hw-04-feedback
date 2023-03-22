import css from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';

export const FeedbackOptions = ({ onLeaveFeedback, options }) => {
  const handleFeedbackOption = evt => {
    const { name } = evt.target;

    onLeaveFeedback(name);
  };

    return (
      <div className={css.feedbackOptions}>
        {options.map(option => (
          <button
            key={option}
            className={css.button}
            name={option}
            type="button"
            onClick={handleFeedbackOption}
          >
            {option}
          </button>
        ))}
      </div>
    );
  }


FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};