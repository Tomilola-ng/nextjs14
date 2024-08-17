import { _siteDetails } from "@/lib/config";

import MenuLink from "./MenuLink";
import Logo from "../Reusables/Logo";

export default function Header() {
  return (
    <header
      role="banner"
      className="flexBetween py-4 pSm bg-white border-b-2 border-gray-200"
    >
      <Logo />
      <div className="flex flex-col">
        {_siteDetails.menuLinks.map((link, index) => (
          <MenuLink key={index} {...link} />
        ))}
      </div>
    </header>
  );
}
