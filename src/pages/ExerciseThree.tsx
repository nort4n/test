import { useState } from "react";
import { Link } from "react-router-dom";

export default function ExerciseThree() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <div>
        <p>You clicked {count} times.</p>
        <button onClick={() => setCount(count + 1)}>Click me!</button>
      </div>
      <div>
        <Link to="/">back</Link>
      </div>
    </div>
  );
}
