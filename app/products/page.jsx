import Link from "next/link";
import './../style.css';
import DeleteProduct from "../util/DeleteProduct";
async function getProducts() {
    let data = await fetch("http://localhost:3000/api/products",{cache:"no-cache"});
    data = await data.json();
    return data.result;
}

export default async function Page() {
    const products = await getProducts();
    return (

        <div className="user-list-container">
            <h1>Product List</h1>

            <div className="product-table-container">
    <table className="product-table">
        <thead>
            <tr>
                <th>Name</th>
                <th>Price</th>
                <th>Company</th>
                <th>Color</th>
                <th>Category</th>
                <th>Action</th>
            </tr>
        </thead>

        <tbody>
            {products.map((product) => (
                <tr key={product._id}>
                    <td>
                        <Link
                            href={`/products/${product._id}/view`}
                            className="user-name"
                        >
                            {product.name}
                        </Link>
                    </td>

                    <td>{product.price}</td>
                    <td>{product.company}</td>
                    <td>{product.color}</td>
                    <td>{product.category}</td>

                    <td>
                        <Link
                            href={`/products/${product._id}`}
                            className="edit-btn"
                        >
                            Edit
                        </Link>
                        <DeleteProduct id={product._id} />
                    </td>
                </tr>
            ))}
        </tbody>
    </table>
</div>
        </div>


    )
}