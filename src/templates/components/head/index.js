import { h } from 'preact';

const Head = ({ title }) => <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="/static/css/index.css" />
    <title>Storm DOM { title }</title>
</head>;

export default Head;