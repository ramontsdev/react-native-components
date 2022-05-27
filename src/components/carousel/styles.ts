import styled from 'styled-components/native';
import { DEVICE_WINDOW_WIDTH } from '../../utils/dimensions';

import { normalizePx } from '../../utils/normalize-px';

export const CarouselContainer = styled.View`
  width: ${DEVICE_WINDOW_WIDTH}px;
  height: ${normalizePx(32)}px; /* ${normalizePx(34.3)}; */ /* 250px; */

  justify-content: center;
  align-items: center;

  background-color: #ffccdd;
`;
export const SliderWrap = styled.View``;

export const SlideView = styled.View`
  width: ${DEVICE_WINDOW_WIDTH}px;

  justify-content: center;
  align-items: center;
`;

export const ScrollViewWrap = styled.ScrollView``;

export const DotWrap = styled.View`
  width: 100%; /* não tinha */

  flex-direction: row;
  align-self: center;
  justify-content: center; /* não tinha */

  background-color: white; /* não tinha */
`;
