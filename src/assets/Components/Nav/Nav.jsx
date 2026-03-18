import styles from "./nav.module.css";
import { Link } from "react-router-dom";
import logo from "./logo.png";
import Input from "../Input/Input";

function Nav({ setBusca }) {
  return (
    <nav className={styles.Nav}>
      <img className={styles.Nav_img} src={logo} alt="" width={150} />

      <div className={styles.Nav_conteiner_search}>
<Input
    className={styles.Nav_search}
  type="search"
  placeholder="pesquise por titulo"
  onChange={(e) => setBusca(e.target.value)}
/>
      </div>

      <ul className={styles.Nav_conteiner_menu}>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/favoritos"}>Favoritos</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;