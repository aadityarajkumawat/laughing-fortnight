import { MongoClient } from "mongodb";

export async function POST(req: Request) {
  const body = await req.json();

  const client = new MongoClient(process.env.MONGO_URI!);
  await client.connect();

  await client.db("website").collection("stats").insertOne(body);

  return new Response("ok", { status: 200 });
}
