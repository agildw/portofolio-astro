import { useEffect, useRef, useState } from "react";
import anime from "animejs";

interface Link {
  title: string;
  url: string;
  className?: string;
}

const links: Link[] = [
  { title: "Home", url: "/" },
  // { title: "About", url: "/#about" },
  {
    title: "Projects",
    url: "/projects",
    className:
      "bg-pastel-pink text-white hover:bg-pastel-red focus:outline-none focus:ring-2 focus:ring-pastel-pink focus:ring-offset-2 focus:ring-offset-white",
  },
  // { title: "Contact", url: "#contact" },
];

const BurgerIcon = () => {
  return (
    <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      {" "}
      <path
        d="M3 3h8v10H3V3zm2 2v6h4V5H5zm8-2h8v6h-8V3zm2 2v2h4V5h-4zm-2 6h8v10h-8V11zm2 2v6h4v-6h-4zM3 15h8v6H3v-6zm2 2v2h4v-2H5z"
        fill="currentColor"
      />{" "}
    </svg>
  );
};

const CloseIcon = () => {
  return (
    <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      {" "}
      <path
        d="M5 5h2v2H5V5zm4 4H7V7h2v2zm2 2H9V9h2v2zm2 0h-2v2H9v2H7v2H5v2h2v-2h2v-2h2v-2h2v2h2v2h2v2h2v-2h-2v-2h-2v-2h-2v-2zm2-2v2h-2V9h2zm2-2v2h-2V7h2zm0 0V5h2v2h-2z"
        fill="currentColor"
      />{" "}
    </svg>
  );
};

const Routes = ({ links }: { links: Link[] }) => {
  // const animationRef = useRef(null);
  const [animationRef, setAnimationRef] = useState<
    ReturnType<typeof anime> | undefined
  >();

  useEffect(() => {
    const navbars = document.querySelectorAll(".navbar-default");
    navbars.forEach((navbar) => {
      if (navbar) {
        setAnimationRef(
          anime({
            targets: navbar,
            opacity: [0, 1],
            translateY: [-10, 0],
            duration: 300,
            easing: "easeInOutSine",
          }),
        );
      }
    });
  }, []);

  return (
    <div className="space-x-4 ml-auto flex flex-col md:flex-row w-full md:w-auto navbar-default">
      <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-blush md:bg-transparent md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 space-y-2 md:space-y-0 md:bg-gray-0">
        {links.map((link) => (
          <li key={link.url}>
            <a
              href={link.url}
              className={`text-sm font-bold p-2 rounded-lg text-gray-800 hover:bg-blush ${link.className}`}
            >
              {link.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Navbar = () => {
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setOpen(true);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav className="flex flex-col md:flex-row md:justify-between md:items-center px-4 py-4 md:px-12">
      {/* <div /> */}
      <div className="flex flex-row items-center space-x-4 justify-between">
        <a
          className="text-lg md:text-xl text-gray-800 flex flex-row items-center space-x-4"
          href="/"
        >
          <img src="/logo.png" alt="logo" className="w-8 h-8" />
          {/* <span className="hidden md:block">Agil</span> */}
        </a>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-800 rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-pastel-pink focus:ring-offset-2 focus:ring-offset-white transition duration-300 ease-in-out"
          aria-controls="navbar-default"
          aria-expanded="false"
          onClick={() => setOpen(!open)}
        >
          <span className="sr-only">Open main menu</span>
          {/* <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            ></path>
          </svg> */}
          {open ? <CloseIcon /> : <BurgerIcon />}
        </button>
      </div>

      <div className="hidden md:flex">
        <Routes links={links} />
      </div>

      <div className="md:hidden">{open && <Routes links={links} />}</div>
      {/* <Routes links={links} /> */}
    </nav>
  );
};

export default Navbar;
