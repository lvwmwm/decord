// Module ID: 9073
// Function ID: 9074
// Name: nitroFetch
// Dependencies: [9074, 9075, 9094, 9095, 9092, 9077, 9081, 9076]

// Module 9073 (nitroFetch)
import _mod9075 from "module_9075" /* 9075 */;
import NitroRequest from "NitroRequest" /* 9076 */;
import NitroHeaders from "NitroHeaders" /* 9077 */;
import _mod9081 from "module_9081" /* 9081 */;
import _mod9092 from "module_9092" /* 9092 */;
import prefetch from "prefetch" /* 9094 */;
import nitroFetchOnWorklet from "nitroFetchOnWorklet" /* 9095 */;
import module_9074 from "module_9074" /* 9074 */;

const prefetch_export = prefetch.prefetch;
const nitroFetchOnWorklet_export = nitroFetchOnWorklet.nitroFetchOnWorklet;
const NitroHeaders_export = NitroHeaders.NitroHeaders;

export const nitroFetch = _mod9075.nitroFetch;
export { prefetch_export as prefetch };
export const prefetchOnAppStart = prefetch.prefetchOnAppStart;
export const removeFromAutoPrefetch = prefetch.removeFromAutoPrefetch;
export const removeAllFromAutoprefetch = prefetch.removeAllFromAutoprefetch;
export const __readAutoPrefetchQueue = prefetch.__readAutoPrefetchQueue;
export { nitroFetchOnWorklet_export as nitroFetchOnWorklet };
export const buildNitroRequestPure = _mod9092.buildNitroRequestPure;
export { NitroHeaders_export as NitroHeaders };
export const NitroResponse = _mod9081.NitroResponse;
export const NitroRequestClass = NitroRequest.NitroRequest;
