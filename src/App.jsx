// Routing Imports
import { Routes, Route } from "@solidjs/router";

// Component Imports
import Background from "./assets/bg.jpg";
import styles from "./styles/App.module.css";
import NavBar from "./components/Header.jsx";
import Main from "./components/Main.jsx";
import FAQPage from "./components/Faq.jsx";

function App() {
  return (
    <>
      <img src={Background} alt="background-img" id={styles.bg} />
      <NavBar />
      <Routes>
        <Route path="/" component={Main} />
        <Route path="/faq" component={FAQPage} />
      </Routes>
    </>
  );
}

export default App;
