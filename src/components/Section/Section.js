import { Component } from 'react';
import PropTypes from 'prop-types';

export class Section extends Component {
  render() {
    const { title, children } = this.props;

    return (
      <div>
        <h3>{title}</h3>
        {children}
      </div>
    );
  }
}

Section.propTypes = {
  title: PropTypes.string,
};