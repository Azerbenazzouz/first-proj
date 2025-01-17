export default defineEventHandler(async (event) => {

    // Handle query params
    const { name } = getQuery(event);
    const { age } = await readBody(event);

    return {
        message: `Hello ${name} ${age}`
    }
});