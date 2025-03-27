import Navbar from "./components/navbar"
import Search from "./components/search";
import Blocks from "./components/products";
import About from "./components/about";
import Footer from "./components/footer";


function App(){
    return(
        <div>
        <Navbar></Navbar>
        <Search></Search>
        <Blocks></Blocks>
        <About></About>
        <Footer></Footer>
      </div>
    )
}
export default App