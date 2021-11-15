import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';
import { settings } from '../../data/dataStore';

class Column extends React.Component {
  static propTypes = {
    title: PropTypes.node,
  }

  render() {
    return (
      <section className={styles.column}>
        <h3 className={styles.title}>Interesting things I want to check out!</h3>
      </section>
    );
  }
}

export default Column;
