import { Component } from 'react';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';


export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleGoodFeedback = () => {
    this.setState(state => ({
      good: state.good + 1,
    }));
  };

  handleNeutralFeedback = () => {
    this.setState(state => ({
      neutral: state.neutral + 1,
    }));
  };

  handleBadFeedback = () => {
    this.setState(state => ({
      bad: state.bad + 1,
    }));
  };

  // handleFeedback = name => {
  //   switch (name) {
  //     case 'good':
  //       this.handleGoodFeedback();
  //       break;

  //     case 'neutral':
  //       this.handleNeutralFeedback();
  //       break;

  //     default:
  //       this.handleBadFeedback();
  //   }
  // };

  handleFeedback = name => { 
  this.setState(state => ({...state, [name] : state[name] + 1}))
 }; 

  render() {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    const countPositiveFeedbackPercentage =
      total > 0 ? Math.round((good / total) * 100) : 0;

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
            options={Object.keys(this.state)}
            onLeaveFeedback={this.handleFeedback}
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
}







