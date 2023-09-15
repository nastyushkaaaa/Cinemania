import css from './Hero.module.css';

export const Hero = ({ title, description, poster }) => {
  return (
    <div className={css.container}>
      <h1>{title}</h1>
      <p>{description}</p>
      <button className={css.startBtn}>Get Started</button>
    </div>
  );
};
