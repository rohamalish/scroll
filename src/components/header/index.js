import Headroom from "react-headroom";
import { AiOutlineMenu,AiOutlineSearch } from "react-icons/ai";
import "./index.css"
function Header() {
  return (
    <Headroom>
      <div className="header">
        <AiOutlineMenu/>
        <AiOutlineSearch/>
      </div>
    </Headroom>
  );
}

export default Header;