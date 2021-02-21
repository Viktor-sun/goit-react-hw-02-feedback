import React from 'react';
import PropTypes from 'prop-types';
import styles from './Section.module.css';

const Section = ({ title, children }) => (
  <section>
    <div className={styles.wrapperTitle}>
      <h2 className={styles.title}>{title}</h2>
    </div>

    {children}
  </section>
);

Section.defaultProps = {
  title: 'What will your feedback?',
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Section;
