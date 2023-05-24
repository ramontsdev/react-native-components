import {
  Animated,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import { useCallback, useEffect, useRef, useState } from 'react';
import { SelectListProps } from './select-list-props';

type L1Keys = { key?: any; value?: any; disabled?: boolean };

export const SelectList = ({
  setSelected,
  placeholder,
  boxStyles,
  inputStyles,
  dropdownStyles,
  dropdownItemStyles,
  dropdownTextStyles,
  maxHeight,
  data,
  defaultOption,
  searchIcon,
  arrowIcon,
  closeIcon,
  search = true,
  searchPlaceholder = 'search',
  notFoundText = 'No data found',
  disabledItemStyles,
  disabledTextStyles,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onSelect = () => { },
  save = 'key',
  dropdownShown = false,
  fontFamily
}: SelectListProps) => {

  const oldOption = useRef(null);
  const [_firstRender, _setFirstRender] = useState<boolean>(true);
  const [dropdown, setDropdown] = useState<boolean>(dropdownShown);
  const [selectedVal, setSelectedVal] = useState<any>('');
  const [height, setHeight] = useState<number>(200);
  const animatedValue = useRef(new Animated.Value(0)).current;
  const [filteredData, setFilteredData] = useState(data);

  const slideDown = useCallback(() => {
    setDropdown(true);
    Animated.timing(animatedValue, {
      toValue: height,
      duration: 500,
      useNativeDriver: false,

    }).start();
  }, [animatedValue, height]);

  const slideUp = useCallback(() => {
    Animated.timing(animatedValue, {
      toValue: 0,
      duration: 500,
      useNativeDriver: false,

    }).start(() => setDropdown(false));
  }, [animatedValue]);

  useEffect(() => {
    if (maxHeight)
      setHeight(maxHeight);
  }, [maxHeight]);

  useEffect(() => {
    setFilteredData(data);
  }, [data]);

  useEffect(() => {
    if (_firstRender) {
      _setFirstRender(false);
      return;
    }
    onSelect();
  }, [_firstRender, onSelect, selectedVal]);

  useEffect(() => {
    if (!_firstRender && defaultOption && oldOption.current != defaultOption.key) {
      oldOption.current = defaultOption.key;
      setSelected(defaultOption.key);
      setSelectedVal(defaultOption.value);
    }
    if (defaultOption && _firstRender && defaultOption.key != undefined) {

      oldOption.current = defaultOption.key;
      setSelected(defaultOption.key);
      setSelectedVal(defaultOption.value);
    }
  }, [_firstRender, defaultOption, setSelected]);

  useEffect(() => {
    if (!_firstRender) {
      if (dropdownShown)
        slideDown();
      else
        slideUp();

    }
  }, [_firstRender, dropdownShown, slideDown, slideUp]);

  return (
    <View>
      {
        (dropdown && search)
          ?
          <View style={[styles.wrapper, boxStyles]}>
            <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1 }}>
              {
                (!searchIcon)
                  ?
                  <Image
                    source={require('./assets/images/search.png')}
                    resizeMode='contain'
                    style={{ width: 20, height: 20, marginRight: 7 }}
                  />
                  :
                  searchIcon
              }
              <TextInput
                placeholder={searchPlaceholder}
                onChangeText={(val) => {
                  const result = data.filter((item: L1Keys) => {
                    val.toLowerCase();
                    const row = item.value.toLowerCase();
                    return row.search(val.toLowerCase()) > -1;
                  });
                  setFilteredData(result);
                }}
                style={[{ padding: 0, height: 20, flex: 1, fontFamily }, inputStyles]}
              />
              <TouchableOpacity onPress={() => slideUp()} >
                {
                  (!closeIcon)
                    ?
                    <Image
                      source={require('./assets/images/close.png')}
                      resizeMode='contain'
                      style={{ width: 17, height: 17 }}
                    />
                    :
                    closeIcon
                }
              </TouchableOpacity>
            </View>
          </View>
          :
          <TouchableOpacity style={[styles.wrapper, boxStyles]} onPress={() => { if (!dropdown) { slideDown(); } else { slideUp(); } }}>
            <Text style={[{ fontFamily }, inputStyles]}>{(selectedVal == '') ? (placeholder) ? placeholder : 'Select option' : selectedVal}</Text>
            {
              (!arrowIcon)
                ?
                <Image
                  source={require('./assets/images/chevron.png')}
                  resizeMode='contain'
                  style={{ width: 20, height: 20 }}
                />
                :
                arrowIcon
            }
          </TouchableOpacity>
      }
      {
        (dropdown)
          ?
          <Animated.View style={[{ maxHeight: animatedValue }, styles.dropdown, dropdownStyles]}>
            <ScrollView contentContainerStyle={{ paddingVertical: 10, overflow: 'hidden' }} nestedScrollEnabled={true}>
              {
                (filteredData.length >= 1)
                  ?
                  filteredData.map((item: L1Keys, index: number) => {
                    const key = item.key ?? item.value ?? item;
                    const value = item.value ?? item;
                    const disabled = item.disabled ?? false;
                    if (disabled) {
                      return (
                        <TouchableOpacity style={[styles.disabledoption, disabledItemStyles]} key={index} /* onPress={() => { }} */>
                          <Text style={[{ color: '#c4c5c6', fontFamily }, disabledTextStyles]}>{value}</Text>
                        </TouchableOpacity>
                      );
                    } else {
                      return (
                        <TouchableOpacity style={[styles.option, dropdownItemStyles]} key={index} onPress={() => {
                          if (save === 'value') {
                            setSelected(value);
                          } else {
                            setSelected(key);
                          }

                          setSelectedVal(value);
                          slideUp();
                          setTimeout(() => { setFilteredData(data); }, 800);

                        }}>
                          <Text style={[{ fontFamily }, dropdownTextStyles]}>{value}</Text>
                        </TouchableOpacity>
                      );
                    }
                  })
                  :
                  <TouchableOpacity style={[styles.option, dropdownItemStyles]} onPress={() => {
                    setSelected(undefined);
                    setSelectedVal('');
                    slideUp();
                    setTimeout(() => setFilteredData(data), 800);
                  }}>
                    <Text style={[{ fontFamily }, dropdownTextStyles]}>{notFoundText}</Text>
                  </TouchableOpacity>
              }
            </ScrollView>
          </Animated.View>
          :
          null
      }
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: { borderWidth: 1, borderRadius: 10, borderColor: 'gray', paddingHorizontal: 20, paddingVertical: 12, flexDirection: 'row', justifyContent: 'space-between' },
  dropdown: { borderWidth: 1, borderRadius: 10, borderColor: 'gray', marginTop: 10, overflow: 'hidden' },
  option: { paddingHorizontal: 20, paddingVertical: 8, overflow: 'hidden' },
  disabledoption: { paddingHorizontal: 20, paddingVertical: 8, flexDirection: 'row', alignItems: 'center', backgroundColor: 'whitesmoke', opacity: 0.9 }

});
