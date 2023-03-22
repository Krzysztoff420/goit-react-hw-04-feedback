import { useState, setState } from 'react';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';


export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const total = good + neutral + bad;
  const countPositiveFeedbackPercentage =
    total > 0 ? Math.round((good / total) * 100) : 0;

  const handleGoodFeedback = () => {
    setGood(good + 1);
  };

  const handleNeutralFeedback = () => {
    setNeutral(neutral + 1);
  };

  const handleBadFeedback = () => {
    setBad(bad + 1);
  };

  // const handleFeedback = name => {
  //   setState(state => ({ ...state, [name]: state[name] + 1 }))
  // }; nie działa, myśleć więcej

  const handleFeedback = name => {
    switch (name) {
      case 'good':
        handleGoodFeedback();
        break;

      case 'neutral':
        handleNeutralFeedback();
        break;

      default:
        handleBadFeedback();
    }
  };

  const options = ['good', 'neutral', 'bad'];
  
    return (
      <div 
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={handleFeedback}
          />
        </Section>
        <Section title="Statistics">
          {total > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={countPositiveFeedbackPercentage}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </div>
    );
  }








