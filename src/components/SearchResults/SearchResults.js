import React from 'react';
import styles from './SearchResults.scss';
import PropTypes from 'prop-types';
import Card from '../Card/Card';
//import { settings } from '../../data/dataStore';
import Icon from '../Icon/Icon';

class SearchResults extends React.Component {

  static propTypes = {
    cards: PropTypes.array,
  };

  render() {
    const { cards } = this.props;
    return (
      <section className={styles.component}>
        <h3 className={styles.title}>
          <span className={styles.icon}>
            <Icon name='cat' />
          </span>
          Some Title
        </h3>
        {cards.map(cardData => (
          <Card key={cardData.id} {...cardData} />
        ))}

      </section>
    );
  }
}

export default SearchResults;
