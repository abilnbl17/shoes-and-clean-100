import React from 'react';
import { Icon } from '@iconify/react';
import searchIcon from '@iconify/icons-mdi/magnify';

export default function NavigationSeacrh() {
  return (
    <nav className="flex justify-center p-4">
      <div className="flex items-center bg-white rounded-2xl shadow-lg text-xl focus-within:ring-2 focus-within:border-blue-300">
        <Icon
          icon={searchIcon}
          style={{ fontSize: '30px', color: '#000', marginLeft: '10px' }}
        />
        <input
          type="text"
          placeholder="Search"
          value=""
          className="flex justify-center p-2 px-2 rounded-2xl bg-white text-black focus-within:outline-none"
        />
      </div>
    </nav>
  );
}
