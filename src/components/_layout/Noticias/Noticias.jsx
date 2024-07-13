import { useEffect, useState } from "react";
import { noticias } from "../../../api/recentes";
import NoticiaContent from "./NoticiaContent";
import "./style.css"
const Noticias = ()=>{
    const [todasNoticias, setNoticias] = useState([]);
    useEffect(()=>{
        noticias().then((res)=>{
            setNoticias(res);
        })
    },[])
    return (
        <div id="todas-noticias" className="card d-flex flex-row gap-2">
            <div className="d-flex w-100 gap-2 flex-column">
                {todasNoticias.map(noticia => (
                    <NoticiaContent alignFlex={'start'} noticia={noticia} capa={noticia.capa} key={noticia.id} categoryColor={'white'} titleColor={'white'} />
                ))}            
            </div>
            <div  className="card w-50 ">
                <div className="card-header">
                    <span>Viu isso?</span>
                </div>
                <div className="card-body d-flex flex-column gap-2">
                    {todasNoticias.map(noticia =>(
                        <NoticiaContent  alignFlex={'start'} noticia={noticia} key={noticia.id} categoryColor={'black'} titleColor={'danger'} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Noticias;