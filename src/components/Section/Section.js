import PropTypes from 'prop-types';

export const Section = ({ title, children }) => (
  <div>
    <h3>{title}</h3>
    {children}
  </div>
);

Section.propTypes = {
  title: PropTypes.string,
};