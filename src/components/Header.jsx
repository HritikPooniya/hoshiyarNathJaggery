import React, { useEffect, useState } from "react";
import "../styles/header.css";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const [target, setTarget] = useState(false);

  useEffect(()=>{
    const value = localStorage.getItem('user');
    console.log({value})
    if(value !== undefined){
      setTarget(true)
    }
  },[])

  const handleLogout = ()=>{

    localStorage.removeItem('user');
    window.location.reload();

  }

  useEffect(()=>{
    const value = localStorage.getItem('user');
    console.log({value})
    if(value === undefined || value === null){
      setTarget(false)
    }else{
      setTarget(true)
    }
  },[])



  return (
    <div className="row header">
      <div className="col-12 d-flex align-items-center">
        <div className="col-6">
          <img  className="logo ms-5" src="/assets/logo.png" alt=""  onClick={() => handleScroll("home")}/>
        </div>
        <div className="col-6 d-flex justify-content-between px-5 tags">
          <div onClick={() => navigate("/")}>Home</div>
          <div onClick={() => handleScroll("about")}>About Us</div>
          <div onClick={() => navigate("/product")}>Our Products</div>
          {
            target && <div onClick={handleLogout} title="Log Out"> <i className="fa fa-sign-out"></i> </div>
          }
        </div>
      </div>
    </div>
  );
};

export default Header;
