import css from './Header.module.css';

export const Header = () => {
  return (
    <header className={css.header}>
      <div>
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
      <button className={css.themeButton}></button>
    </header>
  );
};
