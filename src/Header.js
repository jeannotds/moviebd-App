import '../src/header.css'


const Header = () => {
    

    return (
        // 341456
        <div className="">
            <h2 className="">MovieDB App</h2>
            <nav className="">
                <input type="text" className='input-text' placeholder="Search..."/>
                <button className="">Search</button>
            </nav>
        </div>
    )
}

export default Header