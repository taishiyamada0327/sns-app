import { createContext, useEffect, useState } from 'react';
import { authRepository } from './repositories/auth';

const SessionContext = createContext();
const SessionProvider = (props) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setSession();
  }, []);

  const setSession = async () => {
    const user = await authRepository.getCurrentUser();
    setCurrentUser(user);
    setIsLoading(false);
  };

  if (isLoading) return <div></div>;
  return (
    <SessionContext.Provider value={{ currentUser, setCurrentUser }}>
      {props.children}
    </SessionContext.Provider>
  );
};

export { SessionContext, SessionProvider };
