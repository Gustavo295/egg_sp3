import { SectionSection1 } from "../../.././styled";
import { SobreNos1Props } from "../../.././types";
export default function SobreNos({
  github,
  ericImg,
  gustavoTeixeiraImg,
  gustavoMoncaoImg,
  githubChallengeLink,
  figmaLink,
  ericGithubLink,
  gustavoTeixeiraGithubLink,
  gustavoMoncaoGithubLink,
}: SobreNos1Props) {
  return (
    <>
      <SectionSection1>
        <div className="espace">
          <h2>SOBRE NÓS</h2>
        </div>

        <div className="content1">
          <div className="image">
            <div className="img">
              <p>Eric Issamu de Lima Yoshida</p>
              <img src={ericImg} alt="Imagem de Eric" />
              <p>558763</p>
            </div>
          </div>
          <div className="text">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus
              inventore facere.
            </p>

            <div className="social-media">
              <a href={ericGithubLink} target="_blank">
                <img className="git" src={github} alt="GitHUB" />
              </a>
            </div>
          </div>
        </div>

        <div className="content2">
          <div className="image">
            <div className="img">
              <p>Gustavo Matias Texeira</p>
              <img src={gustavoTeixeiraImg} alt="Imagem de Gustavo Texeira" />
              <p>555010</p>
            </div>
          </div>
          <div className="text">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus
              inventore facere.
            </p>

            <div className="social-media">
              <a href={gustavoTeixeiraGithubLink} target="_blank">
                <img className="git" src={github} alt="GitHUB" />
              </a>
            </div>
          </div>
        </div>

        <div className="content3">
          <div className="image">
            <div className="img">
              <p>Gustavo Monção</p>
              <img src={gustavoMoncaoImg} alt="Imagem de Gustavo Monção" />
              <p>557515</p>
            </div>
          </div>

          <div className="text">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus
              inventore facere.
            </p>

            <div className="social-media">
              <a href={gustavoMoncaoGithubLink} target="_blank">
                <img className="git" src={github} alt="GitHUB" />
              </a>
            </div>
          </div>
        </div>
        <div className="midia">
          <h3>REPOSITORIOS</h3>
          <div className="link">
            <a href={githubChallengeLink} target="_blank">
              Repositório GitHUB
            </a>
            <a href={figmaLink} target="_blank">
              Repositório Figma
            </a>
          </div>
        </div>
      </SectionSection1>
    </>
  );
}
