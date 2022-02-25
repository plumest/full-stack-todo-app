import type { RequestEvent } from "@sveltejs/kit/types/internal";

//TODO: Implement database
let todos: Todo[] = [];

export const api = (request: RequestEvent, todo?: Todo) => {
    let body = {};
    let status = 500;

    // request.request.query.get("_method")

    switch (request.request.method.toUpperCase()) {
        case "GET":
            body = todos;
            status = 200;
            break;
        case "POST":
            todos.push(todo);
            body = todo;
            status = 201;
            break;

        case "DELETE":
            todos = todos.filter(todo => todo.uid !== request.params.uid)
            status = 200;
            break;

        default:
            break;
    }

    if (request.request.method.toUpperCase() !== "GET") {
        return {
            // Redirect back
            status: 303,
            headers: {
                location: "/"
            }
        }
    }

    return {
        status,
        body
      }
}