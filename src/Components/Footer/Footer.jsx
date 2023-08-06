import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer_data">
        <div>@{new Date().getFullYear()} Siddhant Rawat</div>

        <div>ALL RIGHTS RESERVED</div>
      </div>
    </footer>
  );
};

export default Footer;
