import React from 'react';
import styled from 'styled-components';
import { text } from '@storybook/addon-knobs';

import { SocialButton as SB } from './SocialButton';

/* eslint-disable import/no-default-export */
export default { title: 'components|buttons/' };
/* eslint-enable import/no-default-export */

const SocialButton = styled(SB)`
  width: 20rem;
  margin: 0 1rem 1rem 0;
`;

export function Social() {
  return (
    <>
      <SocialButton brand="apple" fluid>
        {text('Apple text', 'Sign in with Apple')}
      </SocialButton>
      <SocialButton brand="facebook" fluid>
        {text('Facebook text', 'Join with Facebook')}
      </SocialButton>
      <SocialButton brand="google" fluid>
        {text('Google text', 'Join with Google')}
      </SocialButton>
    </>
  );
}
