/**
 * Central API configurations and base endpoints.
 * This is used across the application for consistent URL imports.
 */
export const API_BASE_URL = (() => {
  if (typeof window !== 'undefined') {
    const hostname = window.location.hostname;
    // If running on a any deployment or external domain, bypass the proxy and hit the Railway server directly
    if (hostname.includes('vercel.app') || (hostname !== 'localhost' && hostname !== '127.0.0.1' && !hostname.includes('.run.app'))) {
      return 'https://dascon-backend-production.up.railway.app/api';
    }
  }
  return '/api';
})();

export const AUTH_ENDPOINTS = {
  LOGIN: `${API_BASE_URL}/auth/login`,
  REGISTER: `${API_BASE_URL}/admin/register-user`,
  USERS: `${API_BASE_URL}/admin/users`,
};
