interface Link {
  title: string;
  url: string;
}

const socials = [
  {
    title: "Email",
    url: "mailto:yudistiraagil24@gmail.com",
  },
  {
    title: "Github",
    url: "https://github.com/agildw",
  },
  {
    title: "LinkedIn",
    url: "https://www.linkedin.com/in/agildw/",
  },
];

const Spotify = () => {
  const music = "Reality Club - Love Epiphany";
  const url =
    "https://open.spotify.com/intl-id/track/3HEfLSVUo9rxdD0JxbLAUU?si=41ec061b18d246b4";
  return (
    <a href={url} target="_blank" rel="noreferrer">
      <div className="flex flex-row p-3 pr-6 bg-pastel-pink rounded-full space-x-4 justify-start items-center">
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 32 32"
          fill="#f1f5f9"
        >
          <title>spotify</title>
          <path d="M16 0c-8.8 0-16 7.2-16 16s7.2 16 16 16 16-7.2 16-16-7.119-16-16-16zM23.363 23.119c-0.319 0.481-0.881 0.637-1.363 0.319-3.762-2.319-8.481-2.8-14.081-1.519-0.563 0.163-1.037-0.238-1.2-0.719-0.162-0.563 0.237-1.038 0.719-1.2 6.081-1.363 11.363-0.8 15.519 1.762 0.563 0.238 0.644 0.875 0.406 1.356zM25.281 18.719c-0.4 0.563-1.119 0.8-1.681 0.4-4.319-2.637-10.881-3.438-15.919-1.837-0.638 0.163-1.362-0.163-1.519-0.8-0.162-0.637 0.162-1.363 0.8-1.519 5.838-1.762 13.037-0.881 18 2.163 0.475 0.238 0.719 1.038 0.319 1.594zM25.438 14.238c-5.119-3.037-13.681-3.363-18.563-1.838-0.8 0.238-1.6-0.238-1.838-0.963-0.237-0.8 0.237-1.6 0.963-1.838 5.681-1.681 15.038-1.363 20.962 2.162 0.719 0.4 0.962 1.363 0.563 2.081-0.406 0.556-1.363 0.794-2.087 0.394z"></path>
        </svg>

        <div className="flex flex-col space-y-2 justify-center ">
          {/*<p className="text-xxs text-gray-950">On Repeat</p>*/}
          <p className="text-xxs text-gray-100">On Repeat</p>

          <p
            //className="text-xxs text-gray-800 line-clamp-1 hover:underline"
            className="text-xxs text-gray-100 line-clamp-1"
          >
            {music}
          </p>
        </div>
      </div>
    </a>
  );
};

const Links = ({ links }: { links: Link[] }) => {
  return (
    <ul className="flex flex-col space-y-4">
      {/* <p className="text-xs text-pastel-red">Contact</p> */}
      {links.map((link) => (
        <a
          href={link.url}
          key={link.url}
          className="flex flex-row space-x-1 items-center"
          target="_blank"
          rel="noreferrer"
        >
          <p className="text-xxs text-gray-600">{link.title}</p>
          <svg
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width={16}
            height={16}
          >
            {" "}
            <path
              d="M21 11V3h-8v2h4v2h-2v2h-2v2h-2v2H9v2h2v-2h2v-2h2V9h2V7h2v4h2zM11 5H3v16h16v-8h-2v6H5V7h6V5z"
              //fill="currentColor"
              fill="#4b5563"
            />{" "}
          </svg>
        </a>
      ))}
    </ul>
  );
};

const Footer = ({ className }: { className?: string }) => {
  return (
    <footer className={`flex flex-col space-y-4 ${className}`}>
      <p className="text-xxxs text-gray-600 md:text-xxs">
        © {new Date().getFullYear()} Agil Dwiki Yudistira
      </p>
    </footer>
  );
};

const Contact = () => {
  return (
    <div className="bg-blush " id="contact">
      <div className="flex flex-col p-8 space-y-10 md:flex-row max-w-screen-xl mx-auto md:justify-between md:items-center md:space-x-16 md:space-y-0 md:py-16">
        <div className="flex flex-col space-y-8">
          <Spotify />
          <Footer className="hidden md:block" />
        </div>
        <Links links={socials} />
        <Footer className="md:hidden" />
      </div>
    </div>
  );
};

export default Contact;
