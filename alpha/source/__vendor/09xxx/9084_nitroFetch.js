// Module ID: 9084
// Function ID: 9085
// Name: nitroFetch
// Dependencies: [9085, 9086, 9105, 9106, 9103, 9088, 9092, 9087]

// Module 9084 (nitroFetch)
import _mod9086 from "module_9086" /* 9086 */;
import NitroRequest from "NitroRequest" /* 9087 */;
import NitroHeaders from "NitroHeaders" /* 9088 */;
import _mod9092 from "module_9092" /* 9092 */;
import _mod9103 from "module_9103" /* 9103 */;
import prefetch from "prefetch" /* 9105 */;
import nitroFetchOnWorklet from "nitroFetchOnWorklet" /* 9106 */;
import module_9085 from "module_9085" /* 9085 */;

const prefetch_export = prefetch.prefetch;
const nitroFetchOnWorklet_export = nitroFetchOnWorklet.nitroFetchOnWorklet;
const NitroHeaders_export = NitroHeaders.NitroHeaders;

export const nitroFetch = _mod9086.nitroFetch;
export { prefetch_export as prefetch };
export const prefetchOnAppStart = prefetch.prefetchOnAppStart;
export const removeFromAutoPrefetch = prefetch.removeFromAutoPrefetch;
export const removeAllFromAutoprefetch = prefetch.removeAllFromAutoprefetch;
export const __readAutoPrefetchQueue = prefetch.__readAutoPrefetchQueue;
export { nitroFetchOnWorklet_export as nitroFetchOnWorklet };
export const buildNitroRequestPure = _mod9103.buildNitroRequestPure;
export { NitroHeaders_export as NitroHeaders };
export const NitroResponse = _mod9092.NitroResponse;
export const NitroRequestClass = NitroRequest.NitroRequest;
