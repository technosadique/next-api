"use client";
import { useRouter } from "next/navigation";
export default function DeleteProduct(props) {
    const router = useRouter();
    const id = props.id;
    console.log(id);

    const deleteproduct = async () => {       
        let result = await fetch("http://localhost:3000/api/products/" + id, {
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