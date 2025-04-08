import express from "express";
import router from "./router.js";

const app = express();
const port = parseInt(process.env.PORT, 10) || 3000;

app.use(express.json());
app.use("/api", router);

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/api`);
});
