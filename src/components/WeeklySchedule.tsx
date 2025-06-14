import React from 'react';
import { Calendar, MapPin, Clock } from 'lucide-react';
import { currentWeekSchedule, nextWeekSchedule } from '../data/cameraData';

const WeeklySchedule: React.FC = () => {
  const schedules = [currentWeekSchedule, nextWeekSchedule];
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

  return (
    <div className="space-y-6">
      {schedules.map((schedule, scheduleIndex) => (
        <div key={scheduleIndex} className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="bg-gradient-to-r from-indigo-600 to-indigo-700 px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2 text-white">
                <Calendar className="w-5 h-5" />
                <h3 className="text-lg font-semibold">
                  {scheduleIndex === 0 ? 'This Week' : 'Next Week'}
                </h3>
              </div>
              <div className="text-indigo-100 text-sm">
                {schedule.weekStart} - {schedule.weekEnd}
              </div>
            </div>
          </div>

          <div className="p-6">
            <div className="grid gap-4">
              {days.map((day) => {
                const locations = schedule.schedule[day] || [];
                const isToday = scheduleIndex === 0 && day === 'Monday'; // Mock today
                
                return (
                  <div
                    key={day}
                    className={`p-4 rounded-lg border-2 transition-all duration-200 ${
                      isToday 
                        ? 'border-indigo-500 bg-indigo-50' 
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-2">
                        <h4 className="font-semibold text-gray-900">{day}</h4>
                        {isToday && (
                          <span className="px-2 py-1 bg-indigo-100 text-indigo-800 text-xs font-medium rounded-full">
                            Today
                          </span>
                        )}
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-gray-500">
                        <MapPin className="w-4 h-4" />
                        <span>{locations.length} location{locations.length !== 1 ? 's' : ''}</span>
                      </div>
                    </div>

                    {locations.length === 0 ? (
                      <div className="text-gray-500 text-sm flex items-center space-x-2">
                        <Clock className="w-4 h-4" />
                        <span>No cameras scheduled</span>
                      </div>
                    ) : (
                      <div className="space-y-2">
                        {locations.map((location, index) => (
                          <div
                            key={index}
                            className="flex items-center space-x-3 p-2 bg-gray-50 rounded-md"
                          >
                            <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                            <span className="text-sm font-medium text-gray-800">{location}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WeeklySchedule;