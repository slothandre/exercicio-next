import styled from "styled-components";
import Menu from "./Menu";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <StyledHeader>
      <div className="limitador">
        <h1>
          <Link href="/">
            <Image
              src="/images/rick.png"
              width={48}
              height={48}
              alt="Cara do Rick"
            />
            Rick e Morty
          </Link>
        </h1>
        <Menu />
      </div>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  h1 a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #9fded5;
    background-color: #303032;
    padding: 1rem;
    border-radius: 0.5rem;

    &:hover {
      color: #b2daed;
      scale: 1.05;
    }
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }

  @media screen and (min-width: 768px) {
    div {
      flex-direction: row;
    }
  }
`;
