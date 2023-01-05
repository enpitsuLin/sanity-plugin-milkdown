import {forwardRef, lazy, useState} from 'react'
import {StringInputProps} from 'sanity'

const MilkDownEditor = lazy(() => import('./MilkdownEditor'))

export const MarkdownEditorMilkdown = forwardRef<HTMLDivElement, StringInputProps>((props, ref) => {
  const {value = '', readOnly} = props

  const [editedValue, setEditedValue] = useState<string>(value)
  return (
    <div ref={ref}>
      <MilkDownEditor value={editedValue} onChange={setEditedValue} readOnly={readOnly} />
    </div>
  )
})

MarkdownEditorMilkdown.displayName = 'MarkdownEditorMilkdown'
