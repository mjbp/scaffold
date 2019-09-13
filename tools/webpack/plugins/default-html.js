const h = require('preact').h;
const paths = require('../../../config').paths;

module.exports = function({ htmlBody, css }) {
  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {css && <link rel="stylesheet" href={`/${css}`} />}
        <script src={`${process.env.NODE_ENV === 'production' ? `/${paths.dest.js}` : ''}/index.js`} async></script>
      </head>
      <body>     
        {htmlBody}
      </body>
    </html>
  )
};