import { useEffect, useState } from 'react';
import * as C from './App.styles';
import { Item } from './types/itemsType';
import { Category } from './types/categoriesType';
import { items } from './data/items';
import { categories } from './data/categories';
import { filterListByMonth, getCurrentMonth } from './utils/dateFilter';



const App = () => {
  const [list, setList] = useState(items);//Geral list 
  const [filtered, setFilteredList] = useState<Item[]>([]);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());

  useEffect(() => {
    setFilteredList(
      filterListByMonth(list ,currentMonth)
    );
  }, [list, currentMonth]);

  return (
    <C.Container>
      <C.Header >

        <C.HeaderText>
          Perfinsys - Personal Finance System
        </C.HeaderText>

      </C.Header>
      <C.Body>
          ...
      </C.Body>
    </C.Container>
  );
}

export default App;