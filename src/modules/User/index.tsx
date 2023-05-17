import Image from 'next/image';
import styles from '@/styles/User.module.css';

export default function User({ tag, comments }: { tag: string, comments: { tag: string, comment: string }[] }) {
    return (
        <div className={styles.user}>
            <Image src="/userProfile.png" width={56} height={56} alt={"Icon"} />
            <div className={styles.content}>
                <span className={styles.userName}>
                    {tag}
                </span>
                <span className={styles.lastChat}>
                    {comments[comments.length - 1]?.comment} · 1h
                </span>
            </div>
        </div>
    )
}
