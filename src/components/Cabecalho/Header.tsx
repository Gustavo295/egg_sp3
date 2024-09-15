import { Header1Props } from "../../types";
import { HeaderCabec } from "../../styled";
export default function Header({ title, logo, profile }: Header1Props) {
  return (
    <>
      <HeaderCabec>
        <header className="header">
          <div className="brand">
            <img src={logo} alt="Logo" className="logo" />
            <h1 className="title">{title}</h1>
          </div>
          <img src={profile} alt="Perfil" className="profile" />
        </header>
      </HeaderCabec>
    </>
  );
}
