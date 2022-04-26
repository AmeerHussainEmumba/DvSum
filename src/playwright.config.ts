import type { PlaywrightTestConfig } from '@playwright/test';

import { devices } from '@playwright/test';
​
​
const config: PlaywrightTestConfig = {
  testIgnore: 'setUp.test.ts',
  testMatch: ['deleteViewTest.test.ts'],
  
  };
  export default config;