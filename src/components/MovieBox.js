import { useEffect } from "react"
import Header from "./Header"
// import '../moviebox.css'
import '../src/moviebox.css'


const MovieBox = ({title, poster_path, vote_average, release_date, overview}) => {

    const API_IMG="https://image.tmdb.org/t/p/w500/"

    return(
        <div className="">
            <div className="">
                <p clas>{title}</p>
                <img src={API_IMG+poster_path} />
                <p>{overview}</p>
            </div>
        </div>
    )
}

export default MovieBox