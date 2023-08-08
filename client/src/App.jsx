import "./App.css";
import Layout from "./components/Layout/Layout";
import MobileNav from "./components/MobileNav/MobileNav";
import { useTheme } from "./context/ThemeContext";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Education from "./pages/Education/Education";
import Projects from "./pages/Projects/Projects";
import Techstack from "./pages/TechStack/Techstack";
import WorkExp from "./pages/WorkExp/WorkExp";
import ScrollToTop from "react-scroll-to-top";
import { Toaster } from "react-hot-toast";

function App() {
  const [theme] = useTheme();
  return (
    <>
      <div id={theme}>
        <Toaster />
        <MobileNav />
        <Layout />
        <div className="container rest-page">
          <About />
          <Education />
          <Techstack />
          <Projects />
          <WorkExp />
          <Contact />
        </div>
        <div className="foot">
          <h4 className="text-center">Made With ♥ ZAHURUL ISLAM &copy; 2023</h4>
        </div>
      </div>
      <ScrollToTop
        smooth
        color="#f29f67"
        style={{
          backgroundColor: "#FFFFFF",

          borderRadius: "90px",
        }}
      />
    </>
  );
}

export default App;
