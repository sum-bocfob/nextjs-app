import connectDB from "@/app/utils/database";
import { NextResponse } from "next/server";
import { ItemModel } from "@/app/utils/schemaModel";

export async function GET() {
    try {
        await connectDB();
        const allItems = await ItemModel.find();
        return NextResponse.json({ message: "アイテム読み取り成功（オール）", allItems: allItems });
    } catch {
        return NextResponse.json({ message: "アイテム読み取り失敗（オール）" });
    }
}

export const revalidate = 0;
