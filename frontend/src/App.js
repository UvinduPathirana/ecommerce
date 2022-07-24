import Header from "./components/Header";
import Footer from "./components/Footer";
import { Container }  from "react-bootstrap";
import HomeScreen from "./screens/HomeScreen";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import ProductScreen from "./screens/ProductScreen";

function App() {
  return (
    <div>
    <Header />
      <main className="py-3">
        <Container>
        <Routes>
          <Route exact path='/' element={< HomeScreen />}></Route>
          <Route path='/product/:id' element={< ProductScreen />}></Route>
        </Routes>
        </Container>
      </main>
      <Footer />
        </div>
  );
}

export default App;
