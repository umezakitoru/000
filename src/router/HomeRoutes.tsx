import { Home } from "../components/pages/Home";
import { Home2 } from "../components/pages/Home2";
import { UserManagement } from "../components//pages/UserManagement";
import { Setting } from "../components//pages/Setting";
import { Page404 } from "../components//pages/Page404";

export const homeRoutes = [
  {
    path: "/",
    exact: true,
    children: <Home />
  },
  {
    path: "/aaa",
    exact: false,
    chldren: <Home2 />
  },
  {
    path: "/user_management",
    exact: false,
    chldren: <UserManagement />
  },
  {
    path: "/setting",
    exact: false,
    chldren: <Setting />
  },
  {
    path: "*",
    exact: false,
    chldren: <Page404 />
  }
];
