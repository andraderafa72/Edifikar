import styles from './styles.module.scss';

export function ContactForm () {
  function handlePost(event){
    event.preventDefault();
  }

  return (
    <section className={styles.contactForm}>
      <form action="/" method="POST" onClick={(e) => handlePost(e)}>
        <div className={styles.formArea}>
          <label htmlFor="name">Nos conte seu nome:</label>
          <input
            type="text"
            name="name"
            id=""
          />
        </div>

        <div className={styles.formArea}>
          <label htmlFor="email">Nos conte um e-mail, para podermos retornar o contato posteriormente.</label>
          <input
            type="text"
            name="email"
            id=""
          />
        </div>

        <div className={styles.formArea}>
          <label htmlFor="assunto">Sobre o que você deseja falar:</label>
          <input
            type="text"
            name="assunto"
            id=""
          />
        </div>

        <div className={styles.formArea}>
          <label htmlFor="description">Tente explicar ao máximo e não economize perguntas. Estamos aqui para você!</label>
          <textarea
            name="description"
            id=""
          />
        </div>
        <button type="button">Enviar</button>
      </form>
      <div className={styles.gallery}>
        <div className={styles.left}>
          <img src="/Cover.png" alt=""/>
          <img src="/Cover.png" alt=""/>
        </div>
        <div className={styles.right}>
          <img src="/Cover.png" alt=""/>
          <img src="/Cover.png" alt=""/>
        </div>
      </div>
    </section>
  )
}
