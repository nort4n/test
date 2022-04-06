import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ExerciseOne from "./pages/ExerciseOne";
import ExerciseTwo from "./pages/ExerciseTwo";
import ExerciseThree from "./pages/ExerciseThree";
import ExerciseFour from "./pages/ExerciseFour";

function App() {
  return (
    <div>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />;
          <Route path="/exercise-one" element={<ExerciseOne />} />;
          <Route path="/exercise-two" element={<ExerciseTwo />} />;
          <Route path="/exercise-three" element={<ExerciseThree />} />;
          <Route path="/exercise-four" element={<ExerciseFour />} />;
        </Routes>
      </main>
    </div>
  );
}

export default App;
