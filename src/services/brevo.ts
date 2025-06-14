// Brevo (Sendinblue) email service integration
interface BrevoEmailData {
  email: string;
  firstName?: string;
  lastName?: string;
  notificationTime: string;
}

export const subscribeToBrevoList = async (data: BrevoEmailData): Promise<boolean> => {
  try {
    // In production, this would call your backend API endpoint
    // that handles Brevo API integration
    const response = await fetch('/api/brevo/subscribe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error('Failed to subscribe to email notifications');
    }

    return true;
  } catch (error) {
    console.error('Error subscribing to Brevo:', error);
    return false;
  }
};

export const sendWelcomeEmail = async (email: string): Promise<boolean> => {
  try {
    // In production, this would call your backend API endpoint
    const response = await fetch('/api/brevo/welcome-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    });

    return response.ok;
  } catch (error) {
    console.error('Error sending welcome email:', error);
    return false;
  }
};