import { ReactNode } from "react";
import Footer from "./Footer";
import NavBar from "./NavBar";

import Head from "next/head";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/images/favicon.ico" />
        <title>PokéNext</title>
      </Head>
      <NavBar />
      <main className="main-container">{children}</main>
      <Footer />
    </>
  );
}
