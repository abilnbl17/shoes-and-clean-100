import NavigationSeacrh from '../NavigationSearch/page';

export default function NavigationMenu() {
  return (
    <>
      {/* <div className="flex items-center justify-center text-2xl text-black ">
        <NavigationSeacrh />
      </div> */}
      {/* <div className="text-right"> */}
      <nav className="flex justify-end space-x-4 py-4 px-4">
        <div className="flex items-center justify-center text-xl text-black bg-white rounded-xl border  w-40 h-14 p-2 justify-self-end">
          Home
        </div>
        <div className="flex items-center justify-center text-xl text-black bg-white rounded-xl border  w-40 h-14 p-2 justify-self-end">
          About
        </div>
        <div className="flex items-center justify-center text-xl text-black bg-white rounded-xl border  w-40 h-14 p-2 justify-self-end">
          Contact Us
        </div>
        <div className="flex items-center justify-center text-xl text-black bg-white rounded-xl border  w-40 h-14 p-2 justify-self-end">
          Profile
        </div>
      </nav>
      {/* </div> */}
    </>
  );
}
