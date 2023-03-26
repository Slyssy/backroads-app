import tour1Image from './images/tour-1.jpeg';
import tour2Image from './images/tour-2.jpeg';
import tour3Image from './images/tour-3.jpeg';
import tour4Image from './images/tour-4.jpeg';
// import tour5Image from './images/tour-5.jpeg';
// import tour6Image from './images/tour-6.jpeg';

export const pageLinks = [
  { id: 1, href: '#home', text: 'home' },
  { id: 2, href: '#about', text: 'about' },
  { id: 3, href: '#services', text: 'services' },
  { id: 4, href: '#tours', text: 'tours' },
];

export const socialLinks = [
  { id: 1, href: 'https//www.facebook.com', icon: 'fab fa-facebook' },
  { id: 2, href: 'https//www.twitter.com', icon: 'fab fa-twitter' },
  { id: 3, href: 'https//www.squarespace.com', icon: 'fab fa-squarespace' },
];

export const serviceArticles = [
  {
    id: 1,
    icon: 'fas fa-wallet fa-fw',
    title: 'Saving Money',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.',
  },
  {
    id: 2,
    icon: 'fas fa-tree fa-fw',
    title: 'Endless Hiking',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.',
  },
  {
    id: 3,
    icon: 'fas fa-house fa-fw',
    title: 'Amazing Comfort',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.',
  },
];

export const tourData = [
  {
    id: 1,
    image: { tour1Image },
    date: 'August 26th, 2023',
    title: 'Tibet Adventure',
    text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
                vitae tempore voluptatum maxime reprehenderit eum quod
                exercitationem fugit, qui corporis.`,
    icon: 'fas fa-map',
    location: 'china',
    duration: '6 Days',
    price: 'From $2100',
  },
  {
    id: 2,
    image: { tour2Image },
    date: 'October 11th, 2023',
    title: 'best of java',
    text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
                vitae tempore voluptatum maxime reprehenderit eum quod
                exercitationem fugit, qui corporis.`,
    icon: 'fas fa-map',
    location: 'indonesia',
    duration: '11 Days',
    price: 'From $1400',
  },
  {
    id: 3,
    image: { tour3Image },
    date: 'September 15th, 2023',
    title: 'explore hong kong',
    text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
                vitae tempore voluptatum maxime reprehenderit eum quod
                exercitationem fugit, qui corporis.`,
    icon: 'fas fa-map',
    location: 'hong kong',
    duration: '8 days',
    price: 'From $5000',
  },
  {
    id: 4,
    image: { tour4Image },
    date: 'december 5th, 2023',
    title: 'kenya highlights',
    text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
                vitae tempore voluptatum maxime reprehenderit eum quod
                exercitationem fugit, qui corporis.`,
    icon: 'fas fa-map',
    location: 'kenya',
    duration: '20 days',
    price: 'From $3300',
  },
];
