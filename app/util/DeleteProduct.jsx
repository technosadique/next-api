"use client";
import { useRouter } from "next/navigation";
export default function DeleteProduct(props) {
    const router = useRouter();
    const id = props.id;
    console.log(id);

    const deleteproduct = async () => { 
        const base = process.env.NEXT_BASE_URL; // http://localhost:3000 locally      
        let result = await fetch(`${base}/api/products/` + id, {
            method: "DELETE"
        }
        );
        result = await result.json();

        console.log(result);
        if (result.success) {
            alert('product deleted');
            router.push("/products");

        }
    }

    return (<button onClick={deleteproduct} className="delete-btn">Delete</button>);
}