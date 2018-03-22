# React Micro List [![Build Status](https://travis-ci.org/jxshco/react-micro-list.svg?branch=master)](https://travis-ci.org/jxshco/react-micro-list) [![https://npmjs.org/jxshco/react-micro-list](https://img.shields.io/npm/dt/react-micro-list.svg)]() [![https://npmjs.org/jxshco/react-micro-list](https://img.shields.io/npm/v/react-micro-list.svg)]()

#### A Tiny Package to render your results.

## Install
Add React Micro List to your Project
```bash
npm install react-micro-list --save

or

yarn add react-micro-list
```

## Usage

Import the List Component into your project

```js
import List from 'react-micro-list'
```

Add the list Component with data and your render item
```jsx
<List
    data={['Josh', 'Bill', 'Sarah']}
    render={(item) => <p>{item}</p>}
/>
```

Add a No Results Component if you would like
```jsx
<List
    data={['Josh', 'Bill', 'Sarah']}
    render={(item) => <p>{item}</p>}
    noResults={<p>You Have No Results</p>}
/>
```

Add a Loading Component if you would need to render something while waiting
```jsx
<List
    data={['Josh', 'Bill', 'Sarah']}
    render={(item) => <p>{item}</p>}
    loading={true|false}
    loadingComponent={<p>Loading...</p>}
/>
```

## Style

[![js-standard-style](https://cdn.rawgit.com/standard/standard/master/badge.svg)](https://github.com/standard/standard)

## License

MIT
