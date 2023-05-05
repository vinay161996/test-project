import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './page/home/Home';
import Header from './component/header/Header';
import Footer from './component/footer/Footer';
import Detail from './page/detail/Detail';
import Form from './page/form/Form';


function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index element={<Home />} />
          <Route path='/shows/:id' element={<Detail />} />
          <Route path='/form/:id' element={<Form />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
