import { useEffect, useState } from "react";
import "./sidebar.css";
import { Link } from "react-router-dom";
import { axiosInstance } from "../../config";

export default function Sidebar() {

  const [cats, setCats] = useState([]);

  useEffect(() => {
    const getCats = async () =>
     {
      const res = await axiosInstance.get("/categories");
      setCats(res.data);
    };
    getCats();
  }, []);

  return (
  <div className="sidebar">
      <div className="sidebarItem">
          <span className="sidebarTitle">ABOUT US</span>
          <img 
            className="sidebarImage" 
            src="https://argistech.com/static/media/logo.9d88b5c690298a3b5fea.png" 
            alt="profile" 
            />
          <p>ARGIS Tech is proud that we are a 100% certified Service-Disabled Veteran Owned Small Business.
             ARGIS Tech provides custom software solutions for your needs. We are headquartered in San Antonio, Texas 
             which has a colloquial name of "Military City, USA!" We are proud to call this our home!</p>

          
          <p>We utilize technology platforms such as Python, Django, flask, jQuery, Ajax, MongoDb, CSS, NeXt, 
             NodeJs, JavaScript, React, MySQL, Express, Git, SocketIo, C#, .NET Core, HTML5, and much more</p>
      </div>
      <div className="sidebarItem">
          <span className="sidebarTitle">CATEGORIES</span>
          <ul className="sidebarList">
            {cats.map((c) => (
              <Link to={`/?cat=${c.name}`} className="link">
                <li className="sidebarListItem">{c.name}</li>
              </Link>
            ))}

          </ul>
      </div>
      <div className="sidebarItem">
          <span className="sidebarTitle">FOLLOW US</span>
          <div className="sidebarSocial">
            <i className="sidebarIcon fa-brands fa-facebook-square"></i>
            <i className="sidebarIcon fa-brands fa-twitter-square"></i>
            <i className="sidebarIcon fa-brands fa-pinterest-square"></i>
            <i className="sidebarIcon fa-brands fa-instagram-square"></i>
          </div>
      </div>
  </div>
  );
}
