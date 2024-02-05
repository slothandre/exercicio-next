import Container from "@/components/ui/Container";
import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";

export default function Pagina404() {
  return (
    <>
      <Head>
        <title>Ops - Rico e Morto</title>
      </Head>
      <Styled404>
        <h2>Eita, deu ruim.</h2>
        <Container>
          <h3>Dimensão não encontrada</h3>
          <Image
            src="/images/404.jpg"
            width={1200}
            height={675}
            alt="Rick e Morty perdidos em alguma dimensão"
          />
        </Container>
      </Styled404>
    </>
  );
}

const Styled404 = styled.section`
  img {
    max-width: 100%;
  }
`;
