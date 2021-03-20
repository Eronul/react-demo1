import React from 'react';
import './Button.scss';
import styles from './Error.module.css';

export default function() {
    return (
    <div className = "btn-group">
    <div className = "btn">点我</div>
    <div className = {styles.error}>点我</div>
    </div>
    );
}