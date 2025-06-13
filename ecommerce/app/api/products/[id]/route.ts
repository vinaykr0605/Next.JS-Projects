import { NextRequest } from "next/server.js";
import { connectToDb } from "../../db";
export async function GET(
  request: NextRequest,
  { params }: { arams: { id: string } }
) {
  const { db } = await connectToDb();
  const id = params.id;

  const product = await db.collection("products").findOne({ id: id });

  if (!product) {
    return new Response("Product not found", {
      status: 404,
    });
  }

  return new Response(JSON.stringify(product), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
