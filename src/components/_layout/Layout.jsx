import Footer from "./Footer";
import Header from "./Header";

const Layout = (props)=>{
    return (
    <>
    <div className='container-fluid gap-2 d-flex flex-column'>
        <Header />
        <div className='container'>
            {props.children}
        </div>
        <Footer />
      </div>
    </>
    )
}

export default Layout;