import { createRoot } from "react-dom/client";
import Site from "./App";

const container = document.getElementById("root");
const root = createRoot(container)
root.render(<Site />);