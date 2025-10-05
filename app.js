import path, { dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import AutoLoad from '@fastify/autoload'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

// Pass --options via CLI arguments in command to enable these options.
import { writeFile, readFile } from "fs/promises";
export const options = {}

export default async function (fastify, opts) {
  // Place here your custom code!

await writeFile("hello.txt", "Hi there!");
const content = await readFile("hello.txt", "utf-8");
console.log(content);
  // Do not touch the following lines

  // This loads all plugins defined in plugins
  // those should be support plugins that are reused
  // through your application
  fastify.register(AutoLoad, {
    dir: path.join(__dirname, 'plugins'),
    options: Object.assign({}, opts)
  })

  // This loads all plugins defined in routes
  // define your routes in one of these
  fastify.register(AutoLoad, {
    dir: path.join(__dirname, 'routes'),
    options: Object.assign({}, opts)
  })
}