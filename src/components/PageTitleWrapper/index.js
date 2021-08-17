import { Container } from '@material-ui/core';
import PropTypes from 'prop-types';
import { experimentalStyled } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';

const PageTitle = experimentalStyled(Box)(
  ({ theme }) => `
        padding: ${theme.spacing(4, 0)};
`
);

const PageTitleWrapper = ({ children }) => {
  return (
    <>
      <PageTitle>
        <Container maxWidth="lg">{children}</Container>
      </PageTitle>
    </>
  );
};

PageTitleWrapper.propTypes = {
  children: PropTypes.node.isRequired
};

export default PageTitleWrapper;
