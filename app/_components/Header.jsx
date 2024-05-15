"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  ArrowDown,
  LayoutGrid,
  LogIn,
  Menu,
  Search,
  ShoppingCart,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { navItem } from "../constants";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// MobileMenu component for rendering mobile menu items
function MobileMenu({ isOpen, toggleMenu }) {
  return (
    <>
      {isOpen && (
        /* Conditional rendering based on isOpen state */
        <ul className="absolute mx-auto right-0 left-0 bg-white text-primary text-lg text-center shadow-lg  ">
          {navItem.map((item) => (
            <li
              className="cursor-pointer pt-2 hover:text-xl hover:bg-white hover:text-primary hover:border hover:px-2"
              key={item.id}
            >
              <a href={item.link}>{item.title}</a>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

// Header component
function Header() {
  // State to manage mobile menu visibility
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle mobile menu visibility
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="inset-x-0 top-0 z-50">
      <nav className="flex items-center justify-between shadow-lg px-4 h-20 bg-white">
        {" "}
        {/* Navigation container */}
        <div className="flex items-center cursor-pointer">
          <Image src="/logo.png" alt="logo" width={75} height={50} />{" "}
          <span className="ml-2 text-lg font-semibold text-gray-800">
            Farm 25
          </span>
        </div>
        {/* Desktop navigation menu */}
        <ul className="hidden lg:flex gap-6">
          {navItem.map((item) => (
            <li
              className="text-lg cursor-pointer hover:font-bold hover:underline hover:underline-offset-4 hover:decoration-4 hover:decoration-primary"
              key={item.id}
            >
              <a href={item.link}>{item.title}</a>
            </li>
          ))}
        </ul>
        {/* Mobile menu toggle*/}
        <div className="flex items-center gap-6">
          <div className="flex gap-2 items-center">
            <div>
              {!isOpen ? (
                <Menu
                  className="lg:hidden h-6 w-6 cursor-pointer text-secondary hover:text-gray-900"
                  onClick={toggleMenu}
                />
              ) : (
                <X
                  className="lg:hidden h-6 w-6 cursor-pointer text-secondary hover:text-gray-900"
                  onClick={toggleMenu}
                />
              )}
            </div>
            {/* Category component for Mobile view */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <div className="lg:hidden">
                  <LayoutGrid className="h-6 w-6 cursor-pointer text-secondary hover:text-gray-900" />
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-primary text-white">
                <DropdownMenuLabel>Browse Categories</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Production</DropdownMenuItem>
                <DropdownMenuItem>Aggregation</DropdownMenuItem>
                <DropdownMenuItem>Manufacturing</DropdownMenuItem>
                <DropdownMenuItem>Procurement</DropdownMenuItem>
                <DropdownMenuItem>Distribution</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            {/* Search component for Mobile view */}
            <div className="md:hidden">
              <Search className="h-6 w-6 cursor-pointer text-secondary hover:text-gray-900" />
            </div>
            {/* Search component for Desktop view */}
            <div className="hidden md:flex gap-3 items-center border rounded-full p-2 px-3">
              <Search className="h-6 w-6 cursor-pointer text-secondary hover:text-gray-900" />
              <input
                type="text"
                placeholder="Search..."
                className="outline-none w-1/2 md:w-1/3 lg:w-1/4"
              />
            </div>
            {/* Shopping Cart component */}
            <div className="flex relative cursor-pointer">
              <ShoppingCart className="h-6 w-6 text-secodary hover:text-gray-900" />
              <span className="absolute h-4 w-4 top-0 right-0 flex items-center justify-center bg-red-500 text-white rounded-full text-xs">
                2
              </span>
            </div>
          </div>
          {/* Login icon for mobile */}
          <div className="flex md:hidden">
            <LogIn className="md:hidden h-6 w-6 cursor-pointer text-secondary hover:text-gray-900" />
          </div>
          {/* Login and Register buttons for Desktop view */}
          <div className="hidden md:flex gap-2">
            <Button>Login</Button>
            <Button
              className="outline-primary outline-4 hover:bg-primary hover:text-white"
              variant="outline"
            >
              Register
            </Button>
          </div>
        </div>
      </nav>
      {/* Display the nav links on mobile */}
      <MobileMenu isOpen={isOpen} toggleMenu={toggleMenu} />
    </header>
  );
}

export default Header;
