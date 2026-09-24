"use client";
import './../../style.css';
import { useState, useEffect, use } from "react";
import { useRouter } from 'next/navigation';
import Link from 'next/link';



export default function Page({ params }) {
    const { editproduct } = use(params);

    const [name, setname] = useState('');
    const [price, setprice] = useState('');
    const [color, setcolor] = useState('');
    const [company, setcompany] = useState('');
    const [category, setcategory] = useState('');


    useEffect(() => {
        getproductdetails();
    }, []);


    const getproductdetails = async () => {
        const base = process.env.NEXT_BASE_URL; // http://localhost:3000 locally
        let data = await fetch(`/api/products/${editproduct}`);
        data = await data.json();
        console.log(data);

        if (data.success) {
            let result = data.result;
            setname(result.name);
            setprice(result.price);
            setcolor(result.color);
            setcompany(result.company);
            setcategory(result.category);
        }
    };

    const updateproduct = async () => {
        if (!name || !price || !color || !company || !category) {
            alert("Please fill all fields");
            return;
        }
        const base = process.env.NEXT_BASE_URL; // http://localhost:3000 locally
        let data = await fetch(`/api/products/${editproduct}`, {
            method: "PUT",
            body: JSON.stringify({ name, price, color, company, category })
        });

        let responseData = await data.json();
        console.log(responseData);
        if (responseData.success) {
            alert("Product updated successfully");
            router.push('/products');

        } else {
            alert("Error: " + responseData.message);
        }

    }

    const clearform = () => {
        setname("");
        setprice("");
        setcolor("");
        setcompany("");
        setcategory("");
    }


    const router = useRouter();
    return (
        <div className="user-form">
            <h1>Update Product</h1>

            <input
                type="text"
                placeholder="Name"
                className="input-field"
                value={name}
                onChange={(e) => setname(e.target.value)}
            />

            <input
                type="number"
                placeholder="Price"
                className="input-field"
                value={price}
                onChange={(e) => setprice(e.target.value)}
            />

            <input
                type="text"
                placeholder="Color"
                className="input-field"
                value={color}
                onChange={(e) => setcolor(e.target.value)}
            />


            <input
                type="text"
                placeholder="Company"
                className="input-field"
                value={company}
                onChange={(e) => setcompany(e.target.value)}
            />


            <input
                type="text"
                placeholder="Category"
                className="input-field"
                value={category}
                onChange={(e) => setcategory(e.target.value)}
            />



            <div className="product-actions">
                <button
                    type="button"
                    onClick={updateproduct}
                    className="btn update-btn"
                >
                    Update Product
                </button>

                <Link
                    href="/products"
                    className="btn list-btn"
                >
                    Product List
                </Link>
            </div>



        </div>
    );

}
