import React from "react";
import { Sidebar } from "flowbite-react";
import { BiBuoy } from "react-icons/bi";
import {
  HiArrowSmRight,
  HiChartPie,
  HiInbox,
  HiOutlineCloudUpload,
  HiShoppingBag,
  HiTable,
  HiUser,
  HiViewBoards,
} from "react-icons/hi";
import userImg from "../assets/profile.jpg";

const LibrarianDashboardSidebar = () => {
  return (
    <Sidebar aria-label="Sidebar with content separator example">
      <Sidebar.Logo href="#" img={userImg} imgAlt="Flowbite logo">
        <p>Flowbite</p>
      </Sidebar.Logo>
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="/librarian/dashboard" icon={HiChartPie}>
            Dashboard
          </Sidebar.Item>
          <Sidebar.Item
            href="/librarian/dashboard/upload"
            icon={HiOutlineCloudUpload}
          >
            Upload Book
          </Sidebar.Item>

          <Sidebar.Item href="/librarian/dashboard/manage" icon={HiUser}>
            All Product
          </Sidebar.Item>
          <Sidebar.Item href="/librarian/dashboard/manageBorrow" icon={HiUser}>
            Users Borrow List
          </Sidebar.Item>

          <Sidebar.Item
            href="/librarian/dashboard/history"
            icon={HiArrowSmRight}
          >
            History Borrowed Book
          </Sidebar.Item>
          <Sidebar.Item href="/logout" icon={HiTable}>
            Log Out
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
};

export default LibrarianDashboardSidebar;
