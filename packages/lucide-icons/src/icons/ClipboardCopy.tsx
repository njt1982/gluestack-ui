import React from 'react';
import { Svg, Path, Rect } from 'react-native-svg';
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
      <Rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
      <Path d="M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2" />
      <Path d="M16 4h2a2 2 0 0 1 2 2v4" />
      <Path d="M21 14H11" />
      <Path d="m15 10-4 4 4 4" />
    </Svg>
  );
};
Icon.displayName = 'ClipboardCopy';
export const ClipboardCopy = React.memo(Icon);
