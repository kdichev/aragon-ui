import React from 'react'
import styled from 'styled-components'
import Page from 'comps/Page/Page'

import readme from 'ui-src/components/Card/Card.md'
import { Card, Text } from '@aragon/ui'
import Container from '../components/Page/DemoContainer'

const TextContainer = styled.div`
  display: flex;
  flex: 1;
  height: 100%;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`

const PageCard = ({ title }) => (
  <Page title={title} readme={readme}>
    <Page.Demo>
      <Container>
        <div>
          <Card>
            <TextContainer>
              <Text>Some Text</Text>
            </TextContainer>
          </Card>
        </div>
      </Container>
      <Container>
        <div>
          <Card width="500px">
            <TextContainer>
              <Text>A 500px wide Card</Text>
            </TextContainer>
          </Card>
        </div>
      </Container>
      <Container>
        <div>
          <Card height="300px">
            <TextContainer>
              <Text>A 300px tall Card</Text>
            </TextContainer>
          </Card>
        </div>
      </Container>
    </Page.Demo>
  </Page>
)

export default PageCard
