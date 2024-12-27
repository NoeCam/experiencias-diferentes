//Importamos las dependencias.
import express from "express";
//Importamos las rutas de los usuarios y de las entradas.
import entriesRouter from "./entriesRouter.js";
import userRouter from "./userRouter.js";
//Creamos un router.
const router = express.Router();
//Indicamos a express dónde están las rutas de los usuarios y las entradas.
router.use(entriesRouter);
router.use(userRouter);

export default router;
