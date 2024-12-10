import styled from 'styled-components';

export const ResultsContainer = styled.div`
  margin-top: ${({ theme }) => theme.spacing.large};
  padding: ${({ theme }) => theme.spacing.medium};
  background-color: white;
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
`;

export const ResultsTitle = styled.h3`
  margin-bottom: ${({ theme }) => theme.spacing.small};
  color: ${({ theme }) => theme.colors.text};
`;

export const ResultsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.medium};
  margin-bottom: ${({ theme }) => theme.spacing.medium};
`;

export const ResultItem = styled.div`
  font-size: 1.1em;
  color: ${({ theme }) => theme.colors.text};
`;

export const ResultValue = styled.span`
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primary};
`;

export const Total = styled.div`
  font-size: 1.2em;
  border-top: 1px solid ${({ theme }) => theme.colors.background};
  padding-top: ${({ theme }) => theme.spacing.small};
`; 