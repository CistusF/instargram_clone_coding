import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

import Sidebar from '@/modules/Sidebar';
import Post from '@/modules/Post';
import Image from 'next/image';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });
const storys: {
  name: string
}[] = [
    {
      name: "CistusF"
    },
    {
      name: "Vendetta"
    },
    {
      name: "IG"
    }
  ];

const suggested: {
  name: string,
  followed: string[]
}[] = [
    {
      name: "Jisu-Park",
      followed: ["ICBM", "407"]
    },
    {
      name: "Jj_Cse",
      followed: ["Vendetta", "Programmers"]
    },
    {
      name: "Sung",
      followed: ["Park", "Discord"]
    },
    {
      name: "Woo",
      followed: ["Melon", "M-Net"]
    },
    {
      name: "Min",
      followed: ["Apple", "Razer"]
    }
  ];

const footerLinks: string[] = ["About", "Help", "Press", "API", "Jobs", "Privacy", "Terms", "Locations", "Language", "CistusF"];

export default function Home() {
  return (
    <>
      <Head>
        <title>Cistagram</title>
        <meta name="description" content="Instagram clone coding by cistusF" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <Sidebar />
        <div className={styles.mainContents}>
          <div className={styles.main}>
            <div className={styles.centerSection}>
              <div className={styles.storys}>
                {
                  storys.map(({ name }, index) => {
                    return <div className={styles.story} key={index}>
                      <Link href="/">
                        <Image src="/userProfile.png" width={56} height={56} alt={"Icon"} />
                        <p className={styles.name}>{name}</p>
                      </Link>
                    </div>
                  })
                }
              </div>
              <div className={styles.Posts}>
                <Post name={"CistusF"} img={"http://placehold.it/100x100"} content={"Hello World!"} comments={[]} />
                <Post name={"CistusF"} img={"http://placehold.it/100x100"} content={"I love Node.js"} comments={[]} />
              </div>
            </div>
          </div>
          <div className={styles.sideProfile}>
            <div className={styles.userProfile}>
              <Image src="/userProfile.png" width={56} height={56} alt={"Icon"} />
              <div className={styles.info}>
                <span className={styles.tag}>
                  CistusF
                </span>
                <span className={styles.name}>
                  CistusF
                </span>
              </div>
              <div className={styles.subButton}>
                switch
              </div>
            </div>
            <div className={styles.suggest}>
              <div className={styles.system}>
                <span>Suggested for you</span>
                <span>See All</span>
              </div>
              <div className={styles.users}>
                {
                  suggested.map(({ name, followed }, index) => {
                    return <div className={styles.user} key={index}>
                      <div className={styles.userInfo}>
                        <Image src="/userProfile.png" width={32} height={32} alt={"Icon"} />
                        <div className={styles.flowinfo}>
                          <span className={styles.tag}>
                            {name}
                          </span>
                          <span className={styles.name}>
                            Followed by {followed.join(", ")}...
                          </span>
                        </div>
                      </div>
                      <div className={styles.subButton}>
                        Follow
                      </div>
                    </div>
                  })
                }
              </div>
            </div>
            <div className={styles.footer}>
              {footerLinks.map((content, index) => {
                return <Link key={index} href={"/" + content.toLowerCase()} className={styles.item}>
                  {content}
                </Link>
              })}
            </div>
            <div className={styles.banner}>
              <span className={styles.copyright}>
                © 2023 INSTAGRAM FROM META
              </span>
              <span className={styles.copyright}>
                Copy by CistusF
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
