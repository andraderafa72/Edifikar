import { ContactForm } from '../ContactForm';
import styles from './styles.module.scss';

export function Contact () {
  return (
    <section className={styles.contact} id="contact">
      <div className={styles.contactCard}>
        <img src="/letter.svg" alt="Fale conosco"/>
        <h1>Entre em contato com a gente!</h1>
      </div>

      <ContactForm />
    </section>
)
}
