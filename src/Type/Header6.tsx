import React, { SFC } from 'react';
import { TypeBase } from './TypeBase';
import { TypeProps } from './TypeTypes';
import { Omit } from '../Utils';

export const Header6: SFC<
  TypeProps & Omit<React.HTMLProps<HTMLHeadingElement>, 'size'>
> = ({ element = 'h6', format = 'dark', ...props }) => (
  <TypeBase element={element} size="h6" format={format} {...props} />
);
