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
  { id: "1", address: "4600 Eastern Ave", lat: 41.5236, lng: -90.5776, active: true, day: "Monday" },
  { id: "2", address: "3100 Harrison", lat: 41.5520, lng: -90.5890, active: true, day: "Monday" },
  { id: "3", address: "2600 E River Drive", lat: 41.5300, lng: -90.5400, active: true, day: "Tuesday" },
  { id: "4", address: "5700 Northwest Blvd", lat: 41.5800, lng: -90.6200, active: true, day: "Tuesday" },
  { id: "5", address: "5500 Pine St", lat: 41.5100, lng: -90.5900, active: true, day: "Wednesday" },
  { id: "6", address: "6700 Division St", lat: 41.5400, lng: -90.6100, active: true, day: "Wednesday" },
  { id: "7", address: "1900 Brady St", lat: 41.5350, lng: -90.5650, active: true, day: "Friday" },
  { id: "8", address: "900 W Central Park Ave", lat: 41.5280, lng: -90.5820, active: true, day: "Friday" }
];