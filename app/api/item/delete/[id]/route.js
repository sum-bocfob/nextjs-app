import connectDB from "@/app/utils/database";
import { ItemModel } from "@/app/utils/schemaModel";
import { NextResponse } from "next/server";

export async function DELETE(request, context) {
    const { id } = await context.params;
    const reqBody = await request.json();
    try {
        await connectDB();
        const singleItem = await ItemModel.findById(id);
        if (singleItem.email === reqBody.email) {
            await ItemModel.deleteOne({ _id: id });
            return NextResponse.json({ message: "アイテム削除成功" });
        } else {
            return NextResponse.json({ message: "他の人が作成したアイテムです" });
        }
    } catch {
        return NextResponse.json({ message: "アイテム削除失敗" });
    }
}
