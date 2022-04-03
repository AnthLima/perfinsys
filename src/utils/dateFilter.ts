import { Item } from '../types/itemsType'
export const getCurrentMonth = () => {
    let now = new Date();
    return `${now.getFullYear()}-${now.getMonth()+1}`;
}

//get old list filter and return one new list from date:
export const filterListByMonth = (list: Item[], date: string): Item[] => {
    let newList: Item[] = [];
    let [year, month] = date.split('-');

    for(let i in list){
        if(
            list[i].date.getFullYear() === parseInt(year) &&
            (list[i].date.getMonth() + 1) === parseInt(month) 
        ){
            newList.push(list[i]);
        } 
    }
    return newList;// new list of items of same year and month
}

export const formatDateBR = (date: Date): string => {
    let year = date.getFullYear();
    let month = date.getMonth()+1;
    let day = date.getDate();

    return `${addZeroToDate(day)}/${addZeroToDate(month)}/${year}`;
}

export const formatDateUSA = (date: Date): string => {
    let year = date.getFullYear();
    let month = date.getMonth()+1;
    let day = date.getDate();

    return `${addZeroToDate(month)}/${addZeroToDate(day)}/${year}`;
}

const addZeroToDate = (n:number): string => n < 10 ? `0${n}` : `${n}`;
 