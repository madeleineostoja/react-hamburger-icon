import React from 'react';
import { HamburgerIcon, HamburgerIconProps } from '.';

export default {
  title: 'API & Demo',
  component: HamburgerIcon
};

export const Default = ({
  open = false,
  duoLine = false,
  animation,
  lineWidth
}: HamburgerIconProps) => (
  <HamburgerIcon {...{ open, duoLine, animation, lineWidth }} />
);

/** HamburgerIcon with two lines */
export const DuoLine = ({
  open = false,
  duoLine = true,
  animation,
  lineWidth
}: HamburgerIconProps) => (
  <HamburgerIcon {...{ open, duoLine, animation, lineWidth }} />
);
