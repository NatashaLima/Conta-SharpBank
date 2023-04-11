import React from 'react';
import { ButtonContainer, StyledMenuButton } from './styles';
import homeIcon from '../../Images/svg/home.svg';
import cartaoIcon from '../../Images/svg/cartao.svg';
import configuracaoIcon from '../../Images/svg/configuracao.svg';

function Menu() {
  return (
    <div className="menu">
      <ButtonContainer type="button">
        <StyledMenuButton>
          <img src={homeIcon} alt="Home" />
        </StyledMenuButton>
        <StyledMenuButton>
          <img src={cartaoIcon} alt="Cartão" />
        </StyledMenuButton>
        <StyledMenuButton>
          <img src={configuracaoIcon} alt="Configuração" />
        </StyledMenuButton>
      </ButtonContainer>
    </div>
  );
}

export default Menu;
