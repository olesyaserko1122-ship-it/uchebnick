import { Link } from 'react-router-dom';

function Header() {
  return (
    <header style={{
      background: '#4a3520',
      padding: '12px 30px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderBottom: '4px solid #c9ad93'
    }}>
      <h1 style={{ color: '#f5ede4', fontSize: '22px', margin: 0 }}>
        📘 Интерактивный учебник
      </h1>
      <nav>
        <Link to="/" style={{
          color: '#f5ede4',
          textDecoration: 'none',
          background: '#7a5a3a',
          padding: '8px 18px',
          borderRadius: '20px',
          fontSize: '14px',
          fontWeight: '600'
        }}>
          🏠 На главную
        </Link>
      </nav>
    </header>
  );
}

export default Header;