/**
* @description:
* @author: manble@live.com
* @created: 2020-04-10
*/
'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './index.scss';

class Demo extends Component {
    render() {
        let { data } = this.props;
        return <div className={styles.demo}>{data.text}</div>
    }
};

Demo.defaultProps = {
    data: {
        text: 'hello world!'
    }
};

Demo.propTypes = {
    data: PropTypes.shape({})
};

export default Demo;
