import styled from 'styled-components';

export const Container = styled.button`
  background: none;
  color: ${({ theme, isActive }) => isActive ? theme.COLORS.ORANGE : theme.COLORS.GRAY_100};

  border:1px solid #0003;
  padding: 8px;
  border-radius: 15px;
  font-size: 16px;
  width: 250px;
  word-wrap: break-word;
`;