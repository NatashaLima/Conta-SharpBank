import styled from 'styled-components';

export const UserContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: transparent;
  border-radius: 20px;
  padding: 0.5rem;
  width: 100%;
  height: 60px;
`;

export const Title = styled.h2`
  font-size: 1rem;
  margin: 0 1rem;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border: none;
  border-radius: 5px;
  background-color: #DFA634;
  cursor: pointer;   
  
  &.notificacoesButton:hover {
    opacity: 0.7;
    background-color: black !important;
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;

  &.notificacoesWrapper {
    margin-right: 1rem;
  }
`;

export const Icon = styled.img`
  width: 100%;
  height: 100%;
`;