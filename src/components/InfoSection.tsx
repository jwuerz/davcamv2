import React from 'react';
import { Shield, AlertTriangle, Camera, Info } from 'lucide-react';

const InfoSection: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex items-center space-x-2 mb-6">
        <Info className="w-5 h-5 text-blue-600" />
        <h2 className="text-lg font-semibold text-gray-900">
          About Traffic Enforcement Cameras
        </h2>
      </div>

      <div className="space-y-6">
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
            <Camera className="w-6 h-6 text-blue-600" />
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Automated Traffic Enforcement (ATE)</h3>
            <p className="text-gray-600 text-sm">
              ATE utilizes cameras in conjunction with sensors to detect and identify vehicles 
              that potentially violate traffic regulations such as posted speed limits or red lights.
            </p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
            <AlertTriangle className="w-6 h-6 text-orange-600" />
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Mobile Camera Locations</h3>
            <p className="text-gray-600 text-sm">
              Camera locations change throughout the week. Stay informed about where enforcement 
              cameras will be deployed to help you drive safely and avoid violations.
            </p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
            <Shield className="w-6 h-6 text-green-600" />
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Safety First</h3>
            <p className="text-gray-600 text-sm">
              The primary goal of traffic enforcement is to improve road safety. 
              Always follow posted speed limits and traffic signals regardless of camera presence.
            </p>
          </div>
        </div>

        <div className="bg-gray-50 rounded-lg p-4 mt-6">
          <p className="text-sm text-gray-600">
            <strong>Official Information:</strong> For the most up-to-date information about 
            traffic enforcement cameras, visit the{' '}
            <a 
              href="https://www.davenportiowa.com/government/departments/police/automated_traffic_enforcement"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 underline"
            >
              Davenport Police Department website
            </a>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;