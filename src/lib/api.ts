export const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5235";

export const BRAND_URLS = {
  ChoiceHotels: "https://www.choicehotels.com/",
  Dell: "https://www.dell.com",
} as const;

export type BrandName = keyof typeof BRAND_URLS;
