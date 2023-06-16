import logo from './logo.svg';
import './App.css';

import {BrowserRouter, Routes, Route, Link} from "react-router-dom"

//pages
import { Box, ChakraProvider } from '@chakra-ui/react'
import themeChakra from "./styles/themeChakraUi"
import Home from "./views/Home"
import About from "./views/About"
import Login from './views/login';

function App() {
  return (
    <ChakraProvider theme={themeChakra}>
    <div className="App">
      <h1>React Hooks</h1>
      <BrowserRouter>
      <Box display={"flex"} flexDirection={"row"} alignItems={"center"} justifyContent={"space-around"} mb={"1rem"} mt={"1rem"}>
          <Link to="/about" >About</Link>
          <Link to="/">Home</Link>
          <Link to="/login" >Login</Link>     
      </Box>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  </ChakraProvider>
  );
}

export default App;
