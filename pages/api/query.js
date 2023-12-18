import QueryModel from "@/app/Models/Query";
import { db } from "@/app/database";









export default function handler(req, res) {


    switch (req.method) {
        case 'POST':
            return createQuery(req, res);;
        case 'GET':
            return getQuery(req, res);
        default:
            return res.status(400).json({ message: 'Bad request' })
    }

}

const createQuery = async (req, res) => {
    await db.connectDB();
    try {
            const newQuery = new QueryModel({ ...req.body});
        console.log(newQuery)
            await newQuery.save();
            await db.disconnect();
            return res.status(201).json(newQuery);


    } catch (error) {
        console.log(error);
        res.status(400).json({
            message: error.message || 'Revise logs del servidor'
        })
    }
}



const getQuery = async (req, res) => {

    await db.connectDB();
    const queries = await QueryModel.find()      
    .sort({ createdAt: 'desc' })
    .lean()
    return res.status(200).json(queries)

}