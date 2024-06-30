import { headerLogo } from "../../assets/images";
import { hamburger } from "../../assets/icons";

export default function Nav() {
  return (
    <header>
      <nav>
        <a href="/">
          <img src={headerLogo} alt="Logo" />
        </a>
        {/* Use the hamburger icon here if needed */}
      </nav>
    </header>
  );
}
