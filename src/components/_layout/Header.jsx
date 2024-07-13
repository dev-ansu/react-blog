import { useState } from "react";
import "../../assets/css/header.css"
import Logo from "./Logo";
import { useNavigate } from "react-router-dom";

const Header = ()=>{
    const [input, setInput] = useState(null);
    const navigate = useNavigate();

    const handleInput = (e)=>{
        const searchValue = e.target.value;
        if(searchValue){
            setInput(searchValue);
        }
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        setInput('')
        navigate(`/pesquisa/${input}`);
    }
    return(
        <header id="header">
            <div className="container" id="header-content">
                <Logo />
                <div>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group d-flex align-items-center gap-1">
                            <label className="cursor-pointer" onClick={handleSubmit} htmlFor="search"><i className="bi text-white bi-search"></i></label>
                            <input onChange={handleInput} value={input} className="form-control" type="search" id="search" placeholder="Buscar" />
                        </div>
                    </form>
                </div>
            </div>
        </header>
    );
}

export default Header;