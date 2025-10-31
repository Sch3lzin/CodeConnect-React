import { Author } from "../Author";
import { ModalComment } from "../ModalComment";
import styles from "./cardpost.module.css";

import { ThumbsUpButton } from "./ThumbsUpButton";
import { Link } from "react-router";

export const CardPost = ({ post }) => {
  return (
    <article className={styles.card}>
      <header className={styles.header}>
        <figure className={styles.figure}>
          <img src={post.cover} alt={`Capa do post de titulo: ${post.title}`} />
        </figure>
      </header>
      <section className={styles.body}>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
        <Link to={`/blog-post/${post.slug}`}>Ver detalhes</Link>
      </section>
      <footer className={styles.footer}>
        <div className={styles.actions}>
          <div className={styles.action}>
            <ThumbsUpButton loading={false} />
            <p>{post.likes}</p>
          </div>
          <div className={styles.action}>
            <ModalComment />
            <p>{post.comments.length}</p>
          </div>
        </div>
        <Author author={post.author} />
      </footer>
    </article>
  );
};
