import "./App.css";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./scenes/homePage";
import LoginPage from "./scenes/loginPage";
import ProfilePage from "./scenes/profilePage";
import { createContext, useMemo } from "react";
import { useSelector } from "react-redux";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { themeSettings } from "./theme";

const ThemeContext = createContext("light");

function App() {
  const mode = useSelector((state) => state.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  const isAuth = Boolean(useSelector((state) => state.token));

  const router = createBrowserRouter([
    {
      path: "/",
      element: <LoginPage />,
    },
    {
      path: "/home",
      element: isAuth ? <HomePage /> : <Navigate to='/' />,
    },
    {
      path: "/profile/:userId",
      element: isAuth ? <ProfilePage /> : <Navigate to='/' />,
    },
  ]);
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router}>
        <CssBaseline />
      </RouterProvider>
    </ThemeProvider>
  );
}

export default App;
