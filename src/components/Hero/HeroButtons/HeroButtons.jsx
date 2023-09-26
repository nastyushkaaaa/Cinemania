import { MdArrowForwardIos } from 'react-icons/md';
import css from './HeroButtons.module.css';

export const HeroButtons = ({ handleToTheNextMovie, handleToThePrevMovie }) => {
  return (
    <div className={css.bottonsCont}>
      <button onClick={() => handleToThePrevMovie()} className={css.button}>
        <MdArrowForwardIos
          fill="white"
          className={css.backIcon}
        ></MdArrowForwardIos>
      </button>
      <button onClick={() => handleToTheNextMovie()} className={css.button}>
        <MdArrowForwardIos fill="white"></MdArrowForwardIos>
      </button>
    </div>
  );
};
