import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { createTheme, NextUIProvider} from "@nextui-org/react"

// 2. Call `createTheme` and pass your custom values
const theme = createTheme({
  type: "dark", // it could be "light" or "dark"
  theme: {
    colors: {
 
    },
    space: {},
    fonts: {}
  }
})
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <NextUIProvider theme={theme}>
      <App />
    </NextUIProvider>
  </React.StrictMode>
);