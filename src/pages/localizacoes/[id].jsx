import Head from "next/head";
import serverApi from "../api/server";
import styled from "styled-components";
import Container from "@/components/ui/Container";

export async function getStaticProps({ params }) {
  const { id } = params;

  try {
    const resposta = await fetch(`${serverApi}/location/${id}`);

    if (!resposta.ok) {
      throw new Error(`Erro: ${resposta.status} - ${resposta.statusText}`);
    }

    const dados = await resposta.json();

    return {
      props: {
        localizacao: dados,
      },
    };
  } catch (error) {
    console.error("Ops, deu ruim: " + error.message);
    return {
      notFound: true,
    };
  }
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: "blocking",
  };
}

export default function Localizacao({ localizacao }) {
  const tituloPagina = `${localizacao.name} - Rico e Morto`;
  return (
    <>
      <Head>
        <title>{tituloPagina}</title>
      </Head>
      <StyledLocalizacao>
        <h2>{localizacao.name}</h2>
        <Container>
          <p>
            <b>Tipo:</b> {localizacao.type}
          </p>
          <p>
            <b>Dimensão:</b> {localizacao.dimension}
          </p>
        </Container>
      </StyledLocalizacao>
    </>
  );
}

const StyledLocalizacao = styled.article``;
