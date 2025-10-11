export interface NewsItem {
  id: number;
  Title: string;
  Description: string;
  Content: string;
  Slug: string;
  published_at: string;
  created_at: string;
  updated_at: string;
  Media?: {
    id: number;
    url: string;
    name: string;
    alternativeText?: string;
  }[];
}
