import { WeeklySchedule, CameraLocation } from '../types/camera';

export const currentWeekSchedule: WeeklySchedule = {
  weekStart: "June 16th",
  weekEnd: "June 20th",
  schedule: {
    "Monday": ["4600 Eastern Ave", "3100 Harrison"],
    "Tuesday": ["2600 E River Drive", "5700 Northwest Blvd"],
    "Wednesday": ["5500 Pine St", "6700 Division St"],
    "Thursday": [],
    "Friday": ["1900 Brady St", "900 W Central Park Ave"]
  }
};

export const nextWeekSchedule: WeeklySchedule = {
  weekStart: "June 23rd",
  weekEnd: "June 27th",
  schedule: {
    "Monday": ["2600 E River Drive", "4300 Eastern Ave"],
    "Tuesday": ["2800 Jersey Ridge Rd", "3100 Harrison St"],
    "Wednesday": ["1900 Brady St", "5800 Eastern Ave", "5500 Pine St"],
    "Thursday": ["700 W 53rd St", "2100 Marquette St", "4300 Eastern Ave"],
    "Friday": ["1500 E Locust St", "3100 Harrison St"]
  }
};

// Mock geocoded locations - in production, these would come from a geocoding service
export const mockCameraLocations: CameraLocation[] = [
  { id: "1", address: "4600 Eastern Ave", lat: 41.5612, lng: -90.5359, active: true, day: "Monday" },
  { id: "2", address: "3100 Harrison St", lat: 41.5495, lng: -90.5780, active: true, day: "Monday" }, // Added "St" to address
  { id: "3", address: "2600 E River Drive", lat: 41.5209, lng: -90.5401, active: true, day: "Tuesday" },
  { id: "4", address: "5700 Northwest Blvd", lat: 41.5739, lng: -90.6243, active: true, day: "Tuesday" },
  { id: "5", address: "5500 Pine St", lat: 41.5719, lng: -90.5948, active: true, day: "Wednesday" }, // Corrected original placeholder coords
  { id: "6", address: "6700 Division St", lat: 41.5407, lng: -90.6458, active: true, day: "Wednesday" },
  { id: "7", address: "1900 Brady St", lat: 41.5373, lng: -90.5743, active: true, day: "Friday" },
  { id: "8", address: "900 W Central Park Ave", lat: 41.5281, lng: -90.5913, active: true, day: "Friday" }
];