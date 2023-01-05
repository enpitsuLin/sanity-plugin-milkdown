# sanity-plugin-milkdown

## What is it

A Markdown editor for Sanity Studio with preview supported by [Milkdown](https://github.com/Saul-Mirone/milkdown) which was a alternatives to official plugin `sanity-plugin-markdown`

## Installation

```sh
npm install sanity-plugin-milkdown --save
```

or

```sh
pnpm add sanity-plugin-milkdown
```

## Usage

Add it as a plugin in `sanity.config.ts` (or .js):

```ts
import {defineConfig} from 'sanity'
import {markdownSchema} from 'sanity-plugin-milkdown'

export default defineConfig({
  //...
  plugins: [markdownSchema({})],
})
```

## Demo

![milkdowndemo](https://user-images.githubusercontent.com/29378026/210738213-634e2c1f-5fcc-4717-95f1-adb23925e56a.gif)

## License

[MIT](LICENSE) © enpitsulin

## Develop & test

This plugin uses [@sanity/plugin-kit](https://github.com/sanity-io/plugin-kit)
with default configuration for build & watch scripts.

See [Testing a plugin in Sanity Studio](https://github.com/sanity-io/plugin-kit#testing-a-plugin-in-sanity-studio)
on how to run this plugin with hotreload in the studio.
