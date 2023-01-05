import {MilkdownPlugin} from '@milkdown/core'
import {EditIcon, EyeOpenIcon} from '@sanity/icons'
import {Card, Tab, TabList, TabPanel, TextArea} from '@sanity/ui'
import {forwardRef, lazy, useState} from 'react'
import {Helmet, HelmetData} from 'react-helmet-async'
import {StringInputProps} from 'sanity'
import styled from 'styled-components'

const MilkDownEditor = lazy(() => import('./MilkdownEditor'))

const ScrollCard = styled(Card)`
  height: 300px;
  overflow: hidden scroll;
`

const helmetData = new HelmetData({})

export interface MarkdownEditorMilkdownProps extends StringInputProps {
  plugins?: MilkdownPlugin[]
}

export const MarkdownEditorMilkdown = forwardRef<HTMLDivElement, MarkdownEditorMilkdownProps>(
  (props, ref) => {
    const {value = '', readOnly, plugins} = props

    const [editedValue, setEditedValue] = useState<string>(value)
    const [id, setId] = useState<'content' | 'raw'>('content')
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
        <Card>
          <TabList space={2}>
            <Tab
              aria-controls="content-panel"
              icon={EyeOpenIcon}
              id="content-tab"
              label="Content"
              onClick={() => setId('content')}
              selected={id === 'content'}
            />
            <Tab
              aria-controls="raw-panel"
              icon={EditIcon}
              id="raw-tab"
              label="RawText"
              onClick={() => setId('raw')}
              selected={id === 'raw'}
            />
          </TabList>

          <TabPanel
            aria-labelledby="content-tab"
            marginTop={2}
            hidden={id !== 'content'}
            id="content-panel"
          >
            <ScrollCard border radius={2}>
              <MilkDownEditor
                value={editedValue}
                onChange={setEditedValue}
                readOnly={readOnly}
                plugins={plugins}
              />
            </ScrollCard>
          </TabPanel>

          <TabPanel
            aria-labelledby="raw-tab"
            marginTop={2}
            hidden={id !== 'raw'}
            id="preview-panel"
          >
            <TextArea
              value={editedValue}
              onInput={(e) => setEditedValue(e.currentTarget.value)}
              padding={[3, 3, 4]}
              border
              radius={2}
            />
          </TabPanel>
        </Card>
      </div>
    )
  }
)

MarkdownEditorMilkdown.defaultProps = {plugins: []}

MarkdownEditorMilkdown.displayName = 'MarkdownEditorMilkdown'
