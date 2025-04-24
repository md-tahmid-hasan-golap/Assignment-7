import "./App.css";
import Banner from "./components/banner/Banner";
import Blogs from "./components/Blogs/Blogs";
import Footer from "./components/footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Text from "./components/Text/Text";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Text></Text>
      <Blogs></Blogs>

      <Footer></Footer>
    </>
  );
}

export default App;
