import { Carousel } from './components/carousel';
import { HeaderContainer } from './components/header-container';
import { Toolbar } from './components/toolbar';

export const MyApp = () => {
  return (
    <HeaderContainer>
      <Toolbar />
      <Carousel />
    </HeaderContainer>
  )
}
