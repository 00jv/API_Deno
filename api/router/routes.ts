import { Router } from "https://deno.land/x/oak@v12.3.0/mod.ts";
import { getTestes, getTeste, addTeste } from "../controller/teste_controller.ts";

const router = new Router()

router.get("/api/v1/teste/:id", getTestes)
      .get("/api/v1/teste/:id/:seconds", getTeste)
      .post("/api/v1/teste/add/:id", addTeste)

export default router 