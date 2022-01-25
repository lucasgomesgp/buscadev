import { useRouter } from "next/router";
import { useContext, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { DevContext } from "../../../src/hooks/useDevContext";
import Texts  from "../Texts";
import styles from "./styles.module.css";

export default function Search() {
  const [dev, setDev] = useState("");
  const { setDevInfo, setRepos } = useContext(DevContext);
  const router = useRouter();

  function handleSend(event) {
    event.preventDefault();
    if (dev) {
      const response = fetch(
        `${process.env.NEXT_PUBLIC_GITHUB_API}/${dev.toLowerCase()}`
      )
        .then((resp) => resp.json())
        .then((data) => {
          return data;
        })
        .catch((err) => {
          alert("Error: " + err);
        });

      response.then((all) => {
        setDevInfo(all);
      });

      fetch(
        `${process.env.NEXT_PUBLIC_GITHUB_API}/${dev.toLowerCase()}/${process.env.NEXT_PUBLIC_PATH_GIT}`
      )
        .then((data) => data.json())
        .then((result) => {
          setRepos(result);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    router.push("/devinfo");
  }

  return (
    <header className={styles.container}>
      <Texts />
      <form onSubmit={handleSend}>
        <div className={styles.input}>
          <input
            type="text"
            name="devName"
            id="devName"
            placeholder="Usuário do Github"
            className={styles.inputSearch}
            value={dev}
            onChange={(event) => setDev(event.target.value)}
            required
          />
          <FaSearch size={24} className={styles.search} onClick={handleSend} />
        </div>
      </form>
    </header>
  );
}
