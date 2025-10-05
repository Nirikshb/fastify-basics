export default async function (fastify, opts) {
    
    let count = 0;

    fastify.get('/', async function (request, reply) {
        count++
        reply.send({ count })
    })
}