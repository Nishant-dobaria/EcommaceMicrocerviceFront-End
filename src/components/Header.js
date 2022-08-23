import Image from "next/image";
import {MenuIcon,SearchIcon,ShoppingCartIcon} from "@heroicons/react/outline";
import { signIn, signOut, useSession } from "next-auth/react";

function Header() {
  return (
    <header>
        <div className=" flex items-center bg-amazon_blue p-1 flex-grow py-2">
            <div className="mt-2 flex flex-grow sm:flex-grow-0">
                <h2 className="cursor-pointer text-6xl text-white font-bold p-2">WinkCommerce</h2>
                {/* <Image src="https://links.papareact.com/f90" width={150} height={40} objectFit="contain" className="cursor-pointer"/> */}
            </div>
            <div className="hidden sm:flex items-center rounded-md h-10 bg-yellow-400 hover:bg-yellow-500 flex-grow cursor-pointer">
                <input type="text" className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none"/>
                <SearchIcon className="h-12 p-4"/>
            </div>
            <div className="text-white items-center flex text-xs space-x-6 mx-6 whitespace-nowrap">
                <div onClick={signIn} className="link">
                    <p>Hello Nishant</p>
                    <p className="font-extrabold md:text-sm">Account & List</p>
                </div>
                <div className="link">
                    <p>Returns</p>
                    <p className="font-extrabold md:text-sm">& Orders</p>
                </div>
                <div className="link relative flex items-center">
                    <span className=" absolute top-0 right-0  md:right-10 h-4 w-4 bg-yellow-400 text-center text-black font-bold rounded-full">0</span>
                    <ShoppingCartIcon className="h-10"/>
                    <p className=" hidden md:inline md:text-sm mt-2 font-extrabold">Basket</p>
                </div>
            </div>
        </div>
        <div className="flex items-center bg-amazon_blue-light text-white text-sm space-x-3 p-2 pl-6">
            <p className="link flex items-center">
                <MenuIcon className="h-6 mr-1"/>
                All
            </p>
            <p className="link">Prime Video</p>
            <p className="link">Amazon Business</p>
            <p className="link">Today`s Deals</p>
            <p className="link hidden lg:inline-flex">Electronics</p>
            <p className="link hidden lg:inline-flex">Food & Grocery</p>
            <p className="link hidden lg:inline-flex">Prime</p>
            <p className="link hidden lg:inline-flex">Buy Again</p>
            <p className="link hidden lg:inline-flex">Shopper ToolKit</p>
            <p className="link hidden lg:inline-flex">Health & Personal Care</p>
        </div>
    </header>
  );
}

export default Header;