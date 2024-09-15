import { FormBarra } from "../../styled";
import lupa from "../../assets/image.png";
export default function BarraPesquisa() {
  return (
    <>
      <FormBarra className="search">
        <input type="search" placeholder="Buscar..." className="input" />
        <button type="submit" className="enviar">
          <img src={lupa} alt="Buscar" />
        </button>
      </FormBarra>
    </>
  );
}
