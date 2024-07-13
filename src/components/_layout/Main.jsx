import Noticias from "../_layout/Noticias/Noticias";
import Recentes from "../_layout/Noticias/Recentes";

const Main = (props)=>{
    return (
        <main>
            <Recentes />
            <Noticias />
        </main>
    )
}

export default Main;