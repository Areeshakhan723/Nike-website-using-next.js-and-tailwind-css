import { headerLogo } from "../assets/images";
import { navLinks } from "../constants";
import { hamburger } from "../assets/icons";

const Nav = () => {
  return (
    <>
      <header className="padding-x absolute w-full py-8 z-10">
        <nav className="flex justify-between items-center max-container">
          <a href="/">
          <img src={headerLogo} alt="Logo" width={129} height={29}
           className="m-0 w-[129px] h-[29px]"
          />
          </a>
          <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
            {navLinks.map((items) => (
              <li key={items.label}>
              
                <a href={items.href}
                 className="font-mono text-slate-gray leading-normal text-lg">
                
                  {items.label}</a>
              </li>
            ))}
          </ul>
          <div className='flex gap-2 text-lg leading-normal font-medium font-montserrat max-lg:hidden wide:mr-24'>
          <a href='/'>Sign in</a>
          <span>/</span>
          <a href='/'>Explore now</a>
        </div>
          <div>
            <img src={hamburger} alt="Hamburger" width={25} height={25}
            onClick={() => (
              Menu()
            )}
            className="hidden max-lg:block"/>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Nav;

      