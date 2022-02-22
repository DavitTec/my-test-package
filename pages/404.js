// pages/404.js
import Head from "next/head";
import Styles from "/public/assets/css/Styles.module.css";
import Link from "next/link";

export default function Custom404() {
  return (
    <div className="container">
      <Head>
        <title>Davit - create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">
          ERROR <a href="/">404!</a>
        </h1>
          
        <h1>Page not found</h1>
        <p>
          Sorry, but the page you are looking for has not been found. Try
          checking the URL for errors or return to the homepage.
        </p>

        <h3>
          <a class="button" href="/">
            « Back to homepage
          </a>
        </h3>
      </main>

      <footer>
        <a href="/" target="_blank" rel="noopener noreferrer">
          Powered by{" "}
          <img src="/assets/img/DAVIT-1.png" alt="Davit" className="logo" />
        </a>
        <ul class="menu clearfix float-right">
          <li>
            <a href="">Legal</a>
          </li>
        </ul>
      </footer>
    </div>
  );
}
