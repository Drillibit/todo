import styled from 'styled-components';

export const ButtonStyled = styled.button`
  width: 250px;
  height: 40px;
  margin: 10px 0 0 0;
  outline: none;
  border: none;
  border-radius: 32px;
  box-shadow: 0 -2px 10px 0 rgba(59, 178, 184, 0.55);
  background-image: ${({ theme }) => theme.backgroundPrimary || 'linear-gradient(110deg, #43e695 -49%, #3bb2b8 75%)'};
  font-size: 18px;
  color: #ffffff;
  cursor: pointer;

  transition: all 0.1s ease-in-out;

  &:hover {
    transform: scale(1.1);
    border: 1px solid ${({ theme }) => theme.buttonBorderHover};
    color: ${({ theme }) => theme.buttonColorHover};
  }

  &:active {
    background-image: ${({ theme }) =>
      theme.backgroundSecondary || 'linear-gradient(110deg, #3bb2b8 -49%, #43e695 75%)'};
  }
`;
