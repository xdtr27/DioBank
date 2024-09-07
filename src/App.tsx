import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { Card } from "./components/Card";
import { Header } from "./components/Header/Header";



function App() {
  return (
    <>
      <ChakraProvider>
        <Header />
        <Card />
      </ChakraProvider>
    </>
  );
}

export default App;
