import { BrowserRouter } from "react-router-dom";
import Layout from "./components/_layout/Layout";
import RoutesApp from './Routes';

function App() {

 
  return (
    <BrowserRouter>
        <Layout>
          <RoutesApp />
        </Layout>
      </BrowserRouter>
  )
}

export default App
