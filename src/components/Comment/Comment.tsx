import { useState } from 'react'
import styles from './Comment.module.css'
import { ThumbsUp, Trash } from 'phosphor-react'
import { Avatar } from '../Avatar/Avatar'

interface CommentProps {
    content: string;
    onDeleteComment: (comment: string) => void;
}

export const Comment = ({ content, onDeleteComment }: CommentProps) => {

    //  STATEs
    const [ likeCount, setLikeCount ] = useState(0)

    //  FUNCTIONs
    const handleDeleteComment = () => {
        onDeleteComment(content) 
    }

    const addLike = () => {
        setLikeCount(likeCount + 1)
    }

    return (
        <div className={styles.comment}>
            <Avatar smallAvatar={true} avatar="https://github.com/maykbrito.png" />
            <div>
                <div className={styles.contentComment}>
                    <header className={styles.headerComment}>
                        <div className={styles.profileComment}>
                            <strong>Thyago Thayllan</strong>
                            <time>há 1h</time>
                        </div>
                        <button onClick={handleDeleteComment} title='Deletar comentário' className={styles.deleteComment}>
                            <Trash size={20} />
                        </button>
                    </header>

                    <p>{content}</p>
                </div>

                <footer>
                    <button onClick={addLike}>
                        <ThumbsUp size={20} />
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>

        </div>
    )
}
