import {forwardRef, lazy, useState} from 'react'
import {StringInputProps} from 'sanity'
import {Card} from '@sanity/ui'
import styled from 'styled-components'

const StyledCard = styled(Card)`
  max-height: 300px;
  overflow-y: scroll;
`

const MilkDownEditor = lazy(() => import('./MilkdownEditor'))

export const MarkdownEditorMilkdown = forwardRef<HTMLDivElement, StringInputProps>((props, ref) => {
  const {value = '', readOnly} = props

  const [editedValue, setEditedValue] = useState<string>(value)
  return (
    <div ref={ref}>
      <StyledCard>
        <MilkDownEditor value={editedValue} onChange={setEditedValue} readOnly={readOnly} />
      </StyledCard>
    </div>
  )
})

MarkdownEditorMilkdown.displayName = 'MarkdownEditorMilkdown'
