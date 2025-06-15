export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-green-50">
      {/* Navigation Bar */}
      <div className="w-full flex justify-between items-center py-6 px-10 bg-white shadow-sm">
        <div className="text-2xl font-bold text-green-700 tracking-wide">Landsprout</div>
        <nav className="flex gap-8 items-center">
          <a href="#about" className="text-gray-700 hover:text-green-700">About</a>
          <a href="#how" className="text-gray-700 hover:text-green-700">How it Works</a>
          <a href="#contact" className="text-gray-700 hover:text-green-700">Contact</a>
          <a href="/login" className="ml-6 px-4 py-2 rounded border border-green-700 text-green-700 hover:bg-green-50">Login</a>
          <a href="/login" className="ml-2 px-4 py-2 rounded bg-green-700 text-white hover:bg-green-800">Sign Up</a>
        </nav>
      </div>

      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center py-16 bg-green-50 flex-1">
        <div className="w-full max-w-4xl flex flex-col md:flex-row items-center gap-8">
          <img
            src="/ai-hero.png"
            alt="Landscape transformation"
            className="w-full md:w-1/2 rounded-lg shadow-lg"
          />
          <div className="flex-1 flex flex-col items-center md:items-start">
            <h1 className="text-4xl md:text-5xl font-bold text-green-800 mb-4 text-center md:text-left">
              Transform your yard—visualize your dream landscape before you build.
            </h1>
            <p className="text-lg text-gray-700 mb-8 text-center md:text-left">
              Upload a photo of your yard and preview professional landscaping upgrades in real time.
            </p>
            <a
              href="/login"
              className="px-8 py-3 bg-green-700 text-white rounded shadow hover:bg-green-800 transition"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>

      {/* Feature Highlights */}
      <div className="py-16 bg-white">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="flex flex-col items-center">
            <span className="text-4xl mb-2">📷</span>
            <h3 className="font-bold mb-1">Upload Photo</h3>
            <p className="text-gray-600 text-center text-sm">Start with a photo of your yard or space.</p>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-4xl mb-2">🌳</span>
            <h3 className="font-bold mb-1">Drag & Drop</h3>
            <p className="text-gray-600 text-center text-sm">Easily add and arrange landscaping elements.</p>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-4xl mb-2">🤖</span>
            <h3 className="font-bold mb-1">AI Render</h3>
            <p className="text-gray-600 text-center text-sm">See a photo-realistic preview of your design.</p>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-4xl mb-2">💾</span>
            <h3 className="font-bold mb-1">Save & Share</h3>
            <p className="text-gray-600 text-center text-sm">Save your projects and share with others.</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-6 bg-green-50 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Landsprout. All rights reserved.
      </footer>
    </div>
  );
} 