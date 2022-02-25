import type { RequestHandler } from "@sveltejs/kit"

//TODO: Implement database
let todos: Todo[] = [];

export const get: RequestHandler = () => {
    return {
        status: 200,
        body: todos
    }
}

export const post: RequestHandler =  async ({ request }) => {
    const formData = await request.formData();
    todos.push({
        create_at: new Date(),
        text: formData.get("text") as string,
        done: false
    });

    return {
        // Redirect back
        status: 303,
        headers: {
            location: "/"
        }
    }
}