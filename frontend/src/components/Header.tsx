const Header = () => {
  return (
    <header role="banner" aria-label="Site header">
      <div className="flex flex-row dark:text-white dark:bg-black gap-4 px-2 py-2 items-center">
        <h1 className="text-xl font-bold" aria-label="DevDen homepage link">
          DevDen
        </h1>
        <nav
          role="navigation"
          aria-label="Main navigation"
          className="flex flex-row gap-4"
        >
          <a href="/home" aria-label="Navigate to Home">
            <h2 className="p-1 hover:bg-gray-950 hover:text-gray-50 dark:hover:bg-gray-200 dark:hover:text-black rounded-md">
              Home
            </h2>
          </a>
          <a href="/about" aria-label="Navigate to About">
            <h2 className="p-1 hover:bg-gray-950 hover:text-gray-50 dark:hover:bg-gray-200 dark:hover:text-black rounded-md">
              About
            </h2>
          </a>
          <a href="/learn" aria-label="Navigate to Learn">
            <h2 className="p-1 hover:bg-gray-950 hover:text-gray-50 dark:hover:bg-gray-200 dark:hover:text-black rounded-md">
              Learn
            </h2>
          </a>
          <a href="/community" aria-label="Navigate to Community">
            <h2 className="p-1 hover:bg-gray-950 hover:text-gray-50 dark:hover:bg-gray-200 dark:hover:text-black rounded-md">
              Community
            </h2>
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
