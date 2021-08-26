<h1 align="center">Circle Loading for React Native</h1>

### Installation
```bash
npm install https://github.com/mertozylmz/react-native-circle-loading --save
```
or

```bash
yarn add https://github.com/mertozylmz/react-native-circle-loading
```

_NOTICE:_
You need add your project: `react-native-svg`

### Example

```js
import React from 'react';
import CircleLoading from 'react-native-circle-loading';

const App = ({}) => (
  <CircleLoading size={150} strokeLinecap='round' strokeWidth={3} strokeColor='#000' strokeBackgroundColor='#ccc' duration={5000} />
);
```


### API

| Property                 | Type          | Default             | Description |
| -----------------------  |:-------------:|:------------:       | ----------- |
| duration                 | number        | 20000               | animation time
| size                     | number        | 100                 | width and height of the circle
| strokeWidth              | number        | 5                   | circle stroke width
| strokeColor              | string        | #fff             | circle stroke color
| strokeBackgroundColor    | string        | #000             | circle stroke background color
| strokeLinecap            | string        | square              | The strokeLinecap prop specifies the shape to be                                                                      used at the end of open subpaths when they are                                                                        stroked. Can be either 'butt', 'square' or 'round'.
