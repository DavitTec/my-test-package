// pages/_app.js
import '/public/assets/css/global.css'
import '/public/assets/css/main.css'
export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}
