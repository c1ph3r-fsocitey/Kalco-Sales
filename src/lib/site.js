export const SITE = {
  name: 'Kalco Sales Pvt. Ltd.',
  shortName: 'Kalco Sales',
  established: 1982,
  tagline: 'Best quality two-wheeler spare parts since 1982',
  phoneCEO: '+91 98111 54535',
  phoneCEORaw: '919811154535',
  phoneCFO: '+91 98712 99680',
  phoneCFORaw: '919871299680',
  email: 'kalcosales65@gmail.com',
  address: '65/2210 Naiwala, Karol Bagh, New Delhi — 110005',
  mapsQuery: 'https://www.google.com/maps/search/?api=1&query=65%2F2210+Naiwala+Karol+Bagh+New+Delhi+110005',
  ceo: 'Bhupinder Thareja',
  cfo: 'Ishaan Thareja',
};

export const whatsappLink = (message) =>
  `https://wa.me/${SITE.phoneCEORaw}?text=${encodeURIComponent(
    message || 'Hello Kalco Sales, I would like to enquire about two-wheeler spare parts.'
  )}`;
