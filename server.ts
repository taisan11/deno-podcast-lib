import { Hono } from "https://deno.land/x/hono@v3.9.2/mod.ts";
import {
  logger,
  serveStatic,
} from "https://deno.land/x/hono@v3.9.2/middleware.ts";

const app = new Hono();
app.use("*", logger());
app.use("/*", serveStatic({ root: "./www/" }));
app.get("/page/", (c) => {
    const query = c.req.query('id');
    console.log(query);
  return c.text("Error");
});

Deno.serve(app.fetch);
