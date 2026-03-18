import book from "./book.jpeg";
import styles from "./CardBook.module.css";

function CardBook({ titulo, author, ano, nota,imagem }) {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
<div className={styles.imageContainer}>
  {imagem ? (
    <img
      className={styles.img}
      src={imagem}
      alt={titulo}
      onError={(e) => (e.target.style.display = "none")}
    />
  ) : (
    <div className={styles.noImage}>
      📚
      <span>Sem capa</span>
    </div>
  )}
  <span className={styles.favorite}>❤️</span>
</div>
        <span className={styles.favorite}>❤️</span>
      </div>

      <div className={styles.content}>
        <h3 className={styles.title}>{titulo}</h3>
        <p className={styles.author}>{author}</p>

        <ul className={styles.info}>
          <li>{ano}</li>
          <li>{nota}</li>
        </ul>
      </div>
    </div>
  );
}

export default CardBook;