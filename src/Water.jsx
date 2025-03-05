import { Link } from "react-router-dom";

const Water = () => {
    return (
        <div>
            <h3>Water is the best drink!</h3>
            <img src="https://media0.giphy.com/media/9resXBcrl4LOTRK9KE/giphy.gif?cid=6c09b9520b3cs2hoer593az9jqwwoa2ab5ucu9uxkmfo3fb3&ep=v1_gifs_search&rid=giphy.gif&ct=g" alt="water" className="water" />
            <Link to="/" className="link">Go back</Link>
        </div>
    )
}

export default Water;