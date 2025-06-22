const Nav = () => (
  <nav className="bg-black text-gray-400 text-xl py-3 px-4 sm:px-8 lg:px-16 flex justify-center sticky top-0 z-50">
    <div className="max-w-screen-xl mx-auto px-4">
      <ul className="flex items-center space-x-6">
        {[
          "Store", "Mac", "iPad", "iPhone", "Watch",
          "AirPods", "TV & Home", "Entertainment",
          "Accessories", "Support"
        ].map(item => (
          <li
            key={item}
            className="hover:text-white transition-colors duration-200">
            {item}
          </li>
        ))}
      </ul>
    </div>
  </nav>
);

export default Nav;