import "./sidebar.css";
import logo from "../../images/logo.png";
import {AiFillSetting} from "react-icons/ai";
import {BsFillCameraVideoFill,BsFillCreditCardFill} from "react-icons/bs";
import {IoMdAnalytics,IoIosDocument} from "react-icons/io";
// import {FaDatabase} from "react-icons/fa";
import {BiHelpCircle} from "react-icons/bi";
import { NavLink,useLocation} from "react-router-dom";
import React from 'react';

const Sidebar = () => {
  
  let currentRoute = useLocation().pathname.toLowerCase();

  return (
    <div className="sidebar">
        <div className="sidebarWrapper">
          <div className="sideTop">
            <img src={logo} alt="logo"/>
          </div>

          <div className="sideMiddle">
            <ul className="sideBarList">
              {/* <NavLink to="/home" style={{ textDecoration: 'none', color: 'rgb(230, 230, 230)' }} >
                <li className={currentRoute.includes("/home") ? "sideBarListItems active" : "sideBarListItems"}>
                  <AiFillHome className="icons"/>
                  <div className="sideBarTitle">
                    Home
                  </div>
                </li>
              </NavLink> */}

              <NavLink to="/camera" style={{ textDecoration: 'none', color: 'rgb(230, 230, 230)' }}>
                <li className={currentRoute.includes("/camera") ? "sideBarListItems active" : "sideBarListItems"}>
                  <BsFillCameraVideoFill className="icons"/>
                  <div className="sideBarTitle">
                    Camera
                  </div>
                </li>
              </NavLink>

              <NavLink to="/analytics" style={{ textDecoration: 'none', color: 'rgb(230, 230, 230)' }}>
                <li className={currentRoute.includes("/analytics") ? "sideBarListItems active" : "sideBarListItems"}>
                <IoMdAnalytics className="icons"/>
                  <div className="sideBarTitle">
                    Analytics
                  </div>
                </li>
              </NavLink>
          

              {/* <NavLink to="/features" style={{ textDecoration: 'none', color: 'rgb(230, 230, 230)' }}>
              <li className={currentRoute.includes("/features") ? "sideBarListItems active" : "sideBarListItems"}>
                <FaDatabase className="icons"/>
                <div className="sideBarTitle">
                  Features
                </div> 
              </li>
              </NavLink> */}

              <NavLink to="/reports" style={{ textDecoration: 'none' , color: 'rgb(230, 230, 230)'}}>
              <li className={currentRoute.includes("/reports") ? "sideBarListItems active" : "sideBarListItems"}>
                <IoIosDocument className="icons"/>
                <div className="sideBarTitle">
                  Reports
                </div>
              </li>
              </NavLink>

              <NavLink to="/billing" style={{ textDecoration: 'none', color: 'rgb(230, 230, 230)' }} >
              <li className={currentRoute.includes("/billing") ? "sideBarListItems active" : "sideBarListItems"}>
                <BsFillCreditCardFill className="icons"/>
                <div className="sideBarTitle">
                  Plan
                </div>
              </li>
              </NavLink>

              <NavLink to="/settings" style={{ textDecoration: 'none', color: 'white' }} >
              <li className={currentRoute.includes("/settings") ? "sideBarListItems active" : "sideBarListItems"}>
                <AiFillSetting className="icons"/>
                <div className="sideBarTitle">
                  Settings
                </div>
              </li>
              </NavLink>
            </ul>
          </div>
          
          <div className="sideBottom">
            <BiHelpCircle className="icons"/>
            <div className="sideBarTitle">
              Help
            </div>
          </div>
        </div>
    </div>
  )
}

export default Sidebar