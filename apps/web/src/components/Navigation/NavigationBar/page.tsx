'use client';

import React from 'react';
// import next from 'next';
// import Image from 'next/image';
import NavigationMenu from '../NavigationMenu/page';
import NavigationSeacrh from '../NavigationSearch/page';
// import NavigationSeacrh from '../NavigationSearch/page';

export default function NavigationBar() {
  return (
    <>
      <nav className="bg-black p-2 ">
        <div className="bg-gray-500 p-2 rounded-md">
          <div className="flex justify-end">
            <NavigationSeacrh />
            <NavigationMenu />
          </div>
        </div>
      </nav>
    </>
  );
}
