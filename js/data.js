const menu = {
  navigation: [
    {
      key: 'download',
      name: 'Download',
    },
    {
      key: 'warranty',
      name: 'Warranty',
    },
    {
      key: 'care',
      name: 'Care',
    },
    {
      key: 'cashback',
      name: 'Cashback',
    },
    {
      key: 'clients',
      name: 'Clients',
    },
  ],
  langButton: [
    {
      key: 'EN',
      name: 'en',
    },
    {
      key: 'RU',
      name: 'ru',
    },
  ],
  themeButton: [
    {
      source: './assets/icons/theme.svg',
      name: 'moon',
    },
    {
      source: '',
      name: 'sun',
    },
  ],
};

// console.log(menu);

const download = {
  title: 'Peaceful shopping mindful money',
  texts: ['Paragraph 1'],
  links: [
    {
      url: 'https://apple.com',
      name: 'apple',
    },
    {
      url: 'https://google.com',
      name: 'google',
    },
  ],
  image: {
    source: './assets/images/1.jpg',
    description: 'Bag and device',
  },
};

// console.log(download);

const warranty = {
  title: '1-year warranty boost',
  texts: ['Paragraph 1', 'Paragraph 2'],
  image: {
    source: './assets/images/2.jpg',
    description: 'Basket',
  },
};

// console.log(warranty);

const care = {
  title: 'ZEN Care',
  texts: ['Paragraph 1', 'Paragraph 2', 'Paragraph 3'],
  image: {
    source: './assets/images/3.jpg',
    description: 'Card',
  },
};

// console.log(care);

const cashback = {
  title: 'and cashback!',
  texts: ['Paragraph 1', 'Paragraph 2', 'Paragraph 3'],
  buttonText: 'Order a consultation',
};

// console.log(cashback);

const clients = {
  brands: [
    {
      name: 'Rosegal',
      logo: {
        lightSource: './assets/brands/light/1.svg',
        darkSource: './assets/brands/dark/1.svg',
      },
    },
    {
      name: 'Gearbest',
      logo: {
        lightSource: './assets/brands/light/2.svg',
        darkSource: './assets/brands/dark/2.svg',
      },
    },
    {
      name: 'allegro',
      logo: {
        lightSource: './assets/brands/light/3.svg',
        darkSource: './assets/brands/dark/3.svg',
      },
    },
    {
      name: 'AliExpress',
      logo: {
        lightSource: './assets/brands/light/4.svg',
        darkSource: './assets/brands/dark/4.svg',
      },
    },
    {
      name: 'Booking.com',
      logo: {
        lightSource: './assets/brands/light/5.svg',
        darkSource: './assets/brands/dark/5.svg',
      },
    },
    {
      name: 'MediaMarkt',
      logo: {
        lightSource: './assets/brands/light/6.svg',
        darkSource: './assets/brands/dark/6.svg',
      },
    },
    {
      name: 'RTVeuroAGD',
      logo: {
        lightSource: './assets/brands/light/7.svg',
        darkSource: './assets/brands/dark/7.svg',
      },
    },
    {
      name: 'Rosegal',
      logo: {
        lightSource: './assets/brands/light/8.svg',
        darkSource: './assets/brands/dark/8.svg',
      },
    },
  ],
};

// console.log(clients);

const footer = {
  columns: [
    {
      title: 'Learn',
      links: [
        {
          text: 'Help center',
          url: 'https://',
        },
        {
          text: 'Join ZEN team',
          url: 'https://',
        },
        {
          text: 'Privacy Policy',
          url: 'https://',
        },
        {
          text: 'Cookies',
          url: 'https://',
        },
        {
          text: 'Terms of use',
          url: 'https://',
        },
      ],
    },
    {
      title: 'Discover',
      links: [
        {
          text: 'For developers',
          url: 'https://',
        },
        {
          text: 'Apple Pay',
          url: 'https://',
        },
        {
          text: 'Google Pay',
          url: 'https://',
        },
      ],
    },
    {
      title: 'Offer',
      links: [
        {
          text: 'Business',
          url: 'https://',
        },
        {
          text: 'Personal',
          url: 'https://',
        },
      ],
    },
    {
      title: 'Language',
      links: [
        {
          text: 'English',
          url: 'https://',
        },
        {
          text: 'Polish',
          url: 'https://',
        },
      ],
    },
    {
      title: 'Follow us',
      links: [
        {
          source: './assets/icons/in.svg',
          url: 'https://',
        },
      ],
    },
    {
      title: 'Contact',
      links: [
        {
          text: 'hello@zen.com',
          url: 'https://',
        },
      ],
    },
  ],
  info: {
    texts: [
      'Paragraph 1',
      'Paragraph 2',
      'Paragraph 3',
      'Paragraph 4',
      'Paragraph 5',
      'Paragraph 6',
    ],
  },
};

// console.log(footer);
