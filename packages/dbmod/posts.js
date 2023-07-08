import { MongoClient } from "mongodb";

const uri = `mongodb+srv://santoshmondal:JGmZY8yKs5Yxf7j8@cluster0.8t3kqye.mongodb.net/`;
const app_db = "sample_training";

export async function readAll(req, res) {
  try {
    const client = new MongoClient(uri);
    const col = client.db(app_db).collection("posts");

    let list = await col.find({}).limit(10).toArray();

    res.json(list);
  } catch (err) {
    console.log(err);
  }
}
