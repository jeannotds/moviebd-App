import '../src/header.css'


const Header = () => {
    

    return (
        // 341456
        <div className="header">
            <h2 className="title-header">MovieDB App</h2>
            <nav className="nav">
                <input type="text" className='input-text' placeholder="Search..."/>
                <button className="btn">Search</button>
            </nav>
        </div>
    )
}

export default Header