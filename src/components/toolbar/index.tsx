import { Container } from "../container"
import { LeftSideToolbarWrap, RightSideToolbarWrap, ToolbarContainer } from "./styles"

export const Toolbar = () => {
  return (
    <Container>
      <ToolbarContainer>
        <LeftSideToolbarWrap></LeftSideToolbarWrap>
        <RightSideToolbarWrap></RightSideToolbarWrap>
      </ToolbarContainer>
    </Container>
  )
}
