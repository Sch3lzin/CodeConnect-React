import { useState } from "react";
import { Author } from "../Author";
import { ModalComment } from "../ModalComment";
import styles from "./cardpost.module.css";

import { ThumbsUpButton } from "./ThumbsUpButton";
import { Link } from "react-router";
import { http } from "../../api";
import { useAuth } from "../../hooks/useAuth";

export const CardPost = ({ post }) => {
  const [likes, setLikes] = useState(post.likes);
  const [comments, setComments] = useState(post.comments);

  const { isAuthenticated, isLoading } = useAuth();

  const hableNewComment = (newComment) => {
    setComments([newComment, ...comments]);
  };

  const handleLikeBtn = async () => {
    const token = localStorage.getItem("access_token");

    try {
      await http.post(`blog-posts/${post.id}/like`, {});

      const response = await http.get(`blog-posts/${post.id}`);
      setLikes(response.data.likes);
    } catch (error) {
      console.error("Erro ao curtir o post:", error);
    }
  };

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
            {!isLoading && (
              <ThumbsUpButton
                loading={false}
                onClick={handleLikeBtn}
                disabled={!isAuthenticated}
              />
            )}

            <p>{likes}</p>
          </div>

          <div className={styles.action}>
            <ModalComment onSuccess={hableNewComment} postId={post.id} />
            <p>{comments.length}</p>
          </div>
        </div>

        <Author author={post.author} />
      </footer>
    </article>
  );
};
