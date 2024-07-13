const url = "https://sujeitoprogramador.com/rn-api/?api=posts";

const api = async()=>{
    const response = await fetch(url);
    const noticias = await response.json();
    return noticias;        
}

export const recentes = async()=>{
    const noticias = await api();
    return noticias.slice(0, 3);
}

export const noticias = async()=>{
    const noticias = await api();
    return noticias;
}

export const noticia = async(id)=>{
    const noticias = await api();
    return noticias.filter(noticia => noticia.id == id)[0];
}

export const noticiaByTitle = async(title)=>{
    const noticias = await api();
    return noticias.filter(noticia => {
        if(String(noticia.titulo).normalize('NFD').toLowerCase().includes(String(title).normalize('NFD').toLowerCase())){
            return noticia;
        }
    });
}