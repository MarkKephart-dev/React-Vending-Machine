import { Link } from "react-router-dom";
import "./AlmondJoy.css"

const AlmondJoy = () => {
    return (
        <div>
            <h3>Almond Joy is the best candy bar!</h3>
            <img src="https://images.cdn.retail.brookshires.com/zoom/b62a578a-d688-4a28-bc65-cb2eec757543.jpeg" alt="Almond Joy" className="almondjoy" />
            <Link to="/" className="link">Go back</Link>
        </div>
    )
}

export default AlmondJoy;