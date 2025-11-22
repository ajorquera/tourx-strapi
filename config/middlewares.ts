export default ({env}) => [
  'strapi::logger',
  'strapi::errors',
  {
    name: "strapi::security",
    config: {
      contentSecurityPolicy: {
        directives: {
          "default-src": ["'self'"],
          "img-src": [
            "'self'",
            "data:",
            "blob:",
            env("HOST"),
          ],
        },
      },
    },
  },
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  {
    name: 'strapi::session',
    config: {
      pool_mode: 'session',
    },
  },
  'strapi::favicon',
  'strapi::public',
];
