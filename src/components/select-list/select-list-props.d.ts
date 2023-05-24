/* eslint-disable @typescript-eslint/ban-types */

import type * as React from 'react';
import { TextStyle, ViewStyle } from 'react-native';

export interface SelectListProps {
  /**
  * Função para definir o valor da opção selecionada que será armazenado em seu estado local
  */
  setSelected: Function;

  /**
  * Texto de espaço reservado que será exibido na caixa de seleção
  */
  placeholder?: string;

  /**
  * Estilos adicionais para caixa de seleção
  */
  boxStyles?: ViewStyle;

  /**
  * Estilos adicionais para o texto da caixa de seleção
  */
  inputStyles?: TextStyle;

  /**
  * Estilos adicionais para exibição da ScrollView
  */
  dropdownStyles?: ViewStyle;

  /**
  * Estilos adicionais para item da lista
  */
  dropdownItemStyles?: ViewStyle;

  /**
  * Estilos adicionais para texto dos itens da lista
  */
  dropdownTextStyles?: TextStyle;

  /**
  * Altura máxima do wrapper
  */
  maxHeight?: number;

  /**
  * Dados que serão iterados como opções da lista de seleção
  */
  data: Array<object>;

  /**
  * A opção padrão da lista de seleção
  */
  defaultOption?: { key: any; value: any };

  /**
  * Passe qualquer JSX para este prop como Texto, Imagem ou Ícone para mostrar em vez do ícone de pesquisa
  */
  searchIcon?: JSX.Element;

  /**
  * Passe qualquer JSX para este prop como Texto, Imagem ou Ícone para mostrar em vez do ícone chevron
  */
  arrowIcon?: JSX.Element;

  /**
  * Defina como false se você não quiser usar a funcionalidade de pesquisa
  */
  search?: boolean;

  /**
  * Defina como false se você não quiser usar a funcionalidade de pesquisa
  */
  searchPlaceholder?: string;

  /**
  * Acionar uma ação quando a opção for selecionada
  */
  onSelect?: () => void;

  /**
  * Definir fontFamily de todo o componente Text
  */
  fontFamily?: string;

  /**
  * Defina isso para alterar o texto de falha de pesquisa padrão
  */
  notFoundText?: string;

  /**
  * Estilos adicionais para item de lista desativado
  */
  disabledItemStyles?: ViewStyle;

  /**
  * Estilos adicionais para texto de itens de lista desativados
  */
  disabledTextStyles?: TextStyle;

  /**
  * O que armazenar dentro do seu estado local (chave ou valor)
  */
  save?: 'key' | 'value';

  /**
  * Controle o menu suspenso com este suporte
  */
  dropdownShown?: boolean;

  /**
  *  Passe qualquer JSX para este suporte como Texto, Imagem ou Ícone para mostrar em vez de fechar o ícone
  */
  closeIcon?: JSX.Element;
}

declare class SelectList extends React.Component<SelectListProps> { }

export {
  SelectList
};
