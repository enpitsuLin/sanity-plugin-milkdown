import {defaultValueCtx, Editor, editorViewOptionsCtx, rootCtx} from '@milkdown/core'
import {listener, listenerCtx} from '@milkdown/plugin-listener'
import {commonmark} from '@milkdown/preset-commonmark'
import {gfm} from '@milkdown/preset-gfm'
import {ReactEditor, useEditor} from '@milkdown/react'
import {nord} from '@milkdown/theme-nord'
import * as React from 'react'

export interface MilkDownEditorProps {
  value: string
  onChange?: (val: string) => void
  readOnly?: boolean
}

const MilkDownEditor: React.FunctionComponent<MilkDownEditorProps> = ({
  value,
  onChange,
  readOnly,
}) => {
  const {editor} = useEditor((root) =>
    Editor.make()
      .config((ctx) => {
        ctx.set(rootCtx, root)
        ctx.set(defaultValueCtx, value)
        ctx.set(editorViewOptionsCtx, {
          editable: () => {
            return !readOnly
          },
        })
        ctx.get(listenerCtx).markdownUpdated((_ctx, markdown, _prevMarkdown) => {
          if (onChange) onChange(markdown)
        })
      })
      .use(nord)
      .use(commonmark)
      .use(gfm)
      .use(listener)
  )
  return <ReactEditor editor={editor} />
}
MilkDownEditor.defaultProps = {
  onChange: () => {},
  readOnly: false,
}

export default MilkDownEditor
