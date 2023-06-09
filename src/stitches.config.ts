import { createStitches } from '@stitches/react';

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    fonts: {
      GeekbleMalang: 'GeekbleMalang2WOFF2, sans-serif',
      SuitVariable: '"SUIT Variable", sans-serif',
      PretendardVariable: '"Pretendard Variable", sans-serif',
    },
    colors: {
      white: '#FFFFFF',
      black: '#000000',
      gray50: '#FAFAFA',
      gray100: '#F4F4F5',
      gray200: '#E5E5E5',
      gray300: '#D4D4D4',
      gray400: '#A3A3A3',
      gray500: '#737373',
      gray600: '#525252',
      gray700: '#404040',
      gray800: '#262626',
      gray900: '#171717',
      blue50: '#EFF6FF',
      blue100: '#DBEAFE',
      blue200: '#BFDBFE',
      blue300: '#93C5FD',
      blue400: '#60A5FA',
      blue500: '#3B82F6',
      blue600: '#2563EB',
      blue700: '#1D4ED8',
      blue800: '#1E40AF',
      blue900: '#1E3A8A',
    },
  },
  media: {
    sm: '(max-width: 640px)',
    md: '(max-width: 768px)',
    lg: '(max-width: 1024px)',
    xl: '(max-width: 1280px)',
    '2xl': '(max-width: 1536px)',
  },
});

export const globalStyles = globalCss({
  '*': {
    boxSizing: 'border-box',
    fontFamily: '$SuitVariable',
    userSelect: 'none',
    wordBreak: 'keep-all',
  },
  'html, body, #root': {
    margin: 0,
    padding: 0,
    width: '100%',
    height: '100%',
  },
  body: {
    backgroundColor: '$black',
  },
  a: {
    textDecoration: 'none',
  },
});
