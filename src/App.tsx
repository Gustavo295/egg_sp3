import Header from "./components/Cabecalho/Header";
import logo from "./assets/logo-egg.png";
import profile from "./assets/user.png";
import Footer from "./components/Rodape/Footer";
import Main from "./components/Corpo/Main";
import SobreNos from "./routes/Home/SobreNos";
import ericImg from "./assets/eric.png";
import gustavoTeixeiraImg from "./assets/gustavo.png";
import gustavoMoncaoImg from "./assets/moncao.png";
import github from "./assets/github.png";

function App() {
  const title: string = "Auto EggAI";
  const githubChallengeLink = "https://github.com/Yoshida672/Challenge.git";
  const figmaLink =
    "https://www.figma.com/file/TSkuVkde5wH0N2zzNCgKdR/Untitled?type=design&node-id=0%3A1&mode=design&t=fFBDQbOIaBGu6f7p-1";
  const ericGithubLink = "https://github.com/Yoshida672";
  const gustavoTeixeiraGithubLink = "https://github.com/Gustavo295";
  const gustavoMoncaoGithubLink = "https://github.com/moncaogustavo";
  return (
    <>
      <Header title={title} logo={logo} profile={profile} />
      <SobreNos
        github={github}
        ericImg={ericImg}
        gustavoMoncaoImg={gustavoMoncaoImg}
        gustavoTeixeiraImg={gustavoTeixeiraImg}
        githubChallengeLink={githubChallengeLink}
        figmaLink={figmaLink}
        ericGithubLink={ericGithubLink}
        gustavoMoncaoGithubLink={gustavoMoncaoGithubLink}
        gustavoTeixeiraGithubLink={gustavoTeixeiraGithubLink}
      />
      <Footer />
    </>
  );
}

export default App;
