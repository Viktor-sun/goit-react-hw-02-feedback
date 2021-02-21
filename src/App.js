import React, { Component } from 'react';
import Statistics from './components/Statistics';
import FeedbackOptions from './components/FeedbackOptions';
import Section from './components/Section';
import Notification from './components/Notification';
import Container from './components/Container';

class App extends Component {
  state = { good: 0, neutral: 0, bad: 0 };

  handlerIncrement = e => {
    const stateProperty = e.target.textContent.toLowerCase();
    return this.setState(prevState => {
      return { [stateProperty]: prevState[stateProperty] + 1 };
    });
  };

  countTotalFeedback = () =>
    Object.values(this.state).reduce((acc, value) => acc + value, 0);

  countPositiveFeedbackPercentage = () => {
    const positiveFeedbackPercentage =
      (this.state.good / this.countTotalFeedback()) * 100;
    return positiveFeedbackPercentage
      ? Math.round(positiveFeedbackPercentage)
      : 0;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const totalValue = this.countTotalFeedback();
    const feedbackPercentage = this.countPositiveFeedbackPercentage();
    const nameOptions = ['Good', 'Neutral', 'Bad'];

    return (
      <Section title="Please leave feedback">
        <Container>
          <FeedbackOptions
            options={nameOptions}
            onLeaveFeedback={this.handlerIncrement}
          />
          {totalValue ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={totalValue}
              positivePercentage={feedbackPercentage}
            />
          ) : (
            <Notification message="No feedback given" />
          )}
        </Container>
      </Section>
    );
  }
}

export default App;
