import { NextResponse } from "next/server";
import mongoose from "mongoose";
import { connectionStr } from "../../../lib/db";
import { Product } from "../../../lib/model/product";


export async function PUT(request, { params }) {
    const { productid } = await params;
    console.log(productid);
    const filter = { _id: productid }

    const payload = await request.json();
    await mongoose.connect(connectionStr);

    const result = await Product.findOneAndUpdate(filter, payload);
    return NextResponse.json({ result, success: true });
}


export async function GET(request, { params }) {
    const { productid } = await params;
    console.log(productid);
    await mongoose.connect(connectionStr);
    const filter = { _id: productid }
    const result = await Product.findById(filter);
    return NextResponse.json({ result, success: true });
}


export async function DELETE(request, { params }) {
    const { productid } = await params;

    await mongoose.connect(connectionStr);
    const filter = { _id: productid }
    const result = await Product.deleteOne(filter);

    if (!productid) {
        return NextResponse.json(
            {
                result: "Product ID is required",
                success: false
            },
            { status: 400 }
        );
    }
    else {
        return NextResponse.json(
            {
                result: "product deleted",
                success: true
            },
            { status: 200 }
        );
    }

} 
