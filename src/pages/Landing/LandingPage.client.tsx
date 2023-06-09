import { styled } from '../../stitches.config';

import { LandingHeader } from './components/LandingHeader.client';
import { LandingIntro } from './components/LandingIntro.client';
import { LandingContent } from './LandingContent';

const LandingWrapper = styled('main', {
  display: 'flex',
  flexDirection: 'column',
});

export function LandingPage() {
  return (
    <LandingWrapper>
      <LandingHeader />
      <LandingIntro />
      <LandingContent />
    </LandingWrapper>
  );
}
