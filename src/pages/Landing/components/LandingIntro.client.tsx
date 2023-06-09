import { styled } from '../../../stitches.config';

import Typical from './LandingTypical.client';

const IntroWrapper = styled('section', {
  width: '100%',
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  background: '$black',
});

const IntroMask = styled('div', {
  width: '100%',
  height: '100vh',
  position: 'absolute',
  top: 0,
  left: 0,
  backgroundColor: '$black',
  opacity: 0.65,
});

const IntroText = styled('span', {
  fontSize: '72pt',
  fontWeight: 900,
  fontFamily: '$GeekbleMalang',
  color: '$white',
  zIndex: 1,
  textAlign: 'center',
  '@sm': {
    fontSize: '42pt',
  },
});

const TypedText = styled('span', {
  paddingLeft: '12px',
  fontSize: '72pt',
  fontWeight: 900,
  color: '$blue500',
  zIndex: 1,
  '@sm': {
    fontSize: '42pt',
  },
  '& *': {
    fontFamily: '$GeekbleMalang',
  },
});

const ScrollTarget = styled('div', {
  position: 'absolute',
  bottom: '60px',
  left: '50%',
  transform: 'translateX(-50%)',
  color: '$white',
});

const ScrollArrow = styled('div', {
  padding: '3px',
  width: '20px',
  height: '20px',
  border: 'solid $white',
  borderWidth: '0 3px 3px 0',
  display: 'inline-block',
  transform: 'rotate(45deg)',
});

export function LandingIntro() {
  const typedArr = [
    'IT',
    'SOLUTION',
    'PROGRAM',
    'ITNUN',
    'TUTOR',
    'IMPLUDE',
    'EXPLUDE',
    'STA+C',
  ];

  function changeArr() {
    const arr: (string | number)[] = [];
    for (let i = 0; i < typedArr.length; i++) {
      arr.push(typedArr[i]);
      arr.push(1000);
    }
    return arr;
  }

  return (
    <IntroWrapper>
      <IntroMask />
      <IntroText>MAKE</IntroText>
      <TypedText>
        <Typical steps={changeArr()} wrapper="span" loop={Infinity} />
      </TypedText>
      <IntroText>AS YOU THINK</IntroText>
      <ScrollTarget>{/* <ScrollArrow /> */}</ScrollTarget>
    </IntroWrapper>
  );
}
