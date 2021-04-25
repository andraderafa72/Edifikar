import { Header } from '../Components/Header';
import '../styles/global.scss';
import styles from '../styles/app.module.scss';
import { Footer } from '../Components/Footer';

function MyApp({ Component, pageProps }) {
  return (
    <div className={styles.wrapper}>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  )
}

export default MyApp
