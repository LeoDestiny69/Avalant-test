import { useState } from "react";

const Products = [
{ id: 1, name: 'Laptop', category: 'Electronics', price: 999, stock: 5 },
 { id: 2, name: 'Mouse', category: 'Accessories', price: 29, stock: 150 },
 { id: 3, name: 'Keyboard', category: 'Accessories', price: 79, stock: 80 },
 { id: 4, name: 'Monitor', category: 'Electronics', price: 299, stock: 12 }
]

export default function Challenge2Page() {
    const[search, setSearch] = useState("");
    const[category, setCategory] = useState("All");
    const[sortAsc, setSortAsc] = useState(true);

    const filteredProducts = Products.filter(p => p.name.toLowerCase().includes(search.toLowerCase()))
    .filter(p => category === "All" ? true : p.category === category)
    .sort((a,b) => sortAsc ? a.price - b.price : b.price - a.price);

    return (

        <div>
            <input type="text" placeholder="Search by name" value={search} onChange={(e) => setSearch(e.target.value)} />
            <select value={category} onChange={(e) => setCategory(e.target.value)}>
                <option value="All">All Categories</option>
                <option value="Electronics">Electronics</option>
                <option value="Accessories">Accessories</option>
            </select>

            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Category</th>
                        <th style={{cursor:"pointer"}} onClick={() => setSortAsc(!sortAsc)}>Price{}{sortAsc ? "UP" : "DOWN"}</th>
                        <th>Stock</th>
                    </tr>
                </thead>

                <tbody>
                    {filteredProducts.map(p => (
                        <tr key={p.id} style={{backgroundColor : p.stock < 10 ? "red": ''}}>
                            <td>{p.name}</td>
                            <td>{p.category}</td>
                            <td>{p.price}</td>
                            <td>{p.stock}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}