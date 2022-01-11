import * as S from './styles'

const Main = () => (
  <S.Wrapper>
    <S.Logo
      src="/img/logo.svg"
      alt="Imagem de um atomo e ao lado o texto React Avançado"
      width="100%"
      height="100%"
    />
    <S.Title>React Avançado</S.Title>
    <S.Description>
      TypeScript, ReactJS, NextJS e Styled Components
    </S.Description>

    <S.Illustration
      src="img/hero-illustration.svg"
      alt="Um desenvolvedor de frente com uma tela com código"
      width="100%"
      height="100%"
    />
  </S.Wrapper>
)

export default Main
