import Link from "next/link";
import styled from "styled-components";

export default function Personagens({ results }) {
  return (
    <StyledPersonagens>
      {results.map((personagem) => (
        <article key={personagem.id}>
          <Link href={`/personagens/${personagem.id}`}>
            <h3>{personagem.name}</h3>
            <img src={personagem.image} alt="" />
            <p>Status: {personagem.status}</p>
          </Link>
        </article>
      ))}
    </StyledPersonagens>
  );
}

const StyledPersonagens = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;
