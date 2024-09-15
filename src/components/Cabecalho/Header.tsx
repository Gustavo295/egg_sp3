import { Header1Props } from "../../types";
import { HeaderCabec } from "../../styled";
import BarraPesquisa from "./BarraPesquisa";
import Menu from "./Menu";
export default function Header({ title, logo, profile }: Header1Props) {
  return (
    <>
      <HeaderCabec>
        <header className="header">
          <div className="brand">
            <img src={logo} alt="Logo" className="logo" />

            <h1 className="title">{title}</h1>
            <BarraPesquisa />
            <img src={profile} alt="Perfil" className="profile" />
          </div>
        </header>
      </HeaderCabec>
      <Menu />
    </>
  );
}
