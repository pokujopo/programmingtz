const API_BASE = (import.meta.env.VITE_API_BASE_URL || 'https://jboycreator56.ct.ws').replace(/\/$/, '');
const MEDIA_BASE = (import.meta.env.VITE_MEDIA_BASE_URL || API_BASE).replace(/\/$/, '');

export function getProjectImageUrl(image) {
  if (!image) return '';
  if (/^https?:\/\//i.test(image)) return image;
  return `${MEDIA_BASE}/project_image/${image}`;
}

export function normalizeProjectLink(link) {
  if (!link) return '#';
  return /^https?:\/\//i.test(link) ? link : `https://${link}`;
}

export async function fetchProjects() {
  const response = await fetch(`${API_BASE}/api/get_project`);
  if (!response.ok) {
    throw new Error('Failed to fetch projects');
  }

  const data = await response.json();
  return Array.isArray(data?.all_project) ? data.all_project : [];
}

export { API_BASE, MEDIA_BASE };
