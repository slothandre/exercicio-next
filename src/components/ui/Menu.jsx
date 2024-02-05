import Link from "next/link";
import styled from "styled-components";

export default function Menu() {
  return (
    <StyledNav>
      <Link href="/">Home</Link>
      <Link href="/localizacoes">Localizações</Link>
    </StyledNav>
  );
}

const StyledNav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    display: flex;
    align-items: center;
    margin: 10px;
    text-decoration: none;
    color: #9fded5;
    background-color: #303032;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;

    &:hover {
      color: #b2daed;
      scale: 1.05;
    }
  }
`;
