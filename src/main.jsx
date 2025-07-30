import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import Root from './layouts/root';
import Blogs from './pages/Blogs';
import ErrorPage from './pages/ErrorPage.jsx';
import Home from './pages/Home';
import Bookmarks from './pages/Bookmarks';
import Blog from './pages/Blog';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/blogs',
                element: <Blogs />,
                loader: () => fetch('https://dev.to/api/articles/latest?per_page=20&top=7')
            },
            {
                path:'/blog/:id',
                element: <Blog/>,
                loader: ({params}) => 
fetch(`https://dev.to/api/articles/${params.id}`),
            },
            {
                path: '/bookmarks',
                element: <Bookmarks />
            },
        ],
    },
]);

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
);
