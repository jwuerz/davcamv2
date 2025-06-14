// Firebase configuration and services
import { initializeApp } from 'firebase/app';
import { getMessaging, getToken, onMessage } from 'firebase/messaging';
import { getFirestore, collection, addDoc } from 'firebase/firestore';

const firebaseConfig = {
  // These would be your actual Firebase config values
  apiKey: process.env.VITE_FIREBASE_API_KEY,
  authDomain: process.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: process.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.VITE_FIREBASE_APP_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
export const messaging = getMessaging(app);
export const firestore = getFirestore(app);

// Request notification permission and get token
export const requestNotificationPermission = async (): Promise<string | null> => {
  try {
    const permission = await Notification.requestPermission();
    if (permission === 'granted') {
      const token = await getToken(messaging, {
        vapidKey: process.env.VITE_FIREBASE_VAPID_KEY
      });
      return token;
    }
    return null;
  } catch (error) {
    console.error('Error getting notification permission:', error);
    return null;
  }
};

// Listen for foreground messages
export const onMessageListener = () =>
  new Promise((resolve) => {
    onMessage(messaging, (payload) => {
      resolve(payload);
    });
  });

// Save notification subscription to Firestore
export const saveNotificationSubscription = async (data: {
  email: string;
  phone?: string;
  emailNotifications: boolean;
  pushNotifications: boolean;
  notificationTime: string;
  fcmToken?: string;
}) => {
  try {
    const docRef = await addDoc(collection(firestore, 'notifications'), {
      ...data,
      createdAt: new Date(),
      active: true
    });
    return docRef.id;
  } catch (error) {
    console.error('Error saving notification subscription:', error);
    throw error;
  }
};