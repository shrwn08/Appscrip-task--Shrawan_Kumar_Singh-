import "./App.css";
import Description from "./Components/description/Description";
import Footer from "./Components/footer/Footer";
import Header from "./Components/header/Header";
import Lorem from "./Components/lorem-bar/Lorem";
import Navbar from "./Components/navbar/Navbar";
import Operation from "./Components/operation/Operation";
import Products from "./Components/products/Products";

function App() {
  return (
    <div className="App">
      <Lorem />
      <Header />
      <Description />
      <Operation />
      <Products />
      <Footer />
    </div>
  );
}

export default App;
