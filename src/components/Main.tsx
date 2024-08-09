import type { ReactNode } from "react";
import { useState } from "react";
import Header from "./Header";
// import Footer from "./Footer";
import { AnalyticsProvider } from "@yext/pages-components";
import { TemplateDataProvider } from "../common/useTemplateData";
import type { TemplateRenderProps, BaseProfile } from "../types/entities";
import { cn } from "../lib/utils";
import { useExposeEnableYAFunction } from "../common/useExposeEnableYAFunction";
import ConsentBanner from "./ConsentBanner";

interface MainProps {
  data: TemplateRenderProps<BaseProfile>;
  children?: ReactNode;
  containerClassName?: string;
}

const Main = (props: MainProps) => {
  return (
    <AnalyticsProvider 
      apiKey={"301098e9a3da179b1329d40d61819a05"}
      currency="USD"
      templateData={props.data}
      // requireOptIn={true}
      enableDebugging={false}
    >
      <MainInternal {...props} />
    </AnalyticsProvider>
  );
};

const MainInternal = ({ data, children, containerClassName }: MainProps) => {
  // useExposeEnableYAFunction();
  // const [consentGiven, setConsentGiven] = useState(false);

  // const handleConsent = () => {
  //     if (window.enableYextAnalytics) {
  //         window.enableYextAnalytics();
  //         setConsentGiven(true);
  //     }
  // };
  return (
    <TemplateDataProvider value={data}>
      <Header />
      <main className={cn("min-h-screen", containerClassName)}>
        {children}
        {/* {!consentGiven && <ConsentBanner onConsent={handleConsent} />} */}
      </main>
    </TemplateDataProvider>
  );
};

export default Main;
