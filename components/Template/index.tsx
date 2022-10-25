import React from 'react';
import Navbar from '../Navbar';
import styles from './Template.module.scss';

export default function Template({ children }: { children: React.ReactElement }) {
  return (
    <div className={styles.main}>
      <Navbar />
      {children}
    </div>
  )
}