import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from '../layouts/Root'
import ErrorPage from '../pages/ErrorPage.jsx';
import Home from '../pages/Home.jsx'
import Blogs from '../pages/Blogs.jsx'
import Blog from '../pages/Blog.jsx'
import Bookmarks from '../pages/Bookmarks';
import Content from '../components/Content';
import Author from '../components/Author';



const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home/>,
            },
            {
                path: '/blogs',
                element: <Blogs/>,
                loader: () =>
                    fetch('https://dev.to/api/articles/latest?per_page=20&top=7'),
            },
            {
                path: '/blog/:id',
                element: <Blog />,
                loader: ({ params }) =>
                    fetch(`https://dev.to/api/articles/${params.id}`),
                children: [
                    {
                        index: true,
                        element: <Content/>,
                        loader: ({ params }) => fetch(`https://dev.to/api/articles/${params.id}`)
                    },
                    {
                        path: 'author',
                        element: <Author/>,
                        loader: ({ params }) => fetch(`https://dev.to/api/articles/${params.id}`)
                    }
                ]
            },
            {
                path: '/bookmarks',
                element: <Bookmarks />,
            },
        ],
    },
]);


export default router;