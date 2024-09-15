import Header from "./components/Cabecalho/Header";
import logo from "./assets/logo-egg.png";
import profile from "./assets/user.png";
import Footer from "./components/Rodape/Footer";
import Main from "./components/Corpo/Main";

function App() {
  const title: string = "Auto EggAI";

  return (
    <>
      <Header title={title} logo={logo} profile={profile} />
      <Main />
      <Footer />
    </>
  );
}

export default App;
