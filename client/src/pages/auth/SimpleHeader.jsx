import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCartIcon, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button'; // or your button component

const SimpleHeader = () => {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-white shadow-sm">
      <div className="flex h-16 items-center justify-between px-4 md:px-6">
        {/* Logo */}
        <Link to="/shop/home" className="flex items-center gap-2">
          <ShoppingCartIcon className="h-6 w-6" />
          <span className="font-bold text-xl">SmartKart</span>
        </Link>

        {/* Right-side buttons */}
        <div className="flex gap-2">
          <Link to="/auth/login">
            <Button variant="outline">Login</Button>
          </Link>
          <Link to="/auth/register">
            <Button>Register</Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default SimpleHeader;
