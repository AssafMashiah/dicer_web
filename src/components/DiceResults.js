import React from 'react';
import {
  ResultsContainer,
  ResultsTitle,
  ResultsList,
  ResultItem,
  ResultValue,
  Total
} from './ui/Results';

const DiceResults = ({ results }) => {
  if (!results || results.length === 0) return null;

  return (
    <ResultsContainer>
      <ResultsTitle>Results:</ResultsTitle>
      <ResultsList>
        {results.map((result, index) => (
          <ResultItem key={index}>
            {result.die}: <ResultValue>{result.value}</ResultValue>
          </ResultItem>
        ))}
      </ResultsList>
      <Total>
        Total: <ResultValue>{results.reduce((sum, r) => sum + r.value, 0)}</ResultValue>
      </Total>
    </ResultsContainer>
  );
};

export default DiceResults; 