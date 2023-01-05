import {
  defaultValueCtx,
  Editor,
  editorViewOptionsCtx,
  MilkdownPlugin,
  rootCtx,
} from '@milkdown/core'
import {block} from '@milkdown/plugin-block'
import {clipboard} from '@milkdown/plugin-clipboard'
import {cursor} from '@milkdown/plugin-cursor'
import {history} from '@milkdown/plugin-history'
import {listener, listenerCtx} from '@milkdown/plugin-listener'
import {menu} from '@milkdown/plugin-menu'
import {prism} from '@milkdown/plugin-prism'
import {slash} from '@milkdown/plugin-slash'
import {tooltip} from '@milkdown/plugin-tooltip'
import {gfm} from '@milkdown/preset-gfm'
import {ReactEditor, useEditor} from '@milkdown/react'
import {nord} from '@milkdown/theme-nord'
import * as React from 'react'

export interface MilkDownEditorProps {
  value: string
  onChange: (val: string) => void
  readOnly?: boolean
  plugins?: MilkdownPlugin[]
}

const MilkDownEditor: React.FunctionComponent<MilkDownEditorProps> = ({
  value,
  onChange,
  readOnly,
  plugins,
}) => {
  const {editor} = useEditor((root, renderReact) => {
    const editorInstance = Editor.make()
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
      .use(gfm)
      .use(menu)
      .use(tooltip)
      .use(cursor)
      .use(slash)
      .use(prism)
      .use(history)
      .use(clipboard)
      .use(block)
      .use(listener)

    plugins?.forEach((plugin) => {
      editorInstance.use(plugin)
    })
    return editorInstance
  })

  return <ReactEditor editor={editor} />
}

MilkDownEditor.defaultProps = {
  readOnly: false,
  plugins: [],
}

export default MilkDownEditor
