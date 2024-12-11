export default function Footer() {
  return (
    <footer className="border-t border-gray-800 bg-gray-900 py-8">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <h3 className="mb-4 text-lg font-semibold text-blue-500">ZeroLoan</h3>
            <p className="text-sm text-gray-400">
              Advanced AI trading system for modern investors.
            </p>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase text-gray-400">
              Products
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-gray-300 hover:text-blue-500">
                  AI Trading
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-blue-500">
                  Portfolio Management
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-blue-500">
                  Risk Analysis
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase text-gray-400">
              Resources
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-gray-300 hover:text-blue-500">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-blue-500">
                  API
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-blue-500">
                  Support
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase text-gray-400">
              Company
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-gray-300 hover:text-blue-500">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-blue-500">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-blue-500">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} ZeroLoan. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
