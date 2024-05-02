import { useDocument } from "../../hooks/useDocument";
import { Car, Map, Phone } from "lucide-react";
import { formatPhoneNumber } from "react-phone-number-input";
import StarRating from "../StarRating";
import Hours from "../Hours";
import { 
    AnalyticsScopeProvider,
    Link, 
} from "@yext/pages-components";

  
 const Hero = () => {
    const document = useDocument<any>();
    // const hours = document.hours;
    const name = document.name;
    const description = document.description;
    const neighborhood = document.neighborhood;
    const address = document.address;
    const mainPhone = document.mainPhone;
    const ctas = document.c_heroCTAs;
  
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
                            <div id="Driving Directions" className="flex space-x-3 items-center">
                                <Car size={24} />
                                    <Link 
                                        href={`https://www.google.com/maps/dir/?api=1&destination=${name} ${address.line1} ${address.city} ${address.region} ${address.postalCode}`}
                                        eventName="getdirections"
                                    >
                                        Get Directions
                                    </Link>
                            </div>
                            <div id="Phone" className="flex space-x-3 items-center">
                                <Phone size={24} />
                                    <Link 
                                        href="" 
                                        eventName="call"
                                    >
                                        {formatPhoneNumber(mainPhone)}
                                    </Link>
                            </div>
                            <AnalyticsScopeProvider name="ctas">
                                <div id="CTAs" className="flex flex-col text-center space-y-3 py-4 w-full sm:max-w-fit">
                                    {ctas.map(cta => (
                                        <Link 
                                            className="primary-cta"
                                            key={cta.label}
                                            eventName={`cta_click-${cta.label}`}
                                            cta={{
                                                link: cta.link,
                                                linkType: cta.linkType,
                                                label: cta.label
                                            }}
                                        >
                                            {cta.label}
                                        </Link>
                                    ))}
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