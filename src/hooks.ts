import type { Handle } from "@sveltejs/kit";

export const handle: Handle = async ({ event, resolve }) => {

    // if ( event.url.searchParams.get("_method") ) {
    //     console.log(event.params._method)
    //     // event.request.headers. = event.params._medthod.toUpperCase();
    // }
    const response = await resolve(event)
    return response;
}