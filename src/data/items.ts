import { Item } from '../types/itemsType';

export const items: Item[] = [
    {
        date: new Date(2022, 3, 15),
        category: 'food',
        title: 'McDonalds',
        value: 32.99
    },
    {
        date: new Date(2022, 3, 16),
        category: 'food',
        title: 'Burger King',
        value: 28.00
    },
    {
        date: new Date(2022, 3, 20),
        category: 'food',
        title: 'Subway',
        value: 46.78
    },
    {
        date: new Date(2022, 10, 30),
        category: 'rent',
        title: 'mansion',
        value: 10000000.00
    },
    {
        date: new Date(2022, 10, 30),
        category: 'salary',
        title: 'FloatCode.inc',
        value: 120000
    },

]