import React, { useEffect, useState } from 'react';
import { HiMenuAlt3 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";



function Appbar() {
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [toggleMenu, setToggleMenu] = useState(false);


  // Function to scroll to specific section smoothly
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        // Scrolling down
        setVisible(false);
      } else {
        // Scrolling up
        setVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <>
  
<div className='flex justify-end z-40 relative  '>
{!toggleMenu && (
          <HiMenuAlt3 fontSize={28} color="white" className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(true)} />
        )}
        {toggleMenu && (
          <AiOutlineClose fontSize={28} color="white" className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(false)} />
        )}
        {toggleMenu && (
          <div className="z-10 fixed top-0 right-0 bg-black text-white p-6 w-[50vw] h-screen shadow-2xl md:hidden list-none flex flex-col justify-start items-end rounded-md animate-slide-in">
          <AiOutlineClose className="hover:cursor-pointer mb-4" onClick={() => setToggleMenu(false)} />
          <button onClick={() => { scrollToSection('home'); setToggleMenu(false); }} className="hover:text-gray-400 my-2">Home</button>
          <button onClick={() => { scrollToSection('newsletter'); setToggleMenu(false); }} className="hover:text-gray-400 my-2">Newsletter</button>
          <button onClick={() => { scrollToSection('work'); setToggleMenu(false); }} className="hover:text-gray-400 my-2">Work</button>
          <button onClick={() => { scrollToSection('about'); setToggleMenu(false); }} className="hover:text-gray-400 my-2">About</button>
          <button onClick={() => { setToggleMenu(false); }} className="hover:text-gray-400 my-2">Book Session</button>
        </div>
        )}

</div>

<div className='flex justify-center'>


    <div
      id="navbar"
      className={`fixed top-0 hidden md:visible rounded-lg bg-[#222222] bg-opacity-70 w-[100%] mx-[3vh] z-50 md:flex justify-between px-5 py-2 text-white shadow-lg transition-transform duration-300 ${
        visible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
<div className='flex justify-start gap-16'>  
      <button onClick={() => scrollToSection('home')} className="hover:text-gray-400 text-[#40DFAF] font-bold mr-[5vh]">
        Ashjin
      </button>
      <button onClick={() => scrollToSection('about')} className="hover:text-gray-400">About</button>
      <button onClick={() => scrollToSection('work')} className="hover:text-gray-400">Work</button>
      <button onClick={() => scrollToSection('newsletter')} className="hover:text-gray-400">Newsletter</button>
     
      </div>

      <button className="h-10 w-36 bg-[#40DFAF] text-black rounded-lg font-bold transform hover:-translate-y-1 transition duration-400">
        Book a Session
      </button>
    </div>

</div>
</>
  );
}

export default Appbar;