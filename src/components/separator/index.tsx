import React from 'react'
import styled from 'styled-components/native'

type LineProps = {
  size: number;
  bg: string;
}
const Line = styled.View<LineProps>`
  width: 100%;
  height: ${({ size }) => size}px;

  background-color: ${({ bg }) => bg};
`;

type SeparatorProps = {
  size?: number;
  color?: string;
}
export const Separator = ({ size = 1, color = 'gray' }: SeparatorProps) => {
  return <Line size={size} bg={color} />
}
