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
          </div>
          <Link
            className="primary-cta flex space-x-3 items-center"
            href="https://github.com/lymarrie/yext-analytics-qa"
            eventName="sourcecode"
          >
            <span>View Source Code</span><Code size={24} />
          </Link>
        </nav>
      </header>
    </AnalyticsScopeProvider>
  );
};

export default Header;
