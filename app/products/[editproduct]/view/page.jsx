import './../../../style.css';
async function getProduct(id) {
    const base = process.env.NEXT_PUBLIC_BASE_URL; // http://localhost:3000 locally
    let data = await fetch(`${base}/api/products/${id}`);
    data = await data.json();
    return data.result;
}



export default async function Page({ params }) {
    console.log(params);
    const { editproduct } = await params;

    const product = await getProduct(editproduct);
    console.log(product);
    return (
        <div className="product-detail">
            <h1>Product Detail</h1>

            <div className="product-info">
                <div className="product-row">
                    <span>Name</span>
                    <strong>{product.name}</strong>
                </div>

                <div className="product-row">
                    <span>Price</span>
                    <strong>₹{product.price}</strong>
                </div>

                <div className="product-row">
                    <span>Company</span>
                    <strong>{product.company}</strong>
                </div>

                <div className="product-row">
                    <span>Color</span>
                    <strong>{product.color}</strong>
                </div>

                <div className="product-row">
                    <span>Category</span>
                    <strong>{product.category}</strong>
                </div>
            </div>
        </div>
    )
}