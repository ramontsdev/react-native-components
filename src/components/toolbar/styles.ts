import styled from "styled-components/native"

import { normalizePx } from "../../utils/normalize-px"

export const ToolbarContainer = styled.View`
  width: 100%;
  height: ${normalizePx(4.8)}px;

  flex-direction: row;

  background-color: aqua;
`
export const LeftSideToolbarWrap = styled.View`
  flex: 1;
  height: 100%;

  background-color: aquamarine;
`
export const RightSideToolbarWrap = styled.View`
  flex: 1;
  height: 100%;

  background-color: azure;
`
