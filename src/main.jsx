import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Provider } from "react-redux";
import store from "./store/index";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import ErrorPage from "./error-page";
import HomePage from "./pages/HomePage";
import ProgammingPage from "./pages/ProgrammingPage";
import CovidPage from "./pages/CovidPage";
import SavedNewsPage from "./pages/SavedPage";
import SearchPage from './pages/SearchPage';
import DetailPage from './pages/DetailPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/programming",
    element: <ProgammingPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/covid-19",
    element: <CovidPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/saved/",
    element: <SavedNewsPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/search/:q",
    element: <SearchPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/:id",
    element: <DetailPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/covid-19/:id",
    element: <DetailPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/programming/:id",
    element: <DetailPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/saved/:id",
    element: <DetailPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/search/:q/:id",
    element: <DetailPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/search",
    element: <Navigate to="/" />
  }
  
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)
