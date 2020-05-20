import React from "react";
import DataProvider from "./DataProvider";
import styles from "../css/WidgetMaker.module.css";

export default function WidgetMaker(props) {
    const data = DataProvider("https://codifyinditest.com/script_test/api-test/");
    const { labels, phone_number } = data['script test'] || {};
    return (
      <div>
           {Object.keys(data).length ? 
           (<div className={styles.card}>
            <div className={styles['click-to-call']}>
              <div className={styles['text-data']}>{labels}</div>
              <div className={styles['phone-number']}>{phone_number}</div>
            </div>
            <div className={styles.container}>
              <div className={styles['close-button']}>&#10005;</div> 
            </div>
          </div>) 
          : 
          (<div className={`${styles.card} ${styles['text-data']}`}> Loading... </div>)}
      </div>
    );
}