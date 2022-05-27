import styled from "styled-components/native";
import { normalizePx } from '../../../utils/normalize-px';

export const Container = styled.View`
  width: ${normalizePx(48.9)}px;
  height: 208px;

  background-color: #ffcc00;
`;

export const Banner1 = () => {
  return (
    <Container>
    </Container>
  )
}
