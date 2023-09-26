import css from './Header.module.css';
import { FaRegMoon } from 'react-icons/fa';
import logo from '../../images/logo.png';

export const Header = () => {
  return (
    <header className={css.header}>
      <div className={css.logoCont}>
        <img
          src={logo}
          style={{ width: '48px', height: '48px' }}
          alt="logo"
        ></img>
        <p className={css.logoTitle}>Cinemania</p>
      </div>
      <nav>
        <ul className={css.nav}>
          <li>
            <p>Home</p>
          </li>
          <li>
            <p>Catalog</p>
          </li>
          <li>
            <p>My Library</p>
          </li>
        </ul>
      </nav>
      <button className={css.themeButton}>
        <FaRegMoon fill="white" className={css.moonIcon}></FaRegMoon>
      </button>
    </header>
  );
};
