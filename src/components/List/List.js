import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero.js';
import PropTypes from 'prop-types';
import Column from '../Column/Column.js';
import {settings} from '../../data/dataStore';
import Creator from '../Creator/Creator.js';
import ReactHtmlParser from 'react-html-parser';

class List extends React.Component {
  
  static propTypes = {
    title: PropTypes.node.isRequired,
    description: PropTypes.node,
    columns: PropTypes.array,
    image: PropTypes.node,
    addColumn: PropTypes.func,
  };
  static defaultProps = {
    description: settings.defaultListDescription,
  };
  state = {
    columns: this.props.columns,
  };
  addColumn(title) {
    this.setState(state => ({
      columns: [
        ...state.columns, { key: state.columns.length ? state.columns[state.columns.length - 1].key + 1 : 0,
          title,
          icon: 'list-alt',
          cards: [],
        },
      ],
    }
    ));
  }
  render() {
    const {title, image, description } = this.props;
    return (
      <section className={styles.component}>
        <Hero titleText={title} image={image} />
        <div className={styles.description}> {ReactHtmlParser(description)}
        </div>
        <div className={styles.columns}> {this.state.columns.map(columnData => (
          <Column key={columnData.id} {...columnData} /> ))}
        </div>
        <div className={styles.creator}>
          <Creator text={settings.columnCreatorText} action={(title) =>
            this.addColumn(title)}/>
        </div>
      </section>
    );
  }
}
export default List;
