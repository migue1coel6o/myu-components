import { storiesOf } from '@storybook/react';
import * as React from 'react';

import Weather from './index';

storiesOf('Weather', module)
  .add('with text', () => (
    <Weather name='Muia' />
  ));
