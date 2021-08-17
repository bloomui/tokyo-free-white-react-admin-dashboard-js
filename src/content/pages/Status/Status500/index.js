import { useState } from 'react';
import {
  Box,
  Typography,
  Hidden,
  Container,
  Button,
  Grid
} from '@material-ui/core';
import { Helmet } from 'react-helmet-async';
import RefreshTwoToneIcon from '@material-ui/icons/RefreshTwoTone';
import LoadingButton from '@material-ui/lab/LoadingButton';


import { experimentalStyled } from '@material-ui/core/styles';

const GridWrapper = experimentalStyled(Grid)(
  ({ theme }) => `
    background: ${theme.colors.gradients.black1};
`
);

const MainContent = experimentalStyled(Box)(
  () => `
    height: 100%;
    display: flex;
    flex: 1;
    overflow: auto;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
);

const TypographyPrimary = experimentalStyled(Typography)(
  ({ theme }) => `
      color: ${theme.colors.alpha.white[100]};
`
);

const TypographySecondary = experimentalStyled(Typography)(
  ({ theme }) => `
      color: ${theme.colors.alpha.white[70]};
`
);

function Status500() {


  const [pending, setPending] = useState(false);
  function handleClick() {
    setPending(true);
  }

  return (
    <>
      <Helmet>
        <title>Status - 500</title>
      </Helmet>
      <MainContent>
        <Grid
          container
          sx={{ height: '100%' }}
          alignItems="stretch"
          spacing={0}
        >
          <Grid
            xs={12}
            md={6}
            alignItems="center"
            display="flex"
            justifyContent="center"
            item
          >
            <Container maxWidth="sm">
              <Box textAlign="center">
                <img
                  alt="500"
                  height={260}
                  src="/static/images/status/500.svg"
                />
                <Typography variant="h2" sx={{ my: 2 }}>
                  There was an error, please try again later
                </Typography>
                <Typography
                  variant="h4"
                  color="text.secondary"
                  fontWeight="normal"
                  sx={{ mb: 4 }}
                >
                  The server encountered an internal error and was not able to complete your request
                </Typography>
                <LoadingButton
                  onClick={handleClick}
                  loading={pending}
                  variant="outlined"
                  color="primary"
                  startIcon={<RefreshTwoToneIcon />}
                >
                  Refresh view
                </LoadingButton>
                <Button href="/overview" variant="contained" sx={{ ml: 1 }}>
                  Go back
                </Button>
              </Box>
            </Container>
          </Grid>
          <Hidden mdDown>
            <GridWrapper
              xs={12}
              md={6}
              alignItems="center"
              display="flex"
              justifyContent="center"
              item
            >
              <Container maxWidth="sm">
                <Box textAlign="center">
                  <TypographyPrimary variant="h1" sx={{ my: 2 }}>
                    Tokyo Free White React Admin Dashboard
                  </TypographyPrimary>
                  <TypographySecondary
                    variant="h4"
                    fontWeight="normal"
                    sx={{ mb: 4 }}
                  >
                    High performance React template built with lots of powerful Material-UI components across multiple product niches for fast &amp; perfect apps development processes.
                  </TypographySecondary>
                  <Button
                    href="/overview"
                    size="large"
                    variant="contained"
                  >
                    Overview
                  </Button>
                </Box>
              </Container>
            </GridWrapper>
          </Hidden>
        </Grid>
      </MainContent>
    </>
  );
}

export default Status500;
