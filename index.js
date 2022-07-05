const fastify = require("fastify")({logger: true});
fastify.get("/ping", async () => "Hello world\n");
fastify.listen({ port: 3000 });
