import React, { useState } from 'react';
import { HamburgerIcon, HamburgerIconProps } from '.';

export default {
  title: 'API & Demo',
  component: HamburgerIcon
};

export const Default = (props: HamburgerIconProps) => {
  const [open, setOpen] = useState(false);

  return (
    <HamburgerIcon open={open} onClick={() => setOpen(!open)} {...props} />
  );
};

export const DuoLine = ({ duoLine = true, ...props }: HamburgerIconProps) => {
  const [open, setOpen] = useState(false);

  return (
    <HamburgerIcon
      open={open}
      onClick={() => setOpen(!open)}
      {...{ duoLine, ...props }}
    />
  );
};
