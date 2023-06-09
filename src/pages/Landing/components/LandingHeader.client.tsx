import { styled } from '../../../stitches.config';

const HeaderWrapper = styled('header', {
  padding: '0 20px',
  width: '100%',
  height: '60px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  position: 'fixed',
  zIndex: 1000,
  color: 'white',
});

const ImpludeText = styled('span', {
  fontSize: '14pt',
  fontWeight: 900,
});

const InstagramLink = styled('a', {
  fontSize: '12pt',
  fontWeight: 500,
  color: '$white',
});

export function LandingHeader() {
  return (
    <HeaderWrapper>
      <ImpludeText>#IMPLUDE</ImpludeText>
      <InstagramLink href="https://www.instagram.com/implude_official/">
        Instagram
      </InstagramLink>
    </HeaderWrapper>
  );
}
