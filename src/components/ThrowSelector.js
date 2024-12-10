import React from 'react';
import styled from 'styled-components';

const MAX_THROWS = 5;

const ThrowSelector = ({ throwCount, setThrowCount }) => {
  return (
    <Container>
      <SectionTitle>Number of Throws</SectionTitle>
      <Select
        value={throwCount}
        onChange={(e) => setThrowCount(Number(e.target.value))}
      >
        {[...Array(MAX_THROWS)].map((_, i) => (
          <option key={i + 1} value={i + 1}>
            {i + 1}
          </option>
        ))}
      </Select>
    </Container>
  );
};

const Container = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.large};
`;

const SectionTitle = styled.h2`
  margin-bottom: ${({ theme }) => theme.spacing.medium};
`;

const Select = styled.select`
  padding: ${({ theme }) => theme.spacing.small};
  border-radius: ${({ theme }) => theme.borderRadius};
  background-color: ${({ theme }) => theme.colors.surface};
  color: ${({ theme }) => theme.colors.text};
  border: 1px solid ${({ theme }) => theme.colors.primary};
`;

export default ThrowSelector; 