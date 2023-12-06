import { Item } from "./types"

type Props = {
    list: Item[]
}

const FilterComponent = ({ list }: Props) => {
    return (
        <>
            <h2>Usuários</h2>
            <input type="text" placeholder="Buscar por..." />
            <ul>
                {list.map(item => (<li key={item.index}>{item.name}</li>))}
            </ul>
        </>
    )
}

export default FilterComponent