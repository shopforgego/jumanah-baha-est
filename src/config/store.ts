import { StoreConfig } from '../types/store';

export const storeConfig: StoreConfig = {
  storeNameAr: import.meta.env.VITE_STORE_NAME_AR || "متجر جمانة للأزياء والعبايات",
  storeNameEn: import.meta.env.VITE_STORE_NAME_EN || "Jumanah Baha Fashion & Abayas",
  companyNameAr: import.meta.env.VITE_COMPANY_NAME_AR || "مؤسسة جمانه زامل بن محمد بحه للتجارة",
  companyNameEn: import.meta.env.VITE_COMPANY_NAME_EN || "Jumanah Zamel Baha Trading Establishment",
  taglineAr: import.meta.env.VITE_TAGLINE_AR || "أرقى تصاميم العبايات الفاخرة والأزياء الشرقية المحتشمة",
  taglineEn: import.meta.env.VITE_TAGLINE_EN || "Finest Luxury Abayas & Modest Eastern Fashion",
  cr: import.meta.env.VITE_COMMERCIAL_REGISTRATION || "7035904593",
  taxNumber: import.meta.env.VITE_TAX_NUMBER || "310359045930003",
  shortAddress: import.meta.env.VITE_NATIONAL_ADDRESS_SHORT || "MERA2444",
  city: import.meta.env.VITE_CITY || "مكة المكرمة",
  district: import.meta.env.VITE_DISTRICT || "حي الشرائع",
  fullAddress: import.meta.env.VITE_FULL_ADDRESS || "المملكة العربية السعودية - مكة المكرمة - حي الشرائع - الرمز البريدي MERA2444",
  phone: import.meta.env.VITE_CONTACT_PHONE || "0535385344",
  whatsapp: import.meta.env.VITE_CONTACT_WHATSAPP || "966535385344",
  email: import.meta.env.VITE_CONTACT_EMAIL || "jmanhbhh571@gmail.com",
  supportHours: import.meta.env.VITE_SUPPORT_HOURS || "السبت - الخميس: 9:00 ص - 10:00 م",
  currency: import.meta.env.VITE_CURRENCY || "SAR",
  currencySymbol: import.meta.env.VITE_CURRENCY_SYMBOL || "ر.س",
  freeShippingThreshold: Number(import.meta.env.VITE_FREE_SHIPPING_THRESHOLD) || 200,
  shippingCost: Number(import.meta.env.VITE_SHIPPING_COST) || 25,
};
