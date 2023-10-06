const Footer = () => {
  return (
    <footer className="footer footer-center p-10 bg-base-100 ">
      <aside>
        <img src="https://i.ibb.co/3hbGvYz/icon-01.png" alt="" />
        <p className="font-bold text-base">
          CHAYA JEWELRY <br />
          Providing reliable products since 1992
        </p>
        <p className="text-base">Copyright © 2023 - All right reserved</p>
      </aside>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <div>
            <i className="text-4xl text-blue-700 pl-4 fa fa-facebook"></i>
            <i className="text-4xl text-red-700 pl-4 fa fa-youtube"></i>
            <i className="text-4xl pl-4 fa fa-twitter"></i>
          </div>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
