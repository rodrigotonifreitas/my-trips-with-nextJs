Este é um projeto criado com o Next.js com o intuito de praticar e consolidar os conhecimentos do framework.

## Começando

Para executar o projeto localmente, é necessário fazer o clone do repositório em sua máquina:

```bash
git clone https://github.com/rodrigotonifreitas/my-trips-with-nextJs.git && cd my-trips-with-nextJs
```
Com o node.js e yarn/npm instalados basta executar o comando:

```bash
npm i
# ou
yarn
```

Assim fará a instalação de todas dependências e em seguida rode o projeto a partir do comando:

```bash
npm run dev
# ou
yarn dev
```

## O que é o My Trips

O My Trips é um projeto com fins didáticos, nele foi desenvolvido um site onde é possivel renderizar um mapa onde via uma api em GraphicQL consumimos o serviço e marcamos pontos nos mapas com informações sobre os locais.

## Stack

Para o projeto, fiz uso do framework ReactJs e NextJs com TypeScript para o desenvolvimento do front-end, para o back-end usei o serviço GraphCMS onde foi gerado uma api GraphQL e o Styled Components para estilizar os componentes.

No boilerplate, configurei o ESLint e o Prettier para auxiliar no desenvolvimento, o Jest para a escrita dos testes e o husky a fim de integrar toda validação e teste a cada commit feito para o git.

O projeto conta com o pacote de PWA e com isso é possível acessá-lo de forma off-line e também baixá-lo como um app, além de todo recurso de cache e mensageria.

## Deploy

O deploy do projeto foi todo feito na Vercel através de sua CLI e integrado com o GitHub.
Configurei o projeto para ser revalidado a cada 5s para as páginas dinâmicas. (ISR. Incremental Static Regeneration)


Caso tenha alguma dúvida ou sugestão a respeito do projeto, por favor, reporte através de issues.

Obrigado!
