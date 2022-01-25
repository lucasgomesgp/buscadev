import { useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import { ImLocation2 } from "react-icons/im";
import { RiFileUserLine } from "react-icons/ri";
import { FiPackage } from "react-icons/fi";
import { BsCalendar3 } from "react-icons/bs";
import Menu from "../../src/components/Menu";
import Search from "../../src/components/Search";
import { DevContext } from "../../src/hooks/useDevContext";
import styles from "../../styles/devInfo.module.css";

export default function DevInfo() {
  const { devInfo, repos } = useContext(DevContext);
  const loader = () => {
    return devInfo.avatar_url;
  };
  return (
    <>
      <Menu />
      {devInfo && repos ? (
        <main className={styles.central}>
          <div className={styles.container}>
            <a href={devInfo.html_url} >
              <Image
                unoptimized
                loader={loader}
                src={devInfo.avatar_url}
                height="200"
                width="200"
                alt="Usuário do Github"
                className={styles.image}
              />
            </a>
            <div className={styles.infos}>
              <div className={styles.infoUser}>
                <RiFileUserLine size={30} />
                <h2>{devInfo.name}</h2>
                <p>@{devInfo.login}</p>
              </div>
              <div className={styles.infoUser}>
                <ImLocation2 size={30} />
                <span>{devInfo.location}</span>
              </div>
              <div className={styles.infoUser}>
                <FiPackage size={30} />
                <span>Repositórios: {repos.length}</span>
              </div>
              <div className={styles.infoUser}>
                <h4>{devInfo.bio}</h4>
              </div>
              <div className={styles.infoUser}>
                <BsCalendar3 size={30} />
                <span>Criado em: {devInfo.created_at.slice(0, 10)}</span>
              </div>
            </div>
          </div>
          <section className={styles.repositories}>
            {repos.map((repo) => (
              <article className={styles.repoInfos} key={repo.id}>
                <Link href={repo.html_url} className={styles.link}>
                  {repo.name}
                </Link>
                <p>{repo.description}</p>
                <div className={styles.language}>
                  <span className={styles.color}></span>
                  {repo.language}
                </div>
              </article>
            ))}
          </section>
        </main>
      ) : (
        <>
          <Search />
        </>
      )}
    </>
  );
}
