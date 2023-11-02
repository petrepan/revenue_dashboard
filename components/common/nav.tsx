"use client";
import { useCreatorData } from "@/services/api";
import { Menu, Transition } from "@headlessui/react";
import Link from "next/link";
import React, { Fragment } from "react";
import Chart from "../assets/chart";
import Chat from "../assets/chat";
import GroupUser from "../assets/group_user";
import Hamburger from "../assets/hamburger";
import Home from "../assets/home";
import Logo from "../assets/logo";
import Money from "../assets/money";
import Notification from "../assets/notification";
import Widgets from "../assets/widgets";

const Nav = () => {
  const { data } = useCreatorData();

  const name_initials = data ? data?.first_name[0] + data?.last_name[0] : "";
  return (
    <div className="fixed top-0 left-0 w-full z-10 bg-white">
      <nav className="flex justify-between items-center mx-4 px-7 mt-4 h-[64px] rounded-[100px] bg-white shadow-[0px_2px_4px_0px_rgba(45,59,67,0.05),0px_2px_6px_0px_rgba(45,59,67,0.06)]">
        <Link className="" href="/">
          <Logo />
        </Link>
        <ul className="flex items-center gap-5 font-semibold text-[#56616B] pl-3">
          <li>
            <Link
              className="flex items-center gap-1 pl-4 pr-[18px] py-2 hover:bg-[#EFF1F6] hover:rounded-[100px] hover:text-pry-dark"
              href="/"
            >
              <Home />
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link
              className="flex items-center gap-1 pl-4 pr-[18px] py-2 hover:bg-[#EFF1F6] hover:rounded-[100px] hover:text-pry-dark"
              href="/"
            >
              <Chart />
              <span>Analytics</span>
            </Link>
          </li>
          <li>
            <Link
              className="flex items-center bg-pry-dark rounded-[100px] text-white gap-1 pl-4 pr-[18px] py-2"
              href="/"
            >
              <Money />
              <span>Revenue</span>
            </Link>
          </li>
          <li>
            <Link
              className="flex items-center gap-1 pl-4 pr-[18px] py-2 hover:bg-[#EFF1F6] hover:rounded-[100px] hover:text-pry-dark"
              href="/"
            >
              <GroupUser />
              <span>CRM</span>
            </Link>
          </li>
          <li>
            <Link
              className="flex items-center gap-1 pl-4 pr-[18px] py-2 hover:bg-[#EFF1F6] hover:rounded-[100px] hover:text-pry-dark"
              href="/"
            >
              <Widgets />
              <span>Apps</span>
            </Link>
          </li>
        </ul>
        <div className="flex items-center gap-2">
          <div className="px-3.5">
            <Notification />
          </div>
          <div className="pr-3.5">
            <Chat />
          </div>
          <Menu as="div" className="relative inline-block text-left">
            <div>
              <Menu.Button className="focus:outline-none">
                <div className="flex items-center gap-2 rounded-[100px] bg-[#EFF1F6] pl-2.5 pr-3 py-1">
                  <div className="flex items-center justify-center text-sm text-white font-semibold h-8 w-8 rounded-full bg-gradient-to-r from-[#5C6670] to-pry-dark">
                    {name_initials}
                  </div>
                  <Hamburger />
                </div>
              </Menu.Button>
            </div>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute -right-6 mt-5 w-96 py-6 px-3 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
                <div className="flex items-center gap-2 mb-7">
                  <div className="flex items-center justify-center text-sm text-white font-semibold h-12 w-12 rounded-full bg-gradient-to-r from-[#5C6670] to-pry-dark">
                    {name_initials}
                  </div>
                  <div>
                    <div className="text-lg font-semibold">
                      {data?.first_name} {data?.last_name}
                    </div>
                    <div className="text-[#56616B] text-sm">{data?.email}</div>
                  </div>
                </div>
                <div className="grid gap-4">
                  <div>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          className={`font-semibold w-full text-left p-3 rounded ${
                            active ? "bg-[#EFF1F6] text-pry-dark" : ""
                          }`}
                        >
                          Settings
                        </button>
                      )}
                    </Menu.Item>
                  </div>
                  <div>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          className={`font-semibold w-full text-left p-3 rounded ${
                            active ? "bg-[#EFF1F6] text-pry-dark" : ""
                          }`}
                        >
                          Purchase History
                        </button>
                      )}
                    </Menu.Item>
                  </div>
                  <div>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          className={`font-semibold w-full text-left p-3 rounded ${
                            active ? "bg-[#EFF1F6] text-pry-dark" : ""
                          }`}
                        >
                          Refer and Earn
                        </button>
                      )}
                    </Menu.Item>
                  </div>
                  <div>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          className={`font-semibold w-full text-left p-3 rounded ${
                            active ? "bg-[#EFF1F6] text-pry-dark" : ""
                          }`}
                        >
                          Integrations
                        </button>
                      )}
                    </Menu.Item>
                  </div>
                  <div>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          className={`font-semibold w-full text-left p-3 rounded ${
                            active ? "bg-[#EFF1F6] text-pry-dark" : ""
                          }`}
                        >
                          Report Bug
                        </button>
                      )}
                    </Menu.Item>
                  </div>
                  <div>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          className={`font-semibold w-full text-left p-3 rounded  ${
                            active ? "bg-[#EFF1F6] text-pry-dark" : ""
                          }`}
                        >
                          Switch Account
                        </button>
                      )}
                    </Menu.Item>
                  </div>
                  <div>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          className={`font-semibold w-full text-left p-3 rounded ${
                            active ? "bg-[#EFF1F6] text-pry-dark" : ""
                          }`}
                        >
                          Sign Out
                        </button>
                      )}
                    </Menu.Item>
                  </div>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
