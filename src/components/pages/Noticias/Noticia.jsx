import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { noticia, noticias } from "../../../api/recentes";
import "./style.css";
import NoticiaContent from "../../_layout/Noticias/NoticiaContent";

const Noticia = ()=>{

    const [filteredNoticia, setFilteredNoticia] = useState({});
    const [todasNoticias, setTodasNoticias] = useState([]);
    const params = useParams();

    useEffect(()=>{

        noticia(params.id).then((res)=>{
            setFilteredNoticia(res);
        });

        noticias().then((res)=>{
            setTodasNoticias(res);
        });
        window.scrollTo(0,0)
    },[params.id]);
    
    return(
        <div id="leitor" className="d-flex flex-column justify-content-start">
            <div className="d-flex gap-2 flex-column">
                <h1 className="fs-1">
                    {filteredNoticia.titulo}
                </h1>
                <span className="fs-6 subtitulo">
                    {filteredNoticia.subtitulo}
                </span>
                {
                filteredNoticia.categoria ?
                <span>
                    Categoria: {filteredNoticia.categoria}
                </span>:''
                }
            </div>
            {filteredNoticia.titulo ? 

            <div className="mt-2 content">
                <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos corrupti tempore esse, porro ea fugit? Culpa sed, iste assumenda unde laborum ipsa, doloremque facere asperiores tempore totam iure maxime quas.                
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos corrupti tempore esse, porro ea fugit? Culpa sed, iste assumenda unde laborum ipsa, doloremque facere asperiores tempore totam iure maxime quas.                
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos corrupti tempore esse, porro ea fugit? Culpa sed, iste assumenda unde laborum ipsa, doloremque facere asperiores tempore totam iure maxime quas.                
                </p>
                <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos corrupti tempore esse, porro ea fugit? Culpa sed, iste assumenda unde laborum ipsa, doloremque facere asperiores tempore totam iure maxime quas.                
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos corrupti tempore esse, porro ea fugit? Culpa sed, iste assumenda unde laborum ipsa, doloremque facere asperiores tempore totam iure maxime quas.                
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos corrupti tempore esse, porro ea fugit? Culpa sed, iste assumenda unde laborum ipsa, doloremque facere asperiores tempore totam iure maxime quas.                
                </p>
                <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos corrupti tempore esse, porro ea fugit? Culpa sed, iste assumenda unde laborum ipsa, doloremque facere asperiores tempore totam iure maxime quas.                
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos corrupti tempore esse, porro ea fugit? Culpa sed, iste assumenda unde laborum ipsa, doloremque facere asperiores tempore totam iure maxime quas.                
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos corrupti tempore esse, porro ea fugit? Culpa sed, iste assumenda unde laborum ipsa, doloremque facere asperiores tempore totam iure maxime quas.                
                </p>
                <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos corrupti tempore esse, porro ea fugit? Culpa sed, iste assumenda unde laborum ipsa, doloremque facere asperiores tempore totam iure maxime quas.                
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos corrupti tempore esse, porro ea fugit? Culpa sed, iste assumenda unde laborum ipsa, doloremque facere asperiores tempore totam iure maxime quas.                
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos corrupti tempore esse, porro ea fugit? Culpa sed, iste assumenda unde laborum ipsa, doloremque facere asperiores tempore totam iure maxime quas.                
                </p>
                
                <div className="card">
                    <div className="card-header">
                        <span><i class="bi bi-graph-up-arrow"></i> Mais lidas</span>
                        <div className="card-body d-flex flex-column gap-2">
                        {todasNoticias.map(noticia =>(
                            <NoticiaContent  alignFlex={'start'} noticia={noticia} key={noticia.id} categoryColor={'black'} titleColor={'danger'} />
                        ))}
                    </div>
                    </div>
                </div>
                                
            </div>
            :''}
            
        </div>
    )
}

export default Noticia;