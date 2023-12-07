import React, { useState } from "react"
import { Item } from "./types"

type Props = {
    list: Item[]
}

const FilterComponent = ({ list }: Props) => {

    const [filter, setFilter] = useState('')

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        const { value } = event.currentTarget
        setFilter(value)
    }

    return (
        <>
            <h2>Usuários</h2>
            <input onChange={handleChange} type="text" placeholder="Buscar por..." />
            <ul>
                {list
                    .filter(item => item.name.toLowerCase().includes(filter.toLowerCase()))
                    .map(item => (<li key={item.index}>{item.name}</li>))}
            </ul>
        </>
    )
}

export default FilterComponent