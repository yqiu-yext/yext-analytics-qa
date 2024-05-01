import { useDocument } from "../../hooks/useDocument";
import { Car, Map, Phone } from "lucide-react";
import { formatPhoneNumber } from "react-phone-number-input";
import StarRating from "../StarRating";
import Hours from "../Hours";
import { 
    AnalyticsScopeProvider,
    Link 
} from "@yext/pages-components";

  
 const Hero = () => {
    const document = useDocument<any>();
    // const hours = document.hours;
    const name = document.name;
    const description = document.description;
    const neighborhood = document.neighborhood;
    const address = document.address;
    const mainPhone = document.mainPhone;
  
    return (
        <>
            <AnalyticsScopeProvider name="hero">
                <div className="space-y-10 section">
                    <div>
                        <h1 className="font-bold mb-4 text-gray-900">{name} {neighborhood && <span>({neighborhood})</span>}</h1>
                        <StarRating rating={4.7} totalReviews={100} />
                    </div>
                    <div className="grid gap-12 lg:grid-cols-2">
                        <div id="Address, Phone, CTAs, Description" className="space-y-5 text-lg">
                            <div id="Address" className="flex space-x-5 items-center">
                                <Map size={24} />
                                <div>
                                    <div>{address.line1}</div>
                                    {address.line2 && <div>{address.line2}</div>}
                                    <div>{address.city}, {address.region}</div>
                                </div>
                            </div>
                            <AnalyticsScopeProvider name="phone">
                                <div id="Phone" className="flex space-x-3 items-center">
                                    <Phone size={24} />
                                        <Link href="">
                                            {formatPhoneNumber(mainPhone)}
                                        </Link>
                                </div>
                            </AnalyticsScopeProvider>
                            <AnalyticsScopeProvider name="ctas">
                                <div id="CTAs" className="flex flex-col text-center space-y-3 py-4 w-full sm:max-w-fit">
                                    <Link className="rounded-full w-full sm:w-auto bg-black px-8 py-2.5 text-lg font-semibold text-white shadow-sm hover:bg-gray-600 hover:duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600" href="#">Get Directions</Link>
                                    <Link className="rounded-full w-full sm:w-auto bg-black px-8 py-2.5 text-lg font-semibold text-white shadow-sm hover:bg-gray-600 hover:duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600" href="#">Speak With An Expert</Link>
                                </div>
                            </AnalyticsScopeProvider>
                            {description && 
                                <div id="Description" className="">
                                    {description}
                                </div>
                            }
                        </div>
                        <Hours title="Store Hours" />
                    </div>
                </div>
            </AnalyticsScopeProvider>
        </>
    );
  };

export default Hero;