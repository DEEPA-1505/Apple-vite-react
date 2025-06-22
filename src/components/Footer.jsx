const Footer = () => {
  const footerSections = [
    {
      title: 'Shop and Learn',
      links: ['Store', 'Mac', 'iPad', 'iPhone', 'Watch', 'AirPods', 'TV & Home', 'AirTag', 'Accessories', 'Gift Cards'],
    },
    {
      title: 'Services',
      links: ['Apple Music', 'Apple TV+', 'Apple Arcade', 'iCloud', 'Apple Pay', 'Apple Books', 'Apple Podcasts', 'App Store'],
    },
    {
      title: 'Apple Store',
      links: ['Find a Store', 'Genius Bar', 'Today at Apple', 'Apple Camp', 'Apple Retail App', 'Financing', 'Apple Trade In', 'Order Status', 'Shopping Help'],
    },
    {
      title: 'Apple Values',
      links: ['Accessibility', 'Education', 'Environment', 'Inclusion and Diversity', 'Privacy', 'Supplier Responsibility'],
    },
    {
      title: 'About Apple',
      links: ['Newsroom', 'Apple Leadership', 'Career Opportunities', 'Investors', 'Ethics & Compliance', 'Events', 'Contact Apple'],
    },
  ];

  return (
    <footer className="bg-gray-100 text-gray-600 text-m py-8 px-4 sm:px-8 lg:px-16 border-t border-gray-300">
      <div className="max-w-7xl mx-auto">
      
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-8">
          {footerSections.map((section, index) => (
            <div key={index}>
              <h4 className="font-semibold text-gray-800 mb-2">{section.title}</h4>
              <ul>
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex} className="mb-1">
                    <a href="#" className="hover:underline transition-colors duration-200">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-300 pt-4 flex flex-col md:flex-row justify-between items-center text-gray-500">
          <p>
            Copyright © 2025 Apple Inc. All rights reserved.
          </p>
          
        </div>
      </div>
    </footer>
  );
};
export default Footer;