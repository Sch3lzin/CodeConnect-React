import styles from "./comment.module.css";
import { Avatar } from "../Avatar";
import { ModalComment } from "../ModalComment";

export const Comment = ({ comment }) => {
  return (
    <div className={styles.comment}>
      <Avatar author={comment.author} />
      <strong>@{comment.author.name}</strong>
      <p>{comment.text}</p>
      <div className={styles.divider} />
      <ModalComment isEditing={true} />
    </div>
  );
};
