import "../../assets/css/footer.css"
import Logo from "./Logo";

const Footer = ()=>{
    return(
        <footer id="footer">
            <div className="container text-white d-flex h-100" id="footer-content">
                <div className="d-flex flex-column gap-2">
                    <Logo />
                    <span>Direitos reservados a Blog1</span>
                </div>
                <div className="d-flex justify-content-end gap-2 align-items-end">
                    <span>princípios editoriais</span>
                    <span>política de privacidade</span>
                    <span>anuncie conosco</span>
                </div>
            </div>
        </footer>
    );
}

export default Footer;