import Link from "next/link";
import styled from "styled-components";

export default function Localizacoes({ results }) {
  return (
    <StyledLocal>
      {results.map((localizacao) => (
        <article key={localizacao.id}>
          <Link href={`/localizacoes/${localizacao.id}`}>
            <h3>{localizacao.name}</h3>
            <p>Tipo: {localizacao.type}</p>
          </Link>
        </article>
      ))}
    </StyledLocal>
  );
}

const StyledLocal = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: space-around;

  article a {
    text-decoration: none;
    color: #70592d;
  }
`;
