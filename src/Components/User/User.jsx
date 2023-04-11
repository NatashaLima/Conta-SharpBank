import React from 'react';
import { UserContainer, Title, IconWrapper, Icon, Button } from './styles';
import perfilIcon from '../../Images/svg/perfil.svg';
import notificacoesIcon from '../../Images/svg/notificacoes.svg';

function User() {
  return (
    <UserContainer>
      <IconWrapper>
        <Icon src={perfilIcon} alt="Ícone Perfil" />
      </IconWrapper>
      <Title>Olá, Lenny</Title>
      <IconWrapper className="notificacoesWrapper">
        <Button className="notificacoesButton">
          <Icon src={notificacoesIcon} alt="Ícone Notificação" />
        </Button>
      </IconWrapper>
    </UserContainer>
  );
}

export default User;


