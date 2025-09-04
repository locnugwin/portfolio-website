import { createRouter, RouterProvider } from "@tanstack/react-router";
import ConstructionBanner from "./components/ConstructionBanner";
import "./index.css"
import { routeTree } from "./routeTree.gen";

const router = createRouter({ routeTree })

function App() {
  return (
    <>
      <ConstructionBanner />
      <RouterProvider router={router} />
    </>
  );
}

export default App;