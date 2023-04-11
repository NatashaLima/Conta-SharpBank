import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { SaldoWrapper, SaldoLabel, SaldoInput, SaldoIcon } from './styles';

function Saldo(props) {
  const [exibirSaldo, setExibirSaldo] = useState(false);

  function handleToggleSaldo() {
    setExibirSaldo(!exibirSaldo);
  }

  return (    
    <SaldoWrapper>
      <SaldoLabel>Saldo</SaldoLabel>
      <div style={{ display: 'flex' }}>
        <SaldoInput
          type="text"
          value={exibirSaldo ? 'R$ ' + props.saldo :'R$ ****'}
          style={{ marginRight: '0.5rem' }}
        />
        <SaldoIcon onClick={handleToggleSaldo}>
          {exibirSaldo ? <FaEye /> : <FaEyeSlash />}
        </SaldoIcon>
      </div>
    </SaldoWrapper>
  );
}

const saldo = 1000; // exemplo de saldo, pode ser uma propriedade do componente pai

function App() {
  return (
    <div>
      <main>
        <Saldo saldo={saldo} />
      </main>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
export default App;