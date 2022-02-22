//about.js
import Head from "next/head";
import Styles from "/public/assets/css/Styles.module.css";
import Link from "next/link";

export default function Tips() {
  return (
    <div className="container">
      <Head>
        <title>Davit - create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">
          Some Tips for <a href="https://github.com/DavitTec/">DavIT!</a>
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

        <div className="grid">
          <a
            href="https://github.com/vercel/next.js/issues/3904#issuecomment-369071420"
            className="card"
          >
            <h3>Inserting Comments &rarr;</h3>
            <p>
              You can write comments in something.js JSX by wrapping them in
              curly braces.
            </p>
          </a>

          <a href="https://nextjs.org/learn" className="card">
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/DavitTec/next.js/tree/master/examples"
            className="card"
          >
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a href="https://github.com/DavitTec/" className="card">
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer>
        <a
          href="https://github.com/DavitTec/"
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
