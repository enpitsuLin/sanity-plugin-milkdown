import {MilkdownPlugin} from '@milkdown/core'
import {definePlugin} from 'sanity'
import {MarkdownEditorMilkdown as Editor} from './components/Editor'
import {MarkdownDefinition, markdownSchemaType} from './schema'

interface MilkdownPluginConfig {
  plugins?: MilkdownPlugin[]
}

// re-exporting MarkdownEditor directly explodes @parcel/transformer-typescript-types :shrug:
const MarkdownEditor = Editor

export {MarkdownEditor, markdownSchemaType}
export type {MarkdownDefinition, MilkdownPluginConfig}

/**
 * Usage in `sanity.config.ts` (or .js)
 *
 * ```ts
 * import {defineConfig} from 'sanity'
 * import {markdownSchema} from 'sanity-plugin-milkdown'
 *
 * export default defineConfig({
 *   // ...
 *   plugins: [markdownSchema()],
 * })
 * ```
 */
export const markdownSchema = definePlugin<MilkdownPluginConfig | void>((config) => ({
  name: 'sanity-plugin-milkdown',
  schema: {
    types: [markdownSchemaType(config ?? {})],
  },
}))
