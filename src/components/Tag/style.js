import styled from "styled-components";

export const Container = styled.span`
  display: inline-block;
  font-size: 12px;
  padding: 5px 14px;
  border-radius: 5px;
  margin-right: 6px;
  margin-top: 10px;
  color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  background-color: ${({ theme }) => theme.COLORS.ORANGE};
  overflow: hidden;
  text-overflow: ellipsis;
`;