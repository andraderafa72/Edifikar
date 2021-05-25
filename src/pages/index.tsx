import { GetStaticPaths, GetStaticProps } from 'next';
import styles from '../styles/index.module.scss'
import { Contact } from '../Components/Contact';
import { CountCard } from '../Components/CountCard';
import { Discover } from '../Components/Discover';
import { Professionals } from '../Components/Professionals';

export default function Home(props) {
  return (
    <>
      <div className={styles.hero}>
        <h1>Faça seu serviço com a Edifikar!</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, natus? Ullam incidunt nemo deleniti! Et vitae ratione nesciunt aliquid quis laboriosam perferendis nisi, hic iusto perspiciatis sunt dolores suscipit distinctio.</p>
      </div>
    <main className={styles.container}>

      <CountCard />
      <Discover />
      <Professionals />
      <Contact />
    </main>
    </>
  )
}
