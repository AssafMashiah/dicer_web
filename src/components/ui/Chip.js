import styled from 'styled-components';

export const Chip = styled.div`
  padding: ${({ theme }) => theme.spacing.small};
  background-color: ${({ theme }) => theme.colors.secondary};
  color: white;
  border-radius: ${({ theme }) => theme.borderRadius};
  cursor: pointer;
  
  &:hover {
    opacity: 0.9;
  }
`; 