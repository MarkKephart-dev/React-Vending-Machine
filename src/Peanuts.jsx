import { Link } from "react-router-dom";
import "./Peanuts.css"

const Peanuts = () => {
    return (
        <div>
            <h3>Peanuts are the best snack!</h3>
            <img src="https://images.unsplash.com/photo-1546545584-c03ac781caaf?q=80&w=1523&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="peanuts" className="peanuts" />
            <Link to="/" className="link">Go back</Link>
        </div>
    )
}

export default Peanuts;