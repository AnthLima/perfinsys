import * as C from './styles';
import { Item } from '../../types/itemsType';
type Props = {
    list: Item[]
}
export const TableArea = ({ list }: Props) => {
    return (
        <C.Table>
            <thead>
                <tr>
                    <C.TabelHeadColumn width={100}>Data</C.TabelHeadColumn>
                    <C.TabelHeadColumn width={130}>Category</C.TabelHeadColumn>
                    <C.TabelHeadColumn>Title</C.TabelHeadColumn>
                    <C.TabelHeadColumn width={150}>Value</C.TabelHeadColumn>
                </tr>
            </thead>
            <tbody>
                {list.map((item, index)=> (
                    <tr key={index}>
                        <td></td>
                        <td></td>
                        <td>{item.title}</td>
                        <td></td>
                    </tr>
                ))}
            </tbody>
        </C.Table>
    ); 
}

export default TableArea