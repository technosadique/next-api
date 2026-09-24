import { NextResponse } from "next/server";
import mongoose from "mongoose";
import { connectionStr } from "../../lib/db";
import { Product } from "../../lib/model/product";

export async function GET() {

    let result = [];
    try {
        await mongoose.connect(connectionStr);
        result = await Product.find();
        return NextResponse.json({ success: true, result });

    }
    catch (error) {
        result = { success: false }
    }

}


export async function POST(request) {
    const payload = await request.json();
    await mongoose.connect(connectionStr);
    let product = new Product(payload);
    const result = await product.save();
    return NextResponse.json({ result: result, success: true }, { status: 201 });
}

