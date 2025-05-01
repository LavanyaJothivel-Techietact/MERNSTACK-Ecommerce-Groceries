import React from 'react';
import SimpleHeader from './SimpleHeader';
import Footer from './Footer';

const StaticPageLayout = ({ children }) => {
  return (
    <div className="flex flex-col overflow-hidden bg-white min-h-screen">
      <SimpleHeader />
      <main className="container mx-auto px-4 py-8 flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default StaticPageLayout;
