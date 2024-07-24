import {
    createBaseThemeOptions,
    createUnifiedTheme,
    genPageTheme,
    palettes,
    shapes,
} from '@backstage/theme';

import NanumPen from '../assets/fonts/NanumPen.ttf';
import NanumBrush from '../assets/fonts/NanumBrush.ttf'


export const myTheme = createUnifiedTheme({
  ...createBaseThemeOptions({
    palette: {
      ...palettes.light,
      primary: {
        main: '#343b58',
      },
      secondary: {
        main: '#565a6e',
      },
      error: {
        main: '#8c4351',
      },
      warning: {
        main: '#8f5e15',
      },
      info: {
        main: '#34548a',
      },
      success: {
        main: '#485e30',
      },
      background: {
        default: '#d5d6db',
        paper: '#d5d6db',
      },
      banner: {
        info: '#34548a',
        error: '#8c4351',
        text: '#343b58',
        link: '#565a6e',
      },
      errorBackground: '#8c4351',
      warningBackground: '#8f5e15',
      infoBackground: '#343b58',
      navigation: {
        background: '#343b58',
        indicator: '#8f5e15',
        color: '#d5d6db',
        selectedColor: '#ffffff',
      },
    },
  }),
  defaultPageTheme: 'home',
  // fontFamily: 'Comic Sans MS',
  /* below drives the header colors */
  // pageTheme: {
  //   home: genPageTheme({ colors: ['#8c4351', '#343b58'], shape: shapes.wave }),
  //   documentation: genPageTheme({
  //     colors: ['#8c4351', '#343b58'],
  //     shape: shapes.wave2,
  //   }),
  //   tool: genPageTheme({ colors: ['#8c4351', '#343b58'], shape: shapes.round }),
  //   service: genPageTheme({
  //     colors: ['#8c4351', '#343b58'],
  //     shape: shapes.wave,
  //   }),
  //   website: genPageTheme({
  //     colors: ['#8c4351', '#343b58'],
  //     shape: shapes.wave,
  //   }),
  //   library: genPageTheme({
  //     colors: ['#8c4351', '#343b58'],
  //     shape: shapes.wave,
  //   }),
  //   other: genPageTheme({ colors: ['#8c4351', '#343b58'], shape: shapes.wave }),
  //   app: genPageTheme({ colors: ['#8c4351', '#343b58'], shape: shapes.wave }),
  //   apis: genPageTheme({ 
  //     colors: ['#FF4351', '#DD3b58'],
  //     shape: shapes.round,
  //     options: {fontColor: 'blue'}
  //   }),
  // },
});

export const myThemeOverride = createUnifiedTheme({
    ...createBaseThemeOptions({
      palette: palettes.light,
    }),
    fontFamily: 'Comic Sans MS',
    defaultPageTheme: 'home',
    components: {
      BackstageHeader: {
        styleOverrides: {
          header: ({ theme }) => ({
            width: 'auto',
            margin: '20px',
            boxShadow: 'none',
            padding: '50px',
            // backgroundColor: 'red',
            borderBottom: `4px solid ${theme.palette.primary.main}`,
          }),
        },
      },
    },
  });

const myCustomFont = {
    fontFamily: 'NanumPen',
    fontStyle: 'normal',
    fontDisplay: 'swap',
    fontWeight: 300,
    src: `
      local('NanumPen'),
      url(${NanumPen}) format('truetype')
    `,
};

// 현재 이거 적용 안됨. woff 폰트 있는가
export const myThemeNanumPen = createUnifiedTheme({
    fontFamily: 'NanumPen',
    palette: palettes.light,
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                '@font-face': [myCustomFont, NanumBrush],
            },
        },
    },
    typography: {
        htmlFontSize: 12,
        // fontFamily: 'Comic Sans MS',
        fontFamily: 'NanumPen',
        h1: {
          fontSize: 54,
          fontWeight: 700,
          marginBottom: 10,
        },
        h2: {
          fontSize: 40,
          fontWeight: 700,
          marginBottom: 8,
        },
        h3: {
          fontSize: 3,
          fontWeight: 700,
          marginBottom: 6,
        },
        h4: {
          fontWeight: 700,
          fontSize: 28,
          marginBottom: 6,
        },
        h5: {
          fontWeight: 700,
          fontSize: 24,
          marginBottom: 4,
        },
        h6: {
          fontWeight: 700,
          fontSize: 20,
          marginBottom: 2,
        },
      },
      defaultPageTheme: 'home',
});

export const myThemeTypo = createUnifiedTheme({
    ...createBaseThemeOptions({
        palette: palettes.light,
        typography: {
          htmlFontSize: 16,
          fontFamily: 'Comic Sans MS',
        //   fontFamily: 'NanumPen',
          h1: {
            fontSize: 54,
            fontWeight: 700,
            marginBottom: 10,
          },
          h2: {
            fontSize: 40,
            fontWeight: 700,
            marginBottom: 8,
          },
          h3: {
            fontSize: 32,
            fontWeight: 700,
            marginBottom: 6,
          },
          h4: {
            fontWeight: 700,
            fontSize: 28,
            marginBottom: 6,
          },
          h5: {
            fontWeight: 700,
            fontSize: 24,
            marginBottom: 4,
          },
          h6: {
            fontWeight: 700,
            fontSize: 20,
            marginBottom: 2,
          },
        },
        defaultPageTheme: 'home',
      }),
});
