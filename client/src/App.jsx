import CanvasModel from "./canvas";
import Customizer from "./pages/Customizer";
import Home from "./pages/Home";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <main className="app transition-all ease-in">
      <Home />
      <CanvasModel />
      <Customizer />
      <LandingPage />
    </main>
  );
}

export default App;
