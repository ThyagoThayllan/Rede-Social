import styles from './Avatar.module.css'

interface AvatarProps {
    avatar: string;
    smallAvatar?: boolean;
}

export const Avatar = ({ avatar, smallAvatar }: AvatarProps) => {
    return (
        <img src={avatar} className={smallAvatar === true ? styles.smallAvatar : styles.defaultAvatar} />
    )
}
