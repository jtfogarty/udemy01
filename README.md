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



pnpm dlx shadcn-svelte@latest init

## Developing

Once you've created a project and installed dependencies start a development server:

```bash
pnpm dev -- --host=10.10.4.41  #ip address is specific to the development server.
```

## Building

To create a production version of your app:

```bash
pnpm run build
```
