import React from 'react';
import { ButtonContainer, Button } from './styles';
import pixIcon from '../../Images/svg/pix.svg';
import transferIcon from '../../Images/svg/transferir.svg';
import depositIcon from '../../Images/svg/depositar.svg';
import payIcon from '../../Images/svg/pagar.svg';

function ServicesButtons() {
  return (
    <ButtonContainer>
      <Button>
        <img src={pixIcon} alt="Pix" />
        <span>Pix</span>
      </Button>
      <Button>
        <img src={transferIcon} alt="Transferir" />
        <span>Transferir</span>
      </Button>
      <Button>
        <img src={depositIcon} alt="Depositar" />
        <span>Depositar</span>
      </Button>
      <Button>
        <img src={payIcon} alt="Pagar" />
        <span>Pagar</span>
      </Button>
    </ButtonContainer>
  );
}

export default ServicesButtons;
