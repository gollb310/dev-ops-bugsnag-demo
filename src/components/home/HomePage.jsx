import React from 'react';
import { Grid, Container } from 'semantic-ui-react';
import { HomePageSegment } from './HomePageSegment';
import StocksSection from './stocks/StocksSection';
import FeaturedContent from './FeaturedContent';
import '../../style/home/homepage.css'

export default function HomePage() {
  return (
    <Container>
      <Grid
        columns={2}
        stretched={true}
      >
        <Grid.Column>
          <FeaturedContent />
        </Grid.Column>
        <Grid.Column>
          <HomePageSegment
            title="Stocks"
          >
            <StocksSection/>
          </HomePageSegment>
        </Grid.Column>
      </Grid>
    </Container>
  )
}