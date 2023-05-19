import Image from 'next/image';
import styles from '@/styles/User.module.css';
import Link from 'next/link';

export default function User({ tag, nickname, chats }: { tag: string, nickname: string, chats: { me: boolean, chat: string }[] }) {
    return (
        <Link href={'./' + tag} className={styles.user}>
            <Image src="/userProfile.png" width={56} height={56} alt={"Icon"} />
            <div className={styles.content}>
                <span className={styles.userName}>
                    {nickname}
                </span>
                <span className={styles.lastChat}>
                    {chats[chats.length - 1]?.chat} · 1h
                </span>
            </div>
        </Link>
    )
}
