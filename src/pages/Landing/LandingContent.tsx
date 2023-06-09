import { css, styled } from '../../stitches.config';

const ContentWrapper = styled('section', {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
});

const LandingContext = styled('span', {
  padding: '40px 0',
  width: '100%',
  maxWidth: '1024px',
  display: 'flex',
  flexDirection: 'column',
  color: '$white',
});

export function LandingContent() {
  return (
    <ContentWrapper>{/* <LandingContext></LandingContext> */}</ContentWrapper>
  );
}
