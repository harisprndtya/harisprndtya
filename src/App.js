import React from 'react';
// import logo from './assets/img/haris-logo.png'; // Update the path as needed

const App = () => {
  return (
    <div className="relative" x-data="{ mobileMenu: false }" class="{ 'overflow-hidden max-h-screen': mobileMenu }">
        asdasdasda
      <div id="main" className="relative">
        <div
          x-data={{
            triggerNavItem(id) {
              $scroll(id);
            },
            triggerMobileNavItem(id) {
              mobileMenu = false;
              this.triggerNavItem(id);
            },
          }}
        >
          <div
            className={[
              'w-full',
              'py-2',
              'sm:py-2',
              mobileMenu ? '' : 'sticky',
              'z-[999]',
              'top-0',
              'bg-[#493698]',
            ].join(' ')}
          >
            <div className="container flex items-center justify-between">
              <div className="flex justify-start gap-5">
                <div className="rounded-full border-4 sm:border-2 lg:border-2 border-primary shadow-xl overflow-hidden">
                  <a href="/">
                    {/* <img
                      src={logo}
                      className="h-8 lg:h-10 md:h-8 sm:h-10 w-8 lg:w-10 md:w-8 sm:w-12"
                      alt="logo image"
                    /> */}
                  </a>
                </div>
                <h1 className="text-center flex items-center font-header text-white sm:text-left text-xl sm:text-2xl md:text-3xl lg:text-xl">
                  Haris Prananditya
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
