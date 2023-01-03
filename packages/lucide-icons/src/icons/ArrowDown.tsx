import React from 'react';
import { Svg, Line, Polyline } from 'react-native-svg';
const Icon = (props: any) => {
  const { color = 'black', size = 24 } = props;
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={`${color}`}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <Line x1="12" y1="5" x2="12" y2="19" />
      <Polyline points="19 12 12 19 5 12" />
    </Svg>
  );
};
Icon.displayName = 'ArrowDown';
export const ArrowDown = React.memo(Icon);
