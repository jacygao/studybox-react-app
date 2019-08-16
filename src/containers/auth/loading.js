import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import BarLoader from 'react-spinners/BarLoader';

const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
    max-width: 600px;
    width: 80%;
    height: 2px;
`;

const LoadingContainer = ({ isLoading }) => (
    <BarLoader
        css={override}
        color={'#FBA73B'}
        loading={isLoading}
    />
)

LoadingContainer.propTypes = {
    isLoading: PropTypes.bool.isRequired,
}

export default LoadingContainer