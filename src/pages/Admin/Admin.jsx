import React, { useEffect } from "react";
import Sidebar from "../../scenes/global/Sidebar";
import Topbar from "../../scenes/global/Topbar";

const Admin = () => {

  useEffect(() => {
    document.title = "Nexus IT School - Admin Dashboard";
  }, []);

  return (
    <div className="admin">
      <Sidebar />
      <div className="content">
        <Topbar />
      </div>
    </div>
  );
};

export default Admin;
