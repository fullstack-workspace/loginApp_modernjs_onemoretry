import { appTools, defineConfig } from '@modern-js/app-tools';
import { moduleFederationPlugin } from '@module-federation/modern-js';

// const loginCodespaceName = process.env.LOGIN_APP_CODESPACE_SUBDOMAIN;
// const loginPort = Number.parseInt(process.env.LOGIN_APP_PORT || '3051', 10);

const assetPrefix = process.env.LOGIN_APP_URL;

export default defineConfig({
  // tools: {
  //   devServer:{
  //     // headers: {
  //     //   'Access-Control-Allow-Origin': 'https://<github_codespace_subdomain>-<port>.app.github.dev',
  //     //   'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
  //     //   'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization',
  //     //   'Access-Control-Allow-Credentials': 'true', // if you use cookies
  //     // }
  //   }
  // },
  dev: {
    // Asset prefix url and port required for github codespace
    // assetPrefix: `https://${loginCodespaceName}-${loginPort}.app.github.dev/`,
    // port: loginPort,

    // Asset prefix url required for vercel
    assetPrefix: assetPrefix,
  },
  runtime: {
    router: true,
  },
  server: {
    ssr: true,
  },
  plugins: [
    appTools({
      bundler: 'rspack', // Set to 'webpack' to enable webpac
    }),
    moduleFederationPlugin(),
  ],
});
