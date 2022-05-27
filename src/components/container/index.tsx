import React from 'react'
import { StyleProp, ViewStyle } from 'react-native';
import styled from 'styled-components/native'

const ContainerWrap = styled.View`
  width: 100%;

  align-items: center;

  background-color: blue;
`;
const Wrapper = styled.View`
  width: 95%;
`;

type ContainerProps = {
  style?: StyleProp<ViewStyle>;
  children?: any;
}
export const Container = ({ style, children }: ContainerProps) => {
  return (
    <ContainerWrap style={style}>
      <Wrapper>
        {children}
      </Wrapper>
    </ContainerWrap>
  )
}
