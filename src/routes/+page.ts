import products from '$lib/json/categoryProject.json';

export async function load() {
    return {
        props: {
            data: products // This wraps your array in an object
        }
    };
}
