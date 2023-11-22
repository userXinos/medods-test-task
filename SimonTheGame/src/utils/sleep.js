/**
 * @param {number} ms
 * @return {Promise<unknown>}
 */
export default function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}
