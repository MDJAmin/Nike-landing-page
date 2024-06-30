import { headerLogo } from "../../assets/images";
import { hamburger } from "../../assets/icons";
import { navLinks } from "../../constents";

export default function Nav() {
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} alt="Logo" width={130} height={29}  />
        </a>
        <ul className="flex-1 flex justify-center gap-16 items-center max-lg:hidden">
          {
            navLinks.map((item) => (
              <li key={item.label} >
                <a href={item.label} className="text-lg font-semibold text-white hover:text-primary transition-all"></a>
                {item.label}
              </li>
          }
        </ul>
        {/* Use the hamburger icon here if needed */}
      </nav>
    </header>
  );
}
