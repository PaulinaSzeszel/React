import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero.js';
import PropTypes from 'prop-types';
import { settings } from '../../data/dataStore';
import Column from '../Column/Column.js';

class List extends React.Component {
  static propTypes = {
    title: PropTypes.node,
    children: PropTypes.node,
  }
  static defaultProps = {
  children: <p>I can do all the things!!!</p>,
}
  render() {
    return (
      <section className={styles.component}>
      <h2 className={styles.subtitle}></h2>
      <Hero titleText={this.props.title}/>
      <Column />

      <table className={styles.columns}>
      <div className={styles.component}>Animals</div>
      <div className={styles.component}>Plants</div>
      <div className={styles.component}>Minerals</div>
      </table>

      </section>
    )
  }
}

export default List;
