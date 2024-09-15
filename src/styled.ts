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
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
  }
`;
