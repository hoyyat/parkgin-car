import { createBrowserRouter, RouterProvider} from 'react-router-dom';

import LogIn from './pages/login';

import './App.css';

const routes = createBrowserRouter([
  {
    path: "/log-in",
    element: <LogIn />,
  }
])

function App() {
  return <RouterProvider router={routes} />;
}

export default App;
