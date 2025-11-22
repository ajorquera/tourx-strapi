export default ({env}) => ({
  seo: {
    enabled: true,
  },
  upload: {
    config: {
      provider: "strapi-upload-supabase-provider",
      providerOptions: {
        apiUrl: env("SUPABASE_API_URL"),
        apiKey: env("SUPABASE_API_KEY"),
        bucket: env("SUPABASE_BUCKET_NAME"),
        directory: env("SUPABASE_BUCKET_DIRECTORY"),
      },
      sizeLimit: 1000000000,
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
        checkFileSize: {},
      },
    },
  },
});
