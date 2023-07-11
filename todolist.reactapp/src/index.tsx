import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import App from "./components/App/App";

const container = document.getElementById("root");

if (container) {
  const root = createRoot(container);
  root.render(<App />);
} else {
  throw new Error("App root container not found!");
}
