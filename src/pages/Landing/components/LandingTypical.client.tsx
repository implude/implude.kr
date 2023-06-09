/**
 * based on [react-typical](https://github.com/catalinmiron/react-typical)
 */

import { useRef, useEffect, memo } from 'react';

import { type, type as loopedType } from '../../../lib/typical';

const Typical = ({
  steps,
  loop,
}: {
  steps: (string | number)[];
  wrapper: string;
  loop: number;
}) => {
  const typicalRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (loop === Infinity) {
      void type(typicalRef.current!, ...steps, loopedType);
    } else if (typeof loop === 'number') {
      const tempArr = Array<(string | number)[]>(loop);
      void type(typicalRef.current!, ...tempArr.fill(steps).flat());
    } else {
      void type(typicalRef.current!, ...steps);
    }
  });

  return <span ref={typicalRef} />;
};

export default memo(Typical);
