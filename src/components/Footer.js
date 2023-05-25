import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <p>Copyright &copy; 2021</p>
      <div>
        <Link to="/about">About</Link>
        <Link to="/history">History</Link>
      </div>
    </footer>
  );
};

export default Footer;
