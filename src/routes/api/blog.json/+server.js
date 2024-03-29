import { error } from '@sveltejs/kit';
import { getPosts } from '$lib/server';

export async function GET() {
    try {
        const data = await getPosts();

        return data;
    } catch (e) {
        console.error(e);
        error(404, e);
    }
}