import styled from "styled-components";

export const HeaderCabec = styled.header`
  display: flex;
  flex-direction: column;
  background-image: linear-gradient(#010339, #0009dc);
  background-size: 100%;
  justify-content: space-between;
  padding: 0px 20px;
  .title {
    display: flex;
    font-size: 2em;
    color: #fff4e2;
    padding-top: 60px;
    flex-grow: 1;
  }

  .brand {
    display: flex;
    gap: 40px;
  }

  .logo,
  .profile {
    display: flex;
    margin-top: 50px;
    width: 80px;
    height: 80px;
  }
`;

export const FormBarra = styled.form`
  display: flex;
  align-items: center;
  justify-content: right;
  margin: 60px 0;
  margin-right: 10px;
  flex-grow: 2;
  .input {
    padding: 10px;
    font-size: 1rem;
    border: 1px solid blue;
    border-radius: 10px;
    outline: none;
  }
   .enviar {
    position: relative;
    right: 30px;
    top: 10%
    transform: translateY(-50%);
    background-color: transparent;
    border: none;
    cursor: pointer;
    padding: 0;

    img {
      width: 24px;
      height: 24px;
    }

    &:hover {
      opacity: 0.8;  // Efeito hover no botão
    }
`;
export const NavDirec = styled.nav`
  nav {
    background-color: #0d1c51;
    width: 100%;
    height: 30px;
    display: inline-flex;
    justify-content: space-evenly;
    align-items: center;
  }
  .redirecionamento {
    display: flex;
    justify-content: center;
    width: 100%;
  }
  a {
    text-align: center;
    text-decoration: none;
    color: white;
  }
`;
export const BodyCorpo = styled.body`
  .body {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    min-height: 100vh;
    align-items: center;
  }
`;
export const FooterRodape = styled.nav`
  .footer {
    background-color: #333;
    color: #fff;
    align-items: center;
    justify-content: center;
  }

  header h1,
  footer p {
    padding: 20px;
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
  }
`;
export const SectionSection1 = styled.section`
  .section1 {
    display: grid;
    gap: 30px;
    grid-template-areas:
      "espace"
      "cont1"
      "cont2"
      "cont3"
      "midia";
  }
  .espace {
    grid-area: espace;
    margin-top: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .espace h2 {
    font-size: 2em;
    padding: 10px;
    text-align: center;
    width: 50%;
  }
  .midia {
    grid-area: midia;
  }
  .content1 {
    grid-area: cont1;
  }
  .content2 {
    grid-area: cont2;
  }
  .content3 {
    grid-area: cont3;
  }
  .content1,
  .content2,
  .content3 {
    display: grid;
    grid-template-areas:
      "stack "
      "stack "; /* Cria duas linhas com a mesma área */
    position: relative;
    width: 100%;
    height: 300px;
    border: 1px solid black;
  }
  .midia {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-items: auto;
    align-items: center;
  }
  .midia h3 {
    margin: 20px;
    font-size: 1.5em;
  }
  .link {
    margin-left: -40px;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
  }
  .link a {
    border: black 1px solid;
    border-radius: 12px;
    padding: 10px;
    margin: 5px;
    background-color: #1f2f83;
    text-decoration: none;
    color: white;
    text-align: center;
  }

  .image {
    display: flex;
    grid-area: stack;

    position: relative;
    justify-content: center;
    align-items: center;
  }
  .img {
    z-index: 2;
    text-align: center;
    color: black;
    background-color: #000000;
  }
  .img p {
    border: 1px solid black;
    background-color: white;
  }
  .text {
    grid-area: stack;
    background-color: #1f2f83;
    position: absolute;
    top: 75%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 60%;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: end;
  }
  .text p {
    margin-left: 20px;
    margin-bottom: 10px;
    text-align: center;
    color: white;
    font-size: 100%;
  }
  .git {
    height: 50px;
    width: 50px;
  }
`;
