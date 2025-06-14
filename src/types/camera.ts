export interface CameraLocation {
  id: string;
  address: string;
  lat: number;
  lng: number;
  active: boolean;
  day: string;
}

export interface WeeklySchedule {
  weekStart: string;
  weekEnd: string;
  schedule: {
    [key: string]: string[];
  };
}

export interface NotificationPreferences {
  email: string;
  phone?: string;
  emailNotifications: boolean;
  pushNotifications: boolean;
  notificationTime: string;
}