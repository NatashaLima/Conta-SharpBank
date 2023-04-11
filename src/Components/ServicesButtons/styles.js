import styled from 'styled-components';

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Button = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-left: 10px;
  width: 60px;
  height: 60px;
  border-radius: 20px;
  border: none;
  background-color: #101626;
  color: white;
  cursor: pointer;
  padding: 0px;

  &:hover {
    opacity: 0.7;    
    background-color: #DFA634 !important;
  }

  & span {
    margin-top:20px;
    margin-bottom: -30px;
    font-size: 12px;
    font-weight: 100;
    text-align: center;
  }

  & img {
    width: 30px;
    height: 30px;
  }
`;

 