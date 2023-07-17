import './menu.css';

function Menu () {
  return (
    <ul className="menu">
      <li className="menu__list">Futures</li>
      <li className="menu__list menu__list--crypto">Cryptocurrencies</li>
      <li className="menu__list">Currencies</li>
    </ul>
  )
}

export default Menu;