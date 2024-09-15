import Header from "./components/Cabecalho/Header";
import logo from "./assets/logo-egg.png";
import profile from "./assets/user.png";

function App() {
  const title: string = "Auto EggAI";

  return (
    <>
      <Header title={title} logo={logo} profile={profile} />
    </>
  );
}

export default App;
