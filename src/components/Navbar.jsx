
import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
// import { IoArrowUp } from "react-icons/io5";


const Navbar = () => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setActive(true);
      } else {
        setActive(false);
      }
  };

    window.addEventListener("scroll", handleScroll);
    return () => {
    window.removeEventListener("scroll", handleScroll);
    };

}, []);

  return (
    <div className="navbar py-7 flex items-center justify-between">
  
        <div className="logo">
          <h1 className="text-3xl font-bold">Portfolio</h1>
        </div>

        {/* Menu Desktop */}
        <ul className="menu md:flex hidden items-center gap-10">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#certificate">Certified</a></li>
          <li><a href="#project">Project</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        {/* Tombol Scroll Up Mobile */}
<a 
  href="#home"
  className=" fixed bottom-6 right-6 w-14 h-14 flex items-center justify-center bg-violet-600 text-white rounded-full shadow-lg hover:bg-violet-500 hover:scale-110 transition"
>
  <FaArrowUp size={20} />
</a>
</div>
  )
}

export default Navbar