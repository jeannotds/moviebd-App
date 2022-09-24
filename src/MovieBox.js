import { useEffect, useState } from "react"
import '../src/moviebox.css'
import { Modal, show, Button } from "react-bootstrap";

const MovieBox = ({title, poster_path, vote_average, release_date, overview}) => {

    const [show , setShow ] = useState(false)

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    const API_IMG="https://image.tmdb.org/t/p/w500/"

    return(
        <div className="blog">
            <div className="film">
                <p className="title">Title : {title}</p>
                <img src={API_IMG+poster_path} />
                <div className="more">View more</div>
                <button onClick={handleShow}>View More</button>
                <Modal show={show} onHide={handleClose} className="content-modale">
                    <Modal.Header closeButton>
                        <Modal.Title></Modal.Title>
                    </Modal.Header>
                    <Modal.Body className="content">
                        <img className="img-modal" src={API_IMG+poster_path} />
                        <h1 className="elements">Title : {title}</h1>
                        <h4 className="elements">ImBD : {vote_average}</h4>
                        <h5 className="elements">Data : {release_date}</h5>
                        <br className="elements"></br>
                        <h6 className="elements" style={{fontSize: '15px'}}>overview</h6>
                        <h6 className="elements" style={{lineHeight : '1.5'}}>{overview}</h6>
                    </Modal.Body>
                    {/* <Modal.Footer>
                        <button style={{backgroundColor: 'black'}} variant="secondary" onClick={handleClose}></button>
                    </Modal.Footer> */}
                </Modal>
            </div>
        </div>
    )
}

export default MovieBox