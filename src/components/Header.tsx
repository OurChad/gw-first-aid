import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';

const StyledHeader = styled.header`
  background: var(--secondary-color);
  margin-bottom: 1.5rem;
`;

const HeaderContentContainer = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 1.5rem 1rem;
`;

const AppName = styled.h1`
  margin: 0;
`;

const StyledLink = styled(Link)`
  color: var(--primary-light);
  text-decoration: none;
`;

type Props = {
    siteTitle: string;
}

const Header: React.FC<Props> = ({ siteTitle }) => (
  <StyledHeader>
    <HeaderContentContainer>
      <AppName>
        <StyledLink to="/">
          {siteTitle}
        </StyledLink>
      </AppName>
    </HeaderContentContainer>
  </StyledHeader>
);

export default Header;
