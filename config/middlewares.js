module.exports = ({env}) => [
  'strapi::errors',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'connect-src': ["'self'", 'https:'],
          'img-src': [
            "'self'",
            'data:',
            'https:',
            'blob:',
            'storage.googleapis.com',
            'cdn.jsdelivr.net',
            'strapi.io',
            's3.amazonaws.com',
            'firebasestorage.googleapis.com',
          ],
          'media-src': [
            "'self'",
            'data:',
            'https:',
            'blob:',
            'storage.googleapis.com',
            'cdn.jsdelivr.net',
            'strapi.io',
            's3.amazonaws.com',
            'firebasestorage.googleapis.com',
          ],
          'script-src': ["'self'", "'unsafe-eval'", "'unsafe-inline'", 'editor.unlayer.com'],
          'frame-src': ["'self'", 'editor.unlayer.com'],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  'strapi::errors',
  // 'strapi::security',
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
