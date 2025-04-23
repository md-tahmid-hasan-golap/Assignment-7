import "./App.css";
import Banner from "./components/banner/Banner";
import Blogs from "./components/Blogs/Blogs";
import Footer from "./components/footer/Footer";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Blogs></Blogs>

      <Footer></Footer>
    </>
  );
}

export default App;
