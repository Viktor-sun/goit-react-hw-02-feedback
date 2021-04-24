import React, { useState } from 'react';
import Statistics from './components/Statistics';
import FeedbackOptions from './components/FeedbackOptions';
import Section from './components/Section';
import Notification from './components/Notification';
import Container from './components/Container';

const nameOptions = ['Good', 'Neutral', 'Bad'];

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNetural] = useState(0);
  const [bad, setBad] = useState(0);

  const handleIncrement = e => {
    const stateProperty = e.target.textContent;

    switch (stateProperty) {
      case 'Good':
        setGood(prevGood => prevGood + 1);
        break;
      case 'Neutral':
        setNetural(prevNetural => prevNetural + 1);
        break;
      case 'Bad':
        setBad(prevBad => prevBad + 1);
        break;
      default:
        break;
    }
  };

  const countTotalFeedback = () =>
    [good, neutral, bad].reduce((acc, value) => acc + value, 0);

  const countPositiveFeedbackPercentage = () => {
    const positiveFeedbackPercentage = (good / countTotalFeedback()) * 100;
    return positiveFeedbackPercentage
      ? Math.round(positiveFeedbackPercentage)
      : 0;
  };

  return (
    <Section title="Please leave feedback">
      <Container>
        <FeedbackOptions
          options={nameOptions}
          onLeaveFeedback={handleIncrement}
        />
        {countTotalFeedback() ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="No feedback given" />
        )}
      </Container>
    </Section>
  );
}
