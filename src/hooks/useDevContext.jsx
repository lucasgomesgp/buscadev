import { createContext, useState } from "react";

export const DevContext = createContext({});

export default function DevContextProvider({ children }) {
  const [devInfo, setDevInfo] = useState();
  const [repos, setRepos] = useState();
  return (
    <DevContext.Provider value={{ devInfo, setDevInfo, repos, setRepos }}>
      {children}
    </DevContext.Provider>
  );
}
