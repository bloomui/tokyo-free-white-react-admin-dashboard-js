import PropTypes from 'prop-types';
import { Outlet } from 'react-router-dom';

const BaseLayout = ({ children }) => {
  return <>{children || <Outlet />}</>;
};

BaseLayout.propTypes = {
  children: PropTypes.node
};

export default BaseLayout;
