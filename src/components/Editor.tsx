import {forwardRef, lazy, useState} from 'react'
import {StringInputProps} from 'sanity'
import {Card} from '@sanity/ui'
import {HelmetData, Helmet} from 'react-helmet-async'
import styled from 'styled-components'
import {MilkdownPlugin} from '@milkdown/core'

const StyledCard = styled(Card)`
  max-height: 300px;
  overflow-y: scroll;
`

const MilkDownEditor = lazy(() => import('./MilkdownEditor'))

const helmetData = new HelmetData({})

export interface MarkdownEditorMilkdownProps extends StringInputProps {
  plugins?: MilkdownPlugin[]
}

export const MarkdownEditorMilkdown = forwardRef<HTMLDivElement, MarkdownEditorMilkdownProps>(
  (props, ref) => {
    const {value = '', readOnly, plugins} = props

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

          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/themes/prism-dark.min.css"
            integrity="sha512-y6rcKLYkttB9ZUBaz0IsncWFo1VoqISrcMY6J1i6Nb9WB9jRrpll8zjt5e1/naZHyXFoR/1VlH72+2VJ1Uzh7A=="
            crossOrigin="anonymous"
            referrerPolicy="no-referrer"
          />
        </Helmet>
        <StyledCard>
          <MilkDownEditor
            value={editedValue}
            onChange={setEditedValue}
            readOnly={readOnly}
            plugins={plugins}
          />
        </StyledCard>
      </div>
    )
  }
)

MarkdownEditorMilkdown.defaultProps = {plugins: []}

MarkdownEditorMilkdown.displayName = 'MarkdownEditorMilkdown'
