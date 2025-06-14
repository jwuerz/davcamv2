import React from 'react';
import Header from './components/Header';
import TrafficMap from './components/TrafficMap';
import NotificationSignup from './components/NotificationSignup';
import WeeklySchedule from './components/WeeklySchedule';
import InfoSection from './components/InfoSection';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section with Map */}
        <div className="grid lg:grid-cols-3 gap-8 mb-8">
          <div className="lg:col-span-2">
            <TrafficMap />
          </div>
          <div className="space-y-6">
            <NotificationSignup />
            <InfoSection />
          </div>
        </div>

        {/* Weekly Schedule Section */}
        <div className="mb-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Weekly Camera Schedule
            </h2>
            <p className="text-gray-600">
              View current and upcoming traffic camera deployment schedules
            </p>
          </div>
          <WeeklySchedule />
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">
                Davenport Traffic Camera Alerts
              </h3>
              <p className="text-gray-600 text-sm">
                Stay informed about traffic enforcement camera locations in Davenport, Iowa. 
                Drive safely and avoid violations with real-time alerts.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Resources</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a 
                    href="https://www.davenportiowa.com/government/departments/police/automated_traffic_enforcement"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    Official ATE Information
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    Traffic Safety Tips
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    Disclaimer
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-200 mt-8 pt-8 text-center text-sm text-gray-500">
            <p>
              &copy; 2024 Davenport Traffic Camera Alerts. Not affiliated with the City of Davenport.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;