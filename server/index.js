import  Express  from "express";
import cors from "cors";
import mongoose from "mongoose";
 import {usersRouter}from "./routes/usersRoute.js";
import {recipesRouter} from "./routes/recipesRouter.js";
const app = Express();
app.use(Express.json());
app.use(cors());
app.use("/auth", usersRouter);
app.use("/recipes", recipesRouter);

mongoose.connect("mongodb+srv://majermaf:Y5EzQiuIIjCJyJuz@cluster0.awp7ws4.mongodb.net/Cluster0?retryWrites=true&w=majority")






app.listen(5000, () => console.log("Server running on port 5000"));