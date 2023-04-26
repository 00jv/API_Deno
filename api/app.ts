import { Application } from "https://deno.land/x/oak@v12.3.0/mod.ts";
import { config } from "https://deno.land/x/dotenv@v3.2.2/mod.ts";
import router  from './router/routes.ts'
// import { oakCors } from "https://deno.land/x/cors@v1.2.2/mod.ts";

const HOST = config().HOST ?? "127.0.0.1";
const PORT = config().PORT ?? 8080;

const app = new Application();

// app.use(oakCors()); 
 app.use(router.routes());
 app.use(router.allowedMethods());

console.log(`Deno is running: ${HOST}:${PORT}`);
await app.listen(`${HOST}:${PORT}`);