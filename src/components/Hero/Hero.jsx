import css from './Hero.module.css';

export const Hero = ({ movie }) => {
  const { id, title, overview, poster_path } = movie;
  return (
    <li key={id} className={css.container}>
      <div className={css.background}>
        <div
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original${poster_path})`,
            position: 'absolute',
            right: 0,
            top: 0,
            zIndex: -1,
            width: 880,
            height: 720,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
          }}
        ></div>
        <div className={css.content}>
          <h1 className={css.title}>{title}</h1>

          <p className={css.description}>{overview}</p>
          <button className={css.startBtn}>Watch trailer</button>
        </div>
        {/* <img
        src={
          poster_path
            ? `https://image.tmdb.org/t/p/original${poster_path}`
            : 'No poster'
        }
        alt={title}
        className={css.poster}
      ></img> */}
      </div>
    </li>
  );
};
