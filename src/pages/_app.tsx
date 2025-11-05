import GlobalLayout from "@/components/global-layout";
import "@/styles/globals.css";
import { NextPage } from "next";
import type { AppProps } from "next/app";
import { ReactNode } from "react";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactNode) => ReactNode;
};

export default function App({
  Component,
  pageProps,
}: AppProps & {
  Component: NextPageWithLayout;
}) {
  const getLayout = Component.getLayout ?? ((page: ReactNode) => page);
  return <GlobalLayout>{getLayout(<Component {...pageProps} />)}</GlobalLayout>;
  // const page = <Component {...pageProps} />;
  // const getLayout =
  //   "getLayout" in Component &&
  //   typeof (Component as { getLayout?: (page: JSX.Element) => JSX.Element })
  //     .getLayout === "function"
  //     ? (Component as { getLayout: (page: JSX.Element) => JSX.Element })
  //         .getLayout
  //     : undefined;
  // return <GlobalLayout>{getLayout ? getLayout(page) : page}</GlobalLayout>;
}
