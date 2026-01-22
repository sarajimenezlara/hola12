import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './components/App.tsx'
import List from './components/List.tsx'
import 'bootstrap/dist/css/bootstrap.css';
import HolaReact from "./components/HolaReact.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <List />
    <HolaReact />
  </StrictMode>,
)
