import { RouterProvider } from "react-router-dom";
import AppLayout from "./src/AppLayout";
import ReactDOM from "react-dom/client";
import { appRouter } from "./src/AppLayout";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <RouterProvider router={appRouter}>
    <AppLayout />
  </RouterProvider>
);
