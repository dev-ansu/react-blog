import { useEffect, useState } from "react";
import { recentes } from "../../../api/recentes";
import NoticiaContent from "./NoticiaContent";

const Recentes = ()=>{
    const [noticias, setNoticias] = useState([]);
    const principal = noticias[0] ? noticias[0]:noticias;

    useEffect(()=>{
      recentes().then((res)=>{
        setNoticias(res);
      })
    },[]);

    return (
        <div id="noticias-recentes" className="card">
            <div className="card-body d-flex gap-4">
                {
                <div className="noticia">
                        <NoticiaContent alignFlex={'center'} noticia={principal} key={principal.id} titleColor={'danger'} />
                </div>
                }
                <div id="noticias" className="card">
                    {noticias.map(noticia =>(
                        <NoticiaContent categoryColor={'white'} capa={noticia.capa} alignFlex={'start'} noticia={noticia} key={noticia.id} titleColor={'white'} />
                    ))}
                </div>

            </div>
        </div>
    );
}

export default Recentes;