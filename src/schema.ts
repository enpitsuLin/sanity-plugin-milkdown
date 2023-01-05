import {defineType, StringDefinition} from 'sanity'
import {MarkdownEditorMilkdown} from './components/Editor'

const markdownTypeName = 'markdown' as const

/**
 * @public
 */
export interface MarkdownDefinition extends Omit<StringDefinition, 'type' | 'fields' | 'options'> {
  type: typeof markdownTypeName
}

//@ts-ignore
declare module '@sanity/types' {
  // makes type: 'markdown' narrow correctly when using defineType/defineField/defineArrayMember
  export interface IntrinsicDefinitions {
    markdown: MarkdownDefinition
  }
}

export const markdownSchemaType = defineType({
  type: 'string',
  name: markdownTypeName,
  title: 'Markdown',
  ...({components: {input: MarkdownEditorMilkdown}} as {}), //TODO revert when rc.1 ships
})
