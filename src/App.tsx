import { useMemo } from "react"
import { themeSettings } from "./theme"
import { createTheme } from "@mui/material/styles";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { BrowserRouter,Routes, Route } from "react-router-dom";
import {Box} from "@mui/material";
import Navbar from "./Scenes/Navbar/Navbar";
import Dashboard from "./Scenes/Dashboard/Dashboard";
import Predictions from "./Scenes/Predictions/Predictions";
function App() {
  const theme = useMemo(() => createTheme(themeSettings), []);

  return (
    <BrowserRouter>
    <ThemeProvider theme={theme}>
      <CssBaseline/> 
      {/* CssBaseLine--> Resets the css of the browser to default */}
      <Box width="100%" height="100%" padding="1rem 2rem 4rem 2rem">
        <Navbar /> 
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/predictions" element={<Predictions />} />
        </Routes>
      </Box>
    </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
