import { Header } from './Header';
import { Hero } from './Hero';

export const App = () => {
  return (
    <div
      style={{
        backgroundColor: '#111111',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Header></Header>
      <Hero></Hero>
    </div>
  );
};
