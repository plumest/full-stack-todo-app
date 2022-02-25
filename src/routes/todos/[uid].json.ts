import type { RequestHandler } from "@sveltejs/kit"
import type { RequestEvent } from "@sveltejs/kit/types/internal";
import { api } from "./_api";

export const del: RequestHandler = (request) => {
    return api(request)
}

export const patch: RequestHandler = async (request: RequestEvent) => {
    const formData = await request.request.formData();
    return api(request, {
        text: formData.get("text")
    }
    )
}