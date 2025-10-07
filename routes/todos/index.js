export default async function (fastify, opts) {
    let todo1 = [];
    let nextId = 1;
  fastify.post('/', async function (request, reply) {
    // todo1.push(request.body);
    console.log(request.body);
    
    return reply
                .code(200)
                .send({
                    success: true,
                })
    
  })
}