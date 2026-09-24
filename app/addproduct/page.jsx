"use client";
import './../style.css';
import { useState } from "react";



export default function Page() {
    const [name, setname] = useState('');
    const [price, setprice] = useState('');
    const [color, setcolor] = useState('');
    const [company, setcompany] = useState('');
    const [category, setcategory] = useState('');



    const addproduct = async () => {
        if (!name || !price || !color || !company || !category) {
        alert("Please fill all fields");
        return;
    }
        let data = await fetch("http://localhost:3000/api/products", {
            method: "POST",
            body: JSON.stringify({ name, price, color, company, category })
        });

        let responseData = await data.json();
        console.log(responseData);
        if (responseData.success) {
            alert("Product added successfully");
            setname("");
            setprice("");
            setcolor("");
            setcompany("");
            setcategory("");
            
        } else {
            alert("Error: " + responseData.message);
        }

    }

    const clearform=()=>{
            setname("");
            setprice("");
            setcolor("");
            setcompany("");
            setcategory("");
    }

    return (
        <div className="user-form">
            <h1>Add New Product</h1>

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



            <button onClick={addproduct} className="btn">
                Add Product
            </button>


            <button onClick={clearform} className="btnclear">Clear</button>
        </div>
    );

}
