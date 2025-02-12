export interface UnsplashUser {
    id: string;
    username: string;
    name: string;
    portfolio_url: string;
    profile_image: {
      small: string;
      medium: string;
      large: string;
    };
    links: {
      html: string;
    };
  }
  
  export interface UnsplashImage {
    id: string;
    alt_description: string | null;
    urls: {
      raw: string;
      full: string;
      regular: string;
      small: string;
      thumb: string;
    };
    links: {
      download: string;
      html: string;
    };
    likes: number;
    user: UnsplashUser;
  }
  