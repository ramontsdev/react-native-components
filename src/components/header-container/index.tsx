import { Platform, StatusBar } from "react-native"
import styled from "styled-components/native"
import { normalizePx } from "../../utils/normalize-px"
import { Separator } from "../separator"

const HeaderWrapper = styled.View`
  width: 100%;

  background-color: aliceblue;
`
const StatusBarWrap = styled.View`
  width: 100%;
  height: ${Platform.OS === 'ios' ? Number(StatusBar.currentHeight) + normalizePx(5.5) : StatusBar.currentHeight}px;

  background-color: blanchedalmond;
`
type Props = {
  children?: any; // ReactNode;
}

export const HeaderContainer = ({ children }: Props) => {
  return (
    <>
      <HeaderWrapper>
        <StatusBarWrap />
        {children}
      </HeaderWrapper>
      <Separator />
    </>
  )
}
