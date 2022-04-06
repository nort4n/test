import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="flex flex-col">
      <div>Home</div>
      <div>
        <Link to="/exercise-one">exercise one </Link>
      </div>
      <div>
        <Link to="/exercise-two">exercise two</Link>
      </div>
      <div>
        <Link to="/exercise-three">exercise three</Link>
      </div>
      <div>
        <Link to="/exercise-four">exercise four</Link>
      </div>
    </div>
  );
}
