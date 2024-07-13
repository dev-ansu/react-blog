import { BrowserRouter, Route, Routes } from "react-router-dom"
import Main from "./components/_layout/Main"
import NotFound from "./components/pages/NotFound"
import Noticia from "./components/pages/Noticias/Noticia"
import Pesquisa from "./components/pages/Pesquisa"


const RoutesApp = ()=>{
    return(
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="noticia/:id" element={<Noticia />} />
            <Route path="pesquisa/:title" element={<Pesquisa />} />
            <Route path="*" element={<NotFound />} />
        </Routes>        
    )
}

export default RoutesApp;