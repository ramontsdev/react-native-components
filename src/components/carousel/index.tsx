import React, { ReactElement, useState } from 'react';
import { Text, StyleSheet, NativeScrollEvent } from 'react-native';

import { normalizePx } from '../../utils/normalize-px';
import { Banner1, Banner2, Banner3 } from './banners'
import { CarouselContainer, DotWrap, ScrollViewWrap, SlideView, SliderWrap } from './styles';

const BANNERS = [Banner1, Banner2, Banner3];

export const Carousel = (): ReactElement => {
  const [indexActiveBanner, setIndexActiveBanner] = useState(0);

  const onchange = (nativeEvent: NativeScrollEvent): void => {
    if (nativeEvent) {
      const slide = Math.ceil(
        nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width,
      );

      if (slide !== indexActiveBanner) setIndexActiveBanner(slide);
    }
  };

  return (
    <>
      <CarouselContainer testID="carousel">
        <SliderWrap>
          <ScrollViewWrap
            onScroll={({ nativeEvent }): void => onchange(nativeEvent)}
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            horizontal
          >
            {BANNERS.map((Banner, index) => (
              <SlideView testID="carousel-element" key={index}>
                <Banner />
              </SlideView>
            ))}
          </ScrollViewWrap>
        </SliderWrap>
      </CarouselContainer>
      <DotWrap>
        {BANNERS.map((e, index) => (
          <Text
            key={index}
            style={
              indexActiveBanner === index ? styles.dotActive : styles.dot
            }
          >
            ●
          </Text>
        ))}
      </DotWrap>
    </>
  );
};

const styles = StyleSheet.create({
  dotActive: {
    marginLeft: 3,
    fontSize: normalizePx(2.1),
    textAlign: 'left',
    color: '#297AA3',
  },
  dot: {
    marginLeft: 3,
    fontSize: normalizePx(2.1),
    textAlign: 'left',
    color: '#E1E1E1',
  },
});
