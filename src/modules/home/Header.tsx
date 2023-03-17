//
import Logo from '../../assets/logo.svg';
import './Header.css';

function Header() {
  return (
    <header className="home__header">
      <img alt="Crew3 Challenge" src={Logo} />
      <h1>Crew3</h1>
      <h2>frontend challenge</h2>
    </header>
  )
}

export default Header;
