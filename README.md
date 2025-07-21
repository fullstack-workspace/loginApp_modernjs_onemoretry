# loginApp_modernjs_onemoretry

## Setup

Install the dependencies:

```bash
npm install
```

## Get Started

Start the dev server:

```bash
npm dev
```

Enable optional features or add a new entry:

```bash
npm new
```

Build the app for production:

```bash
npm build
```

Preview the production build locally:

```bash
npm serve
```

For more information, see the [Modern.js documentation](https://modernjs.dev/en).

## Deployment to Github Codespaces

### Configuring `dev.assetPrefix` for GitHub Codespaces

When running this Modern.js remote app on a [GitHub Codespace](https://docs.github.com/en/codespaces), you need to set the `dev.assetPrefix` in your `modern.config.ts` to your deployed Codespaces domain. This ensures that assets are loaded correctly from the remote environment.

#### Example

Suppose your Codespace is running at:

```
https://<your-github-codespace-domain>-<port>.github.dev
```

Update your `modern.config.ts` as follows:

```typescript
export default {
  dev: {
    assetPrefix: 'https://<your-github-codespace-domain>-<port>.github.dev',
    port: <port>
  },
  // ...other config
}
```

> **Tip:** You can find your Codespaces domain by opening the app in the browser from Codespaces.

---

**Note:**  
If you move or restart your Codespace, the domain may change. Always update `dev.assetPrefix` to match your current Codespaces URL.

### Making producer app ports visibility to public

To avoid CORS error while accessing producer app in consumer

1. Open your Codespace.
2. Go to the **Ports** tab (usually at the bottom or side panel).
3. Find the port you want to expose.
4. Right-click on the port.
5. Select **Port Visibility** > **Public**.

This allows anyone with the link to access the app running on that port.
