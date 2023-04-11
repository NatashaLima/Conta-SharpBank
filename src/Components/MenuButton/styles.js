import styled from 'styled-components';

export const ButtonContainer = styled.div`
  background-color: #101626;
  border-radius: 20px;
  border: none;
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: center; 
  margin-top: 20px;   
`;

export const StyledMenuButton = styled.button`
  background-color: transparent;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;

  & img {
    width: 30px;
    height: 30px;
  }

  &:hover {
    opacity: 0.7;
    background-color: #DFA634 !important;
  }

  /* hierarquia de seletores */
  ${ButtonContainer} & {
    background-color: transparent;
    border-radius: 20px;
  }
`;


