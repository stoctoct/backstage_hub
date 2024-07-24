import React from 'react';
// import { addDecorator, addParameters } from '@storybook/react';
import { lightTheme, darkTheme } from '@backstage/theme';
import { CssBaseline, ThemeProvider } from '@material-ui/core';
import { useDarkMode } from 'storybook-dark-mode';
import { apis } from './apis';

import { Content, AlertDisplay } from '@backstage/core-components';
import { TestApiProvider } from '@backstage/test-utils';
import type { Preview } from '@storybook/react';
import { ApiRef } from '@backstage/core-plugin-api';
// Decorator 정의


const withThemeProvider = (Story, context) => {
  const isDarkMode = useDarkMode();
  const theme = isDarkMode ? darkTheme : lightTheme;

  return (
    <TestApiProvider apis={apis as any}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AlertDisplay />
        <Content>
          <Story {...context} />
        </Content>
      </ThemeProvider>
    </TestApiProvider>
  );
};



// Preview 객체를 설정하여 Storybook의 전체 설정을 정의
const preview: Preview = {
  decorators: [withThemeProvider],
  parameters: {
    darkMode: {
      // Set the initial theme
      current: 'light',
    },
    layout: 'fullscreen',
    options: {
      storySort: {
        order: ['Plugins', 'Layout', 'Navigation'],
      },
    },
  },
};

export default preview;