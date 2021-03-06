//index.js
import Head from 'next/head'
import Styles from '/public/assets/css/Styles.module.css'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Davit - create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">
          Welcome to <a href="/about">DavitTec!</a>
        </h1>

        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>

        <div className="grid">
          <a href="https://nextjs.org/docs" className="card">
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
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

          <a
            href="https://github.com/DavitTec/"
            className="card"
          >
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
          Powered by{' '}
          <img src="/assets/img/DAVIT-1.png" alt="Davit" className="logo" />
        </a>
      </footer>

    </div>
  )
}
