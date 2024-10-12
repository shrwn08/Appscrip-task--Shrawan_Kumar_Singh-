import React, { useContext, useState, useEffect } from "react";

// Create context
const ContextApp = React.createContext();

const AppProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProducts(data); 
        console.log(data);  
      } catch (error) {
        console.error("Error fetching products:", error); // Handle error
      }
    }

    fetchData(); 
  }, []); 

  return (
    <ContextApp.Provider value={{ products }}>
      {children}
    </ContextApp.Provider>
  );
};

// Custom hook to use global context
const useGlobalContext = () => {
  return useContext(ContextApp);
};

export { ContextApp, AppProvider, useGlobalContext };
