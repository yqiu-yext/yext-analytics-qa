import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { formatPhoneNumber } from "react-phone-number-input";
import { Image } from "@yext/pages-components"
import { AnalyticsScopeProvider } from "@yext/pages-components";
import { Link } from "@yext/pages-components";
import { Code } from "lucide-react";

export interface HeaderProps {
  data?: any;
}

let navigation = [
  // { name: "About", href: "#about" },
  // { name: "Hours", href: "#hours" },
  // { name: "Gallery", href: "#gallery" },
  // { name: "Contact", href: "#contact" },
];

const Header = ({ data }: HeaderProps) => {
  let phone = "+12345678910";
  let email = "support@yext.com";

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <AnalyticsScopeProvider name="header">
      <header className="border-b shadow-sm">
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex items-center gap-x-12">
            <a href="/index.html" className="-m-1.5 p-1.5">
              <span className="sr-only">Yext Electronics</span>
              <img
                className="h-24 w-auto rounded-full"
                src="/yext-logo.png"
                alt=""
              />
            </a>
            <div className="hidden lg:flex lg:gap-x-12">
              {/* {navigation.map((item) => (
                <Link 
                  href={item.href}  
                  key={item.name}
                  className="tracking-tight font-bold leading-6 text-gray-900 hover:text-gray-700"
                  eventName={`cta Click_${item.name}`}
                  >
                  {item.name}
                </Link>
              ))} */}
            </div>
          </div>
          {/* <div className="flex justify-around space-x-8 p-2 border border-gray-300 rounded-md shadow-sm"> */}
          {/* <Link className="hover:underline hover:text-blue-500" href="/stores">
            Po
          </Link> */}
          <AnalyticsScopeProvider name="sourcecode">
            <div>
              <a className="tracking-wide font-bold flex space-x-3 border p-3 bg-gray-200 rounded-md shadow-sm hover:bg-gray-300" href="https://github.com/lymarrie/yext-analytics-qa"><div>View Source Code</div><Code size={24} /></a>
            </div>
          </AnalyticsScopeProvider>
        </nav>
      </header>
    </AnalyticsScopeProvider>
  );
};

export default Header;
