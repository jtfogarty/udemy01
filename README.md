# create-svelte

Everything you need to build a Svelte project, powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/main/packages/create-svelte).

## Creating a project

### create-svelte

I created this project using;

```bash
pnpm create svelte@latest .

pnpm dlx svelte-add@latest tailwindcss

#Using svelte-add setup tailwind for this project

pnpm isntall

git add . && git commit -m "after installs" && git push origin main

pnpm dev -- --host=10.10.4.41  #ip address is specific to the development server.

pnpm dlx shadcn-svelte@latest init

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.
