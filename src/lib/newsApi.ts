/**
 * News API Client for Ndomba LMS Integration
 * Fetches news articles from the Ndomba LMS headless CMS API
 */
const BASE_API = import.meta.env.VITE_BASE_API_URL  || 'http://localhost:3000';
const API_URL = `${BASE_API}/api/news`
const API_KEY = import.meta.env.VITE_API_KEY || '';

export interface NewsCategory {
  category_id: number;
  category_key: string;
  label: string;
  description: string | null;
  color: string;
  sort_order: number;
  is_active: boolean;
}

export interface NewsArticle {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImage: string | null;
  publishedDate: string | null;
  author: string;
  category: {
    id: number;
    key: string;
    label: string;
    color: string;
  } | null;
  source: {
    name: string;
    url: string | null;
  } | null;
  tags: Array<{
    id: number;
    name: string;
    slug: string;
  }>;
  images: Array<{
    id: number;
    url: string;
    caption: string | null;
    alt: string | null;
  }>;
  stats: {
    views: number;
    featured: boolean;
  };
  dates: {
    created: string;
    published: string | null;
  };
}

export interface NewsResponse {
  data: NewsArticle[];
  pagination: {
    total: number;
    limit: number;
    offset: number;
    hasMore: boolean;
  };
}

export interface SingleNewsResponse {
  article: NewsArticle;
}

export interface CategoriesResponse {
  categories: NewsCategory[];
}

/**
 * Fetch news articles with optional filters
 */
export async function fetchNews(params?: {
  limit?: number;
  offset?: number;
  category?: string;
  featured?: boolean;
  search?: string;
}): Promise<NewsResponse> {
  const query = new URLSearchParams();
  
  if (params?.limit) query.append('limit', params.limit.toString());
  if (params?.offset) query.append('offset', params.offset.toString());
  if (params?.category) query.append('category', params.category);
  if (params?.featured !== undefined) query.append('featured', params.featured.toString());
  if (params?.search) query.append('search', params.search);

  const url = `${API_URL}?${query.toString()}`;
  
  const headers: HeadersInit = {
    'Content-Type': 'application/json',
  };
  
  if (API_KEY) {
    headers['X-API-Key'] = API_KEY;
  }

  const response = await fetch(url, { headers });

  if (!response.ok) {
    const error = await response.json().catch(() => ({ error: 'Failed to fetch news' }));
    throw new Error(error.error || `HTTP ${response.status}: ${response.statusText}`);
  }

  return response.json();
}

/**
 * Fetch a single news article by slug
 */
export async function fetchNewsBySlug(slug: string): Promise<NewsArticle> {
  const url = `${API_URL}?slug=${encodeURIComponent(slug)}`;
  
  const headers: HeadersInit = {
    'Content-Type': 'application/json',
  };
  
  if (API_KEY) {
    headers['X-API-Key'] = API_KEY;
  }

  const response = await fetch(url, { headers });

  if (!response.ok) {
    const error = await response.json().catch(() => ({ error: 'Article not found' }));
    throw new Error(error.error || `HTTP ${response.status}: ${response.statusText}`);
  }

  const data: SingleNewsResponse = await response.json();
  return data.article;
}

/**
 * Fetch news categories
 */
export async function fetchCategories(): Promise<NewsCategory[]> {
  const url = `${API_URL}/categories`;
  
  const headers: HeadersInit = {
    'Content-Type': 'application/json',
  };
  
  if (API_KEY) {
    headers['X-API-Key'] = API_KEY;
  }

  const response = await fetch(url, { headers });

  if (!response.ok) {
    const error = await response.json().catch(() => ({ error: 'Failed to fetch categories' }));
    throw new Error(error.error || `HTTP ${response.status}: ${response.statusText}`);
  }

  const data: CategoriesResponse = await response.json();
  return data.categories;
}

/**
 * Format date to readable string
 */
export function formatNewsDate(dateString: string | null): string {
  if (!dateString) return 'No date';
  
  try {
    const date = new Date(dateString);
    // Check if date is valid
    if (isNaN(date.getTime())) {
      return 'Invalid date';
    }
    
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  } catch (error) {
    return 'Invalid date';
  }
}

/**
 * Get category color (fallback to default if not provided)
 */
export function getCategoryColor(category?: NewsCategory): string {
  return category?.color || '#3b82f6';
}
