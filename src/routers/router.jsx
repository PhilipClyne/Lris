import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import Home from "../Home/Home";
import Shop from "../shop/Shop";
import About from "../components/About";
import SingleBook from "../shop/SingleBook";
import DashBoardLayout from "../dashboard/DashBoardLayout";
import DashBoard from "../dashboard/DashBoard";
import UploadBook from "../dashboard/UploadBook";
import ManageBook from "../dashboard/ManageBook";
import EditBook from "../dashboard/EditBook";
import SignUp from "../components/Signup";
import Login from "../components/Login";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Logout from "../components/Logout";
import Borrow from "../components/Borrow";
import ManageBorrow from "../dashboard/ManageBorrow";
import Borrow2 from "../components/Borrow2";
import List from "../components/List";
import LibrarianLayout from "../librarianDashboard/LibrarianLayout";
import LibrarianDashboard from "../librarianDashboard/LibrarianDashBoard";
import LibrarianManageBook from "../librarianDashboard/LibrarianManageBook";
import LibrarianManageBorrow from "../librarianDashboard/LibrarianManageBorrow";
import LibrarianUploadBook from "../librarianDashboard/LibrarianUploadBook";
import ManageHistoryBorrow from "../dashboard/ManageHistoryBorrow";
import LibrarianManageHistoryBorrow from "../librarianDashboard/LibrarianManageHistoryBorrow";
const router = createBrowserRouter([
  //Home Page Route
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/borrow",
        element: <Borrow />,
      },
      {
        path: "/list",
        element: <List />,
      },
      {
        path: "/borrowConfirm/:id",
        element: <Borrow2 />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/book/${params.id}`),
      },
      {
        path: "/book/:id",
        element: <SingleBook />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/book/${params.id}`),
      },
    ],
  },
  //Admin DashBoard Route
  {
    path: "/admin/dashboard",
    element: <DashBoardLayout />,
    children: [
      {
        path: "/admin/dashboard",
        element: (
          <PrivateRoute>
            <DashBoard />
          </PrivateRoute>
        ),
      },
      {
        path: "/admin/dashboard/upload",
        element: (
          <PrivateRoute>
            <UploadBook />
          </PrivateRoute>
        ),
      },
      {
        path: "/admin/dashboard/manage",
        element: (
          <PrivateRoute>
            <ManageBook />
          </PrivateRoute>
        ),
      },
      {
        path: "/admin/dashboard/manageBorrow",
        element: (
          <PrivateRoute>
            <ManageBorrow />
          </PrivateRoute>
        ),
      },
      {
        path: "/admin/dashboard/history",
        element: (
          <PrivateRoute>
            <ManageHistoryBorrow />
          </PrivateRoute>
        ),
      },
      {
        path: "/admin/dashboard/edit-books/:id",
        element: (
          <PrivateRoute>
            <EditBook />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/book/${params.id}`),
      },
    ],
  },
  //Librarian routes
  {
    path: "/librarian/dashboard",
    element: <LibrarianLayout />,
    children: [
      {
        path: "/librarian/dashboard",
        element: (
          <PrivateRoute>
            <LibrarianDashboard />
          </PrivateRoute>
        ),
      },
      {
        path: "/librarian/dashboard/manage",
        element: (
          <PrivateRoute>
            <LibrarianManageBook />
          </PrivateRoute>
        ),
      },
      {
        path: "/librarian/dashboard/upload",
        element: (
          <PrivateRoute>
            <LibrarianUploadBook />
          </PrivateRoute>
        ),
      },
      {
        path: "/librarian/dashboard/manageBorrow",
        element: (
          <PrivateRoute>
            <LibrarianManageBorrow />
          </PrivateRoute>
        ),
      },
      {
        path: "/librarian/dashboard/history",
        element: (
          <PrivateRoute>
            <LibrarianManageHistoryBorrow />
          </PrivateRoute>
        ),
      },
    ],
  },
  //sign up login logout
  {
    path: "/sign-up",
    element: <SignUp />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/logout",
    element: <Logout />,
  },
]);

export default router;
