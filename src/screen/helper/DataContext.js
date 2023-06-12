import React, { createContext, useState } from "react";
import Welcome from "../welcomscreen/Welcome";

const DataContext = createContext();

const DataContextProvider = ({ children }) => {
  const [signedUser, setSignedUser] = useState(null);

  return (
    <DataContext.Provider value={{ signedUser, setSignedUser }}>
      {children}
    </DataContext.Provider>
  );
};

export { DataContext, DataContextProvider };

// Render the DataContextProvider and Welcome together in the root component
const App = () => {
  return (
    <DataContextProvider>
      <Welcome />
    </DataContextProvider>
  );
};

export default App;
