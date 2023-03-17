//
import Header from './Header';
import Recents from './Recents';
import './Home.css';

function Home() {
  return (
    <main className="home__wrapper">
      <Header />
      <Recents />
    </main>
  )
}

export default Home;
