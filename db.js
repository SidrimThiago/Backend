import express  from "express";
import { MongoClient } from "mongodb"

const url = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(url);
const dbName = 'Focusthink';
const app = express();

export default async function main() {
    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db(dbName);
    const collection = db.collection('Pacientes');
    const documents = await collection.find({}).toArray();
    console.log('Documents:', documents);
    return 'done.';
  }
  
  main()
    .then(console.log)
    .catch(console.error)
    .finally(() => client.close());