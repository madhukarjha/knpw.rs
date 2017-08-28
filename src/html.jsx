/* eslint-disable react/no-danger */
import React from 'react';
import PropTypes from 'prop-types';

const Html = ({ body, headComponents, postBodyComponents }) => (
  <html lang="en">
    <head>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
      />
      {headComponents}
    </head>
    <body>
      <div
        id="___gatsby"
        dangerouslySetInnerHTML={{ __html: body }}
      />
      {postBodyComponents}
    </body>
  </html>
);

Html.propTypes = {
  body: PropTypes.string.isRequired,
  headComponents: PropTypes.node.isRequired,
  postBodyComponents: PropTypes.node.isRequired,
};

export default Html;