import type { RequestHandler } from "@sveltejs/kit"
import type { RequestEvent } from "@sveltejs/kit/types/internal";
import { api } from "./_api"

export const get: RequestHandler = (request) => {
    return api(request);
}

export const post: RequestHandler =  async ( request: RequestEvent ) => {
    const formData = await request.request.formData();
    return api(request, {
        create_at: new Date(),
        text: formData.get("text") as string,
        done: false
    })
}