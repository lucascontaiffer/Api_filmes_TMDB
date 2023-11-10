import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BiCameraMovie, BiSearchAlt2 } from "react-icons/bi";

const NavBar = () => {
  const [search, setSearch] = useState("")
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!search) return

    navigate(`/search?q=${search}`)
    setSearch("")
  }
  return (
    <nav className="navbar">
      <h2 className="titulo-do-site">
        <Link to="/">
          <BiCameraMovie /> StreamBerry
        </Link>
      </h2>
      <form onSubmit={handleSubmit}>
        <input onChange={(e) => setSearch(e.target.value) (console.log(search))} value={search} className="input-search" type="text" placeholder="Busque filme" />
        <button className="search-btn" type="submit">
          <BiSearchAlt2 />
        </button>
      </form>
      {/* <Link to="/movie/1">Movie</Link>
        <Link to="/search">Search</Link>        */}
    </nav>
  );
};

export default NavBar;
