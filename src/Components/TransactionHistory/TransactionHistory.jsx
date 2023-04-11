import React, { useState } from "react";
import { InputContainer, Input, SearchIcon, HistoryContainer, MoneyIcon, IconMoney, Transfer, Type, Beneficiary, Value, Date } from "./styles";


function App() {  
  const [historico] = useState([
    {
      tipo: "(PIX)",
      beneficiario: "Beneficiário",
      valor: 500.00,
      data: "11 Abril",
      transferType: "Transferência recebida"
    },
    {
      tipo: "(TED)",
      beneficiario: "Beneficiário",
      valor: 2000.00,
      data: "10 Abril",
      transferType: "Transferência enviada"
    },
    {
      tipo: "(DOC)",
      beneficiario: "Beneficiário",
      valor: 350.00,
      data: "09 Abril",
      transferType: "Transferência recebida"
    },
    {
      tipo: "(PIX)",
      beneficiario: "Beneficiário",
      valor: 750.00,
      data: "08 Abril",
      transferType: "Transferência enviada"

    },
    {
      tipo: "(TED)",
      beneficiario: "Beneficiário",
      valor: 1200.00,
      data: "07 Abril",
      transferType: "Transferência recebida"
    },
    {
        tipo: "(PIX)",
        beneficiario: "Beneficiário",
        valor: 500.00,
        data: "06 Abril",
        transferType: "Transferência enviada"

      },
      {
        tipo: "(TED)",
        beneficiario: "Beneficiário",
        valor: 2000.00,
        data: "05 Abril",
        transferType: "Transferência recebida"
      },
      {
        tipo: "(DOC)",
        beneficiario: "Beneficiário",
        valor: 350.00,
        data: "04 Abril",
        transferType: "Transferência enviada"

      },
      {
        tipo: "(PIX)",
        beneficiario: "Beneficiário",
        valor: 750.00,
        data: "03 Abril",
        transferType: "Transferência recebida"
      },
      {
        tipo: "(TED)",
        beneficiario: "Beneficiário",
        valor: 1200.00,
        data: "02 Abril",
        transferType: "Transferência enviada"
      },
  ]);

  return (
    <div>
      <p>Histórico</p>
      <InputContainer>
        <Input type="text" placeholder="Pesquisar" />
        <SearchIcon />
      </InputContainer>      
      
      <ul>
        {historico.map((item, index) => (
          <li key={index}>
            <HistoryContainer>
              <IconMoney>                
                <MoneyIcon />
              </IconMoney>
              <Transfer>
                {item.transferType}
              </Transfer>
              <Type>
                {item.tipo}
              </Type>
              <Beneficiary>
                {item.beneficiario}
              </Beneficiary>
              <Value transferType={item.transferType}>
                R$ {item.valor}
              </Value>
              <Date>{item.data}</Date>
            </HistoryContainer>
          </li>
        ))}
      </ul> 
    </div>
  );
}

export default App;
