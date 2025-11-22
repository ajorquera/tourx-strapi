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
            env("SUPABASE_API_URL"),
            "*.media.strapiapp.com" 
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
