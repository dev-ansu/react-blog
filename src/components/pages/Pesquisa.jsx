import { useParams } from "react-router-dom";
import "./style.css"
import { noticiaByTitle } from "../../api/recentes";
import { useEffect, useState } from "react";
import NoticiaContent from "../_layout/Noticias/NoticiaContent";
const Pesquisa = ()=>{
    const params = useParams();
    const [filteredNoticias, setFilteredNoticias] = useState([]);

    useEffect(()=>{
        noticiaByTitle(params.title).then((res)=>{
            setFilteredNoticias(res);
        })
    },[params.title]);
    console.log(filteredNoticias)
    return (
        <div id="pesquisa" className="d-flex flex-column gap-2">
            <h1>Pesquisa: {params.title}</h1>
            {filteredNoticias.map(noticia => (
                <NoticiaContent key={noticia.id} noticia={noticia} alignFlex={'start'} categoryColor={'black'} titleColor={'danger'} />
            ))
            }
        </div>
    )
}

export default Pesquisa;