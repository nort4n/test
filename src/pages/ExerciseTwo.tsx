import { Link } from "react-router-dom";
import Button from "../components/Button";

export default function ExerciseTwo() {
  return (
    <div>
      <div>
        <Button message="alert 1"></Button>
        <Button message="alert 2"></Button>
        <Button message="alert 3"></Button>
      </div>
      <div>
        <Link to="/">back</Link>
      </div>
    </div>
  );
}
