export default async function (fastify, opts) {


    fastify.post('/', async function (request, reply) {
        console.log('USERS');
        const user = {
            id: 1,
            name: 'Namer'
        }
        return reply
            .code(200)
            .send({
                success: true,
                data: user
            })


    })

}