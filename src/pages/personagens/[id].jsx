import Head from "next/head";
import serverApi from "../api/server";
import styled from "styled-components";
import Container from "@/components/ui/Container";
import Image from "next/image";

export async function getStaticProps({ params }) {
  const { id } = params;

  try {
    const resposta = await fetch(`${serverApi}/character/${id}`);

    if (!resposta.ok) {
      throw new Error(`Erro: ${resposta.status} - ${resposta.statusText}`);
    }

    const dados = await resposta.json();

    return {
      props: {
        personagem: dados,
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

export default function Personagem({ personagem }) {
  const tituloPagina = `${personagem.name} - Rick e Morty`;
  return (
    <>
      <Head>
        <title>{tituloPagina}</title>
      </Head>
      <StyledPersonagem>
        <h2>{personagem.name}</h2>
        <Container>
          <img src={personagem.image} alt="Foto do cara" />
          <p>
            <b>Status:</b> {personagem.status}
          </p>
          <p>
            <b>Especie:</b> {personagem.species}
          </p>
          <p>
            <b>Gênero:</b> {personagem.gender}
          </p>
        </Container>
      </StyledPersonagem>
    </>
  );
}

const StyledPersonagem = styled.article``;
