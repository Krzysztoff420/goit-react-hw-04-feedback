import { Component } from 'react';
import css from './Statistics.module.css';
import PropTypes from 'prop-types';

export class Statistics extends Component {
  render() {
    const { good, neutral, bad, total, positivePercentage } = this.props;

    return (
      <div>
        <p className={css.statistics}>Good: {good}</p>
        <p className={css.statistics}>Neutral: {neutral}</p>
        <p className={css.statistics}>Bad: {bad}</p>
        <p className={css.statistics}>Total: {total}</p>
        <p className={css.statistics}>
          Positive Feedback: {positivePercentage}%
        </p>
      </div>
    );
  }
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};