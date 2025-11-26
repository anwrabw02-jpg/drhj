export interface Project {
  id: string;
  title: string;
  category: 'سكني' | 'تجاري' | 'صناعي' | 'حكومي';
  description: string;
  imageUrl: string;
  location?: string;
  completionYear?: string;
}

export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  iconName: string; // Key for icon mapping
  imageUrl: string;
  features: string[];
}

export interface Article {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  imageUrl: string;
}

export interface CompanyInfo {
  name: string;
  aboutShort: string;
  aboutFull: string;
  vision: string;
  mission: string;
  certificates: string;
  heroImageUrl: string;
  phone: string;
  email: string;
  address: string;
  mapEmbedUrl: string;
  stats: {
    projects: number;
    years: number;
    engineers: number;
  };
}

export interface AppContent {
  companyInfo: CompanyInfo;
  services: Service[];
  projects: Project[];
  articles: Article[];
}

// Navigation Views
export type ViewState = 'HOME' | 'ABOUT' | 'SERVICES' | 'PROJECTS' | 'CONTACT' | 'ADMIN' | 'SERVICE_DETAIL' | 'NEWS';