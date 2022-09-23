import { useEffect } from "react"
import Header from "./Header"
// import '../moviebox.css'
import '../src/moviebox.css'


const MovieBox = ({title, poster_path, vote_average, release_date, overview}) => {

    const API_IMG="https://image.tmdb.org/t/p/w500/"

    return(
        <div className="blog">
            <div className="film">
                <p className="title">Title : {title}</p>
                <img src={API_IMG+poster_path} />
                {/* <p>{overview}</p> */}
                <div className="more">View more</div>
            </div>
        </div>
    )
}

export default MovieBox