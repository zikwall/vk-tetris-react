import React from 'react';
import cn from 'classnames';
import propTypes from 'prop-types';
import './index.css';

export default class Music extends React.Component {
    shouldComponentUpdate({ data }) {
        return data !== this.props.data;
    }
    render() {
        return (
            <div
                className={cn(
                    {
                        bg: true,
                        "music": true,
                        "c": !this.props.data,
                    }
                )}
            />
        );
    }
}

Music.propTypes = {
    data: propTypes.bool.isRequired,
};
