# React Hamburger Icon

[![NPM](https://img.shields.io/npm/v/react-hamburger-icon)](https://www.npmjs.com/package/react-hamburger-icon) [![License](https://img.shields.io/npm/l/react-hamburger-icon)](https://github.com/radioactivepesto/react-hamburger-icon/blob/master/LICENSE.md)

A featherweight animated 'hamburger' menu icon for React. Highly configurable and stylable, with sensible defaults.

## Installation

```sh
npm i react-hamburger-icon
```

## Usage

Import the component and use it anywhere you want a hamburger icon. Pass an `open` prop to determine whether it shows an open state. You can configure it with `animation`, `lineWidth`, and `duoLine` props, as well as style things like size and color directly on the component.

See the [API Docs](https://radioactivepesto.github.io/react-hamburger-icon/) for a full overview of props and options.

```js
import React, { useState } from 'react';
import { HamburgerIcon } from 'react-hamburger-icon';

export function Menu() {
  const [open, setOpen] = useState(false);

  return <HamburgerIcon open={open} onClick={() => setOpen(!open)} />;
}
```
