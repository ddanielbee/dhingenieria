import React from "react";
import { Link } from "gatsby";

import facebook from "../img/social/facebook.svg";
import instagram from "../img/social/instagram.svg";
import twitter from "../img/social/twitter.svg";
import vimeo from "../img/social/vimeo.svg";
import useSiteMetadata from "./SiteMetadata";

const Footer = () => {
  const { email, phone, address } = useSiteMetadata();
  return (
    <footer className="footer has-background-black has-text-white-ter">
      <div className="content has-text-centered has-background-black has-text-white-ter">
        <div className="container has-background-black has-text-white-ter">
          <div className="columns">
            <div className="column is-4">
              <section className="menu">
                <ul className="menu-list">
                  <li>
                    <Link to="/" className="navbar-item">
                      Inicio
                    </Link>
                  </li>
                  <li>
                    <Link className="navbar-item" to="/about">
                      Acerca de
                    </Link>
                  </li>
                  <li>
                    <Link className="navbar-item" to="/products">
                      Servicios
                    </Link>
                  </li>
                </ul>
              </section>
            </div>
            <div className="column is-4">
              <section>
                <ul className="menu-list">
                  <li>
                    <Link className="navbar-item" to="/blog">
                      Últimos posts
                    </Link>
                  </li>
                  <li>
                    <Link className="navbar-item" to="/contact">
                      Contacto
                    </Link>
                  </li>
                </ul>
              </section>
            </div>
            <div className="column is-4 social">
              <ul className="list contact-list">
                <li>
                  <a href={`mailto:${email}`}>{email}</a>
                </li>
                <li>
                  <span>{phone}</span>
                </li>
                <li>
                  <span>{address}</span>
                </li>
              </ul>
              <ul className="list media-list">
                <li>
                  <a title="facebook" href="https://facebook.com">
                    <img
                      src={facebook}
                      alt="Facebook"
                      style={{ width: "1em", height: "1em" }}
                    />
                  </a>
                </li>
                <li>
                  <a title="twitter" href="https://twitter.com">
                    <img
                      className="fas fa-lg"
                      src={twitter}
                      alt="Twitter"
                      style={{ width: "1em", height: "1em" }}
                    />
                  </a>
                </li>
                <li>
                  <a title="instagram" href="https://instagram.com">
                    <img
                      src={instagram}
                      alt="Instagram"
                      style={{ width: "1em", height: "1em" }}
                    />
                  </a>
                </li>
                <li>
                  <a title="vimeo" href="https://vimeo.com">
                    <img
                      src={vimeo}
                      alt="Vimeo"
                      style={{ width: "1em", height: "1em" }}
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
