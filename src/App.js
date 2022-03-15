import Home from "./component/Home";
import Detail from "./component/Detail";
import Page1 from "./component/page1";
import Page2 from "./component/page2";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="App">
          <Link to="/">Home</Link>
          <br />
          <Link to="/detail">Detail</Link>
        </div>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/detail" element={<Detail />}>
            <Route path="page1" element={<Page1 />} />;
            <Route path="page2" element={<Page2 />} />;
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
