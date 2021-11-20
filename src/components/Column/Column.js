import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';
import Card from '../Card/Card.js';
import Icon from '../Icon/Icon.js';
import Creator from '../Creator/Creator.js';
import { settings } from '../../data/dataStore';

class Column extends React.Component {

  static propTypes = {
    cards: PropTypes.array,
    icon: PropTypes.node,
    title: PropTypes.node.isRequired,
    name: PropTypes.string,
    addCard: PropTypes.func,
  };
  static defaultProps = {
    icon: settings.defaultColumnIcon,
  };
  state = {
    cards: this.props.cards,
  };

  addCard(title) {
    this.setState(state => (
      {
        cards: [
          ...state.cards,
          {
            key: state.cards.length ? state.cards[state.cards.length - 1].key + 1 : 0,
            title,
          },
        ],
      }
    ));
  }

  render() {

    const {title, cards, icon} = this.props;
    return (
      <section className={styles.component}>
        <h3 className={styles.title} >{title}
          <span className={styles.icon}>
            <Icon name={icon}></Icon>
          </span>
          {title}
        </h3>
        <div className={styles.cards}>
          {cards.map(cardData => (
            <Card key={cardData.id} {...cardData} />
          ))}
        </div>
        <div className={styles.creator}>
          <Creator text={settings.cardCreatorText} action={(title) =>
            this.addCard(title)}/>
        </div>
      </section>
    );
  }
}

export default Column;
