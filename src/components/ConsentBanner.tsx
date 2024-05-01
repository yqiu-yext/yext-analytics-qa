import React from 'react';

const ConsentBanner = ({ onConsent }) => {
    return (
        <div className="fixed bottom-0 w-full p-5 text-center shadow-md bg-gray-300 top-shadow">
            <p>We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies.</p>
            <button onClick={onConsent} className="mt-3 rounded-full w-full sm:w-auto bg-black px-8 py-2.5 text-lg font-semibold text-white shadow-sm hover:bg-gray-600 hover:duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">
                Accept Cookies
            </button>
        </div>
    );
};

export default ConsentBanner;
