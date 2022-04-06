import { Link } from "react-router-dom";

export default function ExerciseOne() {
  function myClick() {
    alert("Don't click me!");
  }
  return (
    <div>
      <div>
        <button onClick={myClick}>Click me!</button>
      </div>
      <div>
        <Link to="/">back</Link>
      </div>
    </div>
  );
}
