import styled from "styled-components";
import Menu from "./Menu";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <StyledHeader>
      <h1>
        <Link href="/">
          <Image
            src="/images/rick.png"
            width={48}
            height={48}
            alt="Cara do Rick"
          />{" "}
          Rick e Morty
        </Link>
      </h1>
      <Menu />
    </StyledHeader>
  );
}

const StyledHeader = styled.header``;
