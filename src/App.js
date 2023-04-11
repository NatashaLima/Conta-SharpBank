import React from 'react';
import Balance from './Components/Balance/Balance';
import TransactionHistory from './Components/TransactionHistory/TransactionHistory';
import ServicesButtons from './Components/ServicesButtons/ServicesButtons';
import Menu from './Components/MenuButton/MenuButton';
import User from './Components/User/User';

import './App.css';

function App() {
  return (  
    <div className="content-container">  
      <div className="user-container">
        <User />
      </div>
      <div className="balance-container">
        <Balance />
      </div>
      <div className="services-container">
        <ServicesButtons />
      </div>
      <div className="history-container">
        <TransactionHistory />             
      </div>
      <div className="menu-container">
        <Menu />
      </div> 
    </div>            
  );
}
export default App;
