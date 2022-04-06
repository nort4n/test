import { Link } from "react-router-dom";

const array: Array<string> = ["dog", "cat", "chicken", "cow", "sheep", "horse"];
const mappedArray = array.map((elem) => {
  return <li>{elem}</li>;
});

export default function ExerciseFour() {
  return (
    <div>
      <ul>{mappedArray}</ul>
      <div>
        <Link to="/">back</Link>
      </div>
    </div>
  );
}
