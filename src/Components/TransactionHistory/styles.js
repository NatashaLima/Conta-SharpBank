import styled from "styled-components";
import { RiSearchLine } from "react-icons/ri";
import { RiMoneyDollarCircleFill } from "react-icons/ri";

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 0px;
  justify-content: center;  
`;

export const Input = styled.input`
  border: 1px solid #FFFFFF;
  border-radius: 26px;
  box-sizing: border-box;
  padding: 10px;
  width: 343px;
  height: 40px;
  font-size: 16px;
  background: linear-gradient(112.48deg, rgba(255, 255, 255, 0.3) 6.31%, rgba(255, 255, 255, 0) 98.51%);
`;

export const SearchIcon = styled(RiSearchLine)`
  font-size: 20px;
  margin-left: -30px;  
`;

export const MoneyIcon = styled(RiMoneyDollarCircleFill)`
  background-color: orange;
  color: white;
  font-size: 20px;
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
 
`;

export const HistoryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-gap: 20px;
  justify-content: center;
  align-content: center;
`;

export const IconMoney = styled.span`
  grid-column: 1;
`;

export const Transfer = styled.span`
  grid-column: 2;  
`;

export const Type = styled.span`
  grid-column: 3;
`;

export const Beneficiary = styled.span`
  grid-column: 4;
`;

export const Value = styled.span`
  grid-column: 5;
  color: ${props => props.transferType === "Transferência recebida" ? "#0D5E00" : "#FF0000"};
`;

export const Date = styled.span`
  grid-column: 6;
`;


