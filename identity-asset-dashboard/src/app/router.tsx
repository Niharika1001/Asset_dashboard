import { createBrowserRouter } from "react-router-dom";
import AppLayout from "./layout/AppLayout";
import Certificates from "./routes/Certificates";
import SSHKeys from "./routes/SSHKeys";
import CodeSigning from "./routes/CodeSigning";
import AuditLogs from "./routes/AuditLogs";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { index: true, element: <Certificates /> },
      { path: "certificates", element: <Certificates /> },
      { path: "ssh-keys", element: <SSHKeys /> },
      { path: "code-signing", element: <CodeSigning /> },
      { path: "audit-logs", element: <AuditLogs /> },
    ],
  },
]);
