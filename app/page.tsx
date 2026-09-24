import Link from 'next/link';
import "./style.css";
export default function Home() {
  return (
<div className="home-page">
    <main className="home-container">

        <div className="home-header">
            <h1>Product Management</h1>
            <p>Manage your products easily</p>
        </div>

        <div className="home-cards">

            <Link href="/addproduct" className="home-card add-card">
                <div className="card-icon">+</div>
                <h2>Add Product</h2>
                <p>Create and save a new product</p>
            </Link>

            <Link href="/products" className="home-card products-card">
                <div className="card-icon">📦</div>
                <h2>Products</h2>
                <p>View and manage all products</p>
            </Link>

        </div>

    </main>
</div>
  );
}
