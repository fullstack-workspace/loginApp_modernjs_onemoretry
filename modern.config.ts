import { appTools, defineConfig } from '@modern-js/app-tools';
import { moduleFederationPlugin } from '@module-federation/modern-js';

// https://discord.com/channels/1055442562959290389/1395046391772090529/1395046391772090529

export default defineConfig({
  // output: {
  //   assetPrefix: 'https://organic-space-xylophone-pwx476jjq42rq7v-3051.app.github.dev/'
  // },
  // tools: {
  //   devServer: {
  //     headers: {
  //       'Access-Control-Allow-Headers': '*'
  //     }
  //   }
  // },
  dev: {
    port: 3051,
  },
  runtime: {
    router: true,
  },
  server: {
    ssr: true,
  },
  plugins: [
    appTools({
      bundler: 'rspack', // Set to 'webpack' to enable webpack
    }),
    moduleFederationPlugin(
      // {
      //   config: {
      //     name: 'remote',
      //     remotes: {
      //       remoteApp: `remoteApp@https://organic-space-xylophone-pwx476jjq42rq7v-3051.app.github.dev/remoteEntry.js`
      //     },
      //   }
      // }
    ),
  ],
});
