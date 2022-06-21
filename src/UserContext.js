import React from "react";

export const UserContext = React.createContext();

export const UserStorage = ({ children }) => {
  const [user, setUser] = React.useState('')
  return <UserContext.Provider value={{user, setUser}}>{children}</UserContext.Provider>;
};
