import type { ReactNode } from "react";
import Header from "./Header";
// import Footer from "./Footer";
import { AnalyticsProvider } from "@yext/pages-components";
import { TemplateDataProvider } from "../common/useTemplateData";
import type { TemplateRenderProps, BaseProfile } from "../types/entities";
import { cn } from "../lib/utils";
import { useExposeEnableYAFunction } from "../common/useExposeEnableYAFunction";

interface MainProps {
  data: TemplateRenderProps<BaseProfile>;
  children?: ReactNode;
  containerClassName?: string;
}

const Main = (props: MainProps) => {
  return (
    // <ConfigurationProvider value={config}>
      <AnalyticsProvider 
        apiKey={YEXT_PUBLIC_EVENTS_API_KEY}
        currency="USD"
        templateData={props.data}
        requireOptIn={true}
        enableDebugging={YEXT_PUBLIC_ENV === "dev"}
      >
        <MainInternal {...props} />
      </AnalyticsProvider>
    // </ConfigurationProvider>
  );
};

const MainInternal = ({ data, children, containerClassName }: MainProps) => {
  useExposeEnableYAFunction();
  return (
    <TemplateDataProvider value={data}>
      <Header />
      <main className={cn("min-h-screen", containerClassName)}>
        {children}
        {/* <Footer /> */}
      </main>
    </TemplateDataProvider>
  );
};

export default Main;
