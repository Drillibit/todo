import styled, { css } from 'styled-components';

import { StyledBtnProps } from './types';

export const StyledContainer = styled.div`
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  background-color: transparent;
  box-shadow: 0 8px 8px 0 rgba(25, 42, 70, 0.1);
  border-radius: 34px;
  background-color: #fff;
`;

const ActiveBtnStyles = css`
  opacity: 0.5;
`;

export const StyledPageBtn = styled.button<StyledBtnProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.paginationBackground};
  width: 37px;
  padding: 10px;
  color: #fff;
  cursor: pointer;
  border: none;
  outline: none;
  font-size: 14px;

  &:disabled {
    background: gray;
    cursor: not-allowed;
  }

  &:active {
    background: #3bb2b8;
  }

  &:first-child {
    border-radius: 34px 0 0 34px;
  }

  &:last-child {
    border-radius: 0 34px 34px 0;
  }

  transition: background-color, color 0.1s ease;

  &:hover {
    color: black;
  }

  ${({ isActive }) => isActive && ActiveBtnStyles}
`;
