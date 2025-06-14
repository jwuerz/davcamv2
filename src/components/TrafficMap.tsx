import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import { MapPin, Calendar, Clock, AlertCircle, Camera } from 'lucide-react';
import L from 'leaflet';
import { mockCameraLocations, currentWeekSchedule } from '../data/cameraData';

// Fix for default markers in react-leaflet
const icon = L.icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

L.Marker.prototype.options.icon = icon;

// Custom camera icon
const createCameraIcon = (isSelected: boolean = false) => {
  return L.divIcon({
    className: 'custom-camera-marker',
    html: `<div style="
      width: 32px; 
      height: 32px; 
      background-color: ${isSelected ? '#dc2626' : '#ef4444'}; 
      border: 2px solid ${isSelected ? '#fca5a5' : '#ffffff'}; 
      border-radius: 50%; 
      display: flex; 
      align-items: center; 
      justify-content: center;
      box-shadow: ${isSelected ? '0 0 0 4px rgba(239, 68, 68, 0.3)' : '0 2px 8px rgba(0, 0, 0, 0.3)'};
    ">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2">
        <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/>
        <circle cx="12" cy="13" r="3"/>
      </svg>
    </div>`,
    iconSize: [32, 32],
    iconAnchor: [16, 16],
    popupAnchor: [0, -16],
  });
};

// Component to handle map updates
const MapUpdater: React.FC<{ cameras: any[], selectedCamera: string | null }> = ({ cameras }) => {
  const map = useMap();

  useEffect(() => {
    if (cameras.length > 0) {
      const bounds = L.latLngBounds(cameras.map(camera => [camera.lat, camera.lng]));
      map.fitBounds(bounds, { padding: [20, 20] });
    }
  }, [cameras, map]);

  return null;
};

const TrafficMap: React.FC = () => {
  const [selectedCamera, setSelectedCamera] = useState<string | null>(null);
  const [selectedDay, setSelectedDay] = useState<string>('Monday');

  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
  const todaysCameras = mockCameraLocations.filter(camera => camera.day === selectedDay);

  // Davenport, Iowa coordinates
  const davenportCenter: [number, number] = [41.5236, -90.5776];

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2 text-white">
            <MapPin className="w-5 h-5" />
            <h2 className="text-lg font-semibold">Traffic Camera Locations</h2>
          </div>
          <div className="flex items-center space-x-2 text-blue-100">
            <Calendar className="w-4 h-4" />
            <span className="text-sm">{currentWeekSchedule.weekStart} - {currentWeekSchedule.weekEnd}</span>
          </div>
        </div>
      </div>

      <div className="p-6">
        {/* Day Selector */}
        <div className="mb-6">
          <div className="flex flex-wrap gap-2">
            {days.map((day) => (
              <button
                key={day}
                onClick={() => setSelectedDay(day)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                  selectedDay === day
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {day}
              </button>
            ))}
          </div>
        </div>

        {/* Interactive Map */}
        <div className="h-96 mb-6 rounded-lg overflow-hidden border border-gray-200">
          <MapContainer
            center={davenportCenter}
            zoom={12}
            style={{ height: '100%', width: '100%' }}
            scrollWheelZoom={true}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            
            <MapUpdater cameras={todaysCameras} selectedCamera={selectedCamera} />
            
            {todaysCameras.map((camera) => (
              <Marker
                key={camera.id}
                position={[camera.lat, camera.lng]}
                icon={createCameraIcon(selectedCamera === camera.id)}
                eventHandlers={{
                  click: () => {
                    setSelectedCamera(selectedCamera === camera.id ? null : camera.id);
                  },
                }}
              >
                <Popup>
                  <div className="text-center">
                    <div className="flex items-center space-x-2 mb-2">
                      <Camera className="w-4 h-4 text-red-600" />
                      <strong className="text-gray-900">Traffic Camera</strong>
                    </div>
                    <p className="text-sm text-gray-700 mb-1">{camera.address}</p>
                    <p className="text-xs text-gray-500">Active on {camera.day}</p>
                    {camera.active && (
                      <div className="flex items-center justify-center space-x-1 mt-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="text-xs text-green-600 font-medium">Currently Active</span>
                      </div>
                    )}
                  </div>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>

        {/* Camera Locations List */}
        <div className="space-y-3">
          <div className="flex items-center space-x-2 mb-4">
            <Clock className="w-5 h-5 text-gray-600" />
            <h3 className="font-semibold text-gray-900">
              {selectedDay} Locations ({todaysCameras.length})
            </h3>
          </div>

          {todaysCameras.length === 0 ? (
            <div className="text-center py-8">
              <AlertCircle className="w-8 h-8 text-gray-400 mx-auto mb-2" />
              <p className="text-gray-500">No camera locations scheduled for {selectedDay}</p>
            </div>
          ) : (
            <div className="grid gap-3">
              {todaysCameras.map((camera) => (
                <div
                  key={camera.id}
                  className={`p-4 rounded-lg border-2 transition-all duration-200 cursor-pointer ${
                    selectedCamera === camera.id
                      ? 'border-red-500 bg-red-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                  onClick={() => setSelectedCamera(selectedCamera === camera.id ? null : camera.id)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <span className="font-medium text-gray-900">{camera.address}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <span>Active {selectedDay}</span>
                      {camera.active && (
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TrafficMap;