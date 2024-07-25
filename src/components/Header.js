import { Link } from 'react-router-dom';

function Header(props) {
  return (
    <header className="d-flex justify-between align-center p-40">
      {' '}
      {/* header */}
      <Link to="/">
        <div className="d-flex align-center">
          <img width={40} height={40} src="/img/headLogo.png" alt="site logo" />
          <div>
            <h3 className="text-uppercase">React Sneakers</h3>
            <p className="opacity-5">Магазин лучших кроссовок</p>
          </div>
        </div>
      </Link>
      <ul className="d-flex">
        <li onClick={props.OnClickCart} className="mr-30 cu-p">
          <img width={18} height={18} src="/img/cart.svg" alt="cart logo" />
          <span>1205 руб.</span>
        </li>
        <li onClick={props.OnClickFav} className="mr-30 cu-p">
          <Link to="favorites">
            <img width={18} height={18} src="/img/favlogo.svg" alt="favorites logo" />
          </Link>
        </li>
        <li>
          <img width={18} height={18} src="img\user.svg" alt="user logo" />
        </li>
      </ul>
    </header>
  );
}
export default Header;
