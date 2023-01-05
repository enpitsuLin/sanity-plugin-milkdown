import {forwardRef, lazy, useState} from 'react'
import {StringInputProps} from 'sanity'
import {Card} from '@sanity/ui'
import {HelmetData, Helmet} from 'react-helmet-async'
import styled from 'styled-components'

const StyledCard = styled(Card)`
  max-height: 300px;
  overflow-y: scroll;
`

const MilkDownEditor = lazy(() => import('./MilkdownEditor'))

const helmetData = new HelmetData({})

export const MarkdownEditorMilkdown = forwardRef<HTMLDivElement, StringInputProps>((props, ref) => {
  const {value = '', readOnly} = props

  const [editedValue, setEditedValue] = useState<string>(value)
  return (
    <div ref={ref}>
      <Helmet helmetData={helmetData}>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap"
        />

        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons+Outlined"
        />
      </Helmet>
      <StyledCard>
        <MilkDownEditor value={editedValue} onChange={setEditedValue} readOnly={readOnly} />
      </StyledCard>
    </div>
  )
})

MarkdownEditorMilkdown.displayName = 'MarkdownEditorMilkdown'
