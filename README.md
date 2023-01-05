# sanity-plugin-milkdown

## What is it

A Markdown editor for Sanity Studio with preview supported by milkdown which was a alternatives to official plugin `sanity-plugin-markdown`

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

## License

[MIT](LICENSE) © enpitsulin

## Develop & test

This plugin uses [@sanity/plugin-kit](https://github.com/sanity-io/plugin-kit)
with default configuration for build & watch scripts.

See [Testing a plugin in Sanity Studio](https://github.com/sanity-io/plugin-kit#testing-a-plugin-in-sanity-studio)
on how to run this plugin with hotreload in the studio.
