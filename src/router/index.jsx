import { BrowserRouter, Route, Routes } from "react-router";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { Logout } from "../pages/Logout";
import { Feed } from "../pages/Feed";
import { ProtectedRoute } from "../components/ProtectedRoute";
import { BlogPost } from "../pages/BlogPost";
import { AuthLayout } from "../layouts/Auth";
import { AppLayout } from "../layouts/App";
import { NotFound } from "../pages/NotFound";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth" element={<AuthLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="logout" element={<Logout />} />
        </Route>

        <Route path="/" element={<AppLayout />}>
          <Route
            path=""
            element={
              <ProtectedRoute>
                <Feed />
              </ProtectedRoute>
            }
          />
          <Route
            path="blog-post/:slug"
            element={
              <ProtectedRoute>
                <BlogPost />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
