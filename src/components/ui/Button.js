import styled from 'styled-components';

export const Button = styled.button`
  padding: ${({ theme }) => theme.spacing.small};
  border: none;
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  border-radius: ${({ theme }) => theme.borderRadius};
  cursor: pointer;
  
  &:hover {
    opacity: 0.9;
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.secondary};
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const RollButton = styled(Button)`
  margin-top: ${({ theme }) => theme.spacing.medium};
  padding: ${({ theme }) => theme.spacing.medium} ${({ theme }) => theme.spacing.large};
  font-size: 1.2em;
`; 