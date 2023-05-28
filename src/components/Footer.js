import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <p>Copyright &copy; 2021</p>
      <div>
        <Link to="/">Home</Link>
        <Link to="/history">History</Link>
        <Link to="/about">About</Link>
      </div>
    </footer>
  );
};

export default Footer;
