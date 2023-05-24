import { Carousel } from './components/carousel';
import { HeaderContainer } from './components/header-container';
import { SelectList } from './components/select-list';
import { Toolbar } from './components/toolbar';

const ordersBy = [
  { key: '1', value: 'mais recentes' },
  { key: '2', value: 'mais antigos' }
];

export const MyApp = () => {
  return (
    <>
      <HeaderContainer>
        <Toolbar />
        <Carousel />
      </HeaderContainer>
      <SelectList
        setSelected={(val: string) => console.warn(val)}
        data={ordersBy}
        save='value'
      />
    </>
  )
}
