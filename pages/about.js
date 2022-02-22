//pages/about.js
import Head from "next/head";
import Styles from "/public/assets/css/Styles.module.css";
import Link from 'next/link'

export default function About() {
  return (
    <div className="container">
      <Head>
        <title>Davit - create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">
          About <a href="/">DavIT!</a>
        </h1>
          {/*insert backlink*/}
        <div>
          Back to{" "}
          <Link href="/" as={process.env.BACKEND_URL + "/"}>
            <a>Home</a>
          </Link>
        </div>
        {/*insert backlink end*/}
        <p className="description">
          We about to tell a story: <code>I'm working at it</code>
        </p>


      </main>

      <footer>
        <a
          href="/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/assets/img/DAVIT-1.png" alt="Davit" className="logo" />
        </a>
      </footer>
    </div>
  );
}
