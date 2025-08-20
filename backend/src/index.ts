import Fastify from "fastify";

const server = Fastify();

server.get("/health", async () => {
  return { status: "ok" };
});

const start = async () => {
  try {
    await server.listen({ port: 4000, host: "0.0.0.0" });
    console.log("🚀 Backend rodando na porta 4000");
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

start();