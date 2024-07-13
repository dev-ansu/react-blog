import { Link } from "react-router-dom";
import "../../../assets/css/noticias-recentes.css"

const NoticiaContent = ({noticia, capa, titleColor,alignFlex,categoryColor })=>{
    return (
        <Link to={`/noticia/${noticia.id}`} key={noticia.id} style={{backgroundImage:`url(${capa})`, backgroundRepeat:"no-repeat", backgroundSize:"cover" }} className="card noticia w-100  h-100">
            <div className={`card noticia-content ${capa ? "capa":""}`}>
                <div className="card-header">
                    <span className={`text-${categoryColor}`}>
                        {noticia.categoria}
                    </span>
                </div>
                <div className={`card-body d-flex justify-content-${alignFlex} align-items-center`}>
                    <h1 className={`fs-4 title text-${titleColor}`}>
                        {noticia.titulo}
                    </h1>
                </div>
            </div>
        </Link>
    )
}

export default NoticiaContent;