import React from 'react';
import { HamburgerIcon, HamburgerIconProps } from '.';

export default {
  title: 'API & Demo',
  component: HamburgerIcon
};

export const Default = (props: HamburgerIconProps) => (
  <HamburgerIcon {...props} />
);

/** HamburgerIcon with two lines */
export const DuoLine = ({ duoLine = true, ...props }: HamburgerIconProps) => (
  <HamburgerIcon {...{ duoLine, ...props }} />
);
