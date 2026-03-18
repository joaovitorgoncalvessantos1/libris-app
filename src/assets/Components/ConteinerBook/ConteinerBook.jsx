import styles from './ConteinerBook.module.css'

function ConteinerBook({children}) {
  return (
    <div className={styles.ConteinerBook}>{children}</div>
  )
}

export default ConteinerBook