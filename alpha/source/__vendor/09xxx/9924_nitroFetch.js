// Module ID: 9924
// Function ID: 9925
// Name: nitroFetch
// Dependencies: [9925, 9926, 9945, 9946, 9943, 9928, 9932, 9927]

// Module 9924 (nitroFetch)
import _mod9926 from "module_9926" /* 9926 */;
import NitroRequest from "NitroRequest" /* 9927 */;
import NitroHeaders from "NitroHeaders" /* 9928 */;
import _mod9932 from "module_9932" /* 9932 */;
import _mod9943 from "module_9943" /* 9943 */;
import prefetch from "prefetch" /* 9945 */;
import nitroFetchOnWorklet from "nitroFetchOnWorklet" /* 9946 */;
import module_9925 from "module_9925" /* 9925 */;

const prefetch_export = prefetch.prefetch;
const nitroFetchOnWorklet_export = nitroFetchOnWorklet.nitroFetchOnWorklet;
const NitroHeaders_export = NitroHeaders.NitroHeaders;

export const nitroFetch = _mod9926.nitroFetch;
export { prefetch_export as prefetch };
export const prefetchOnAppStart = prefetch.prefetchOnAppStart;
export const removeFromAutoPrefetch = prefetch.removeFromAutoPrefetch;
export const removeAllFromAutoprefetch = prefetch.removeAllFromAutoprefetch;
export const __readAutoPrefetchQueue = prefetch.__readAutoPrefetchQueue;
export { nitroFetchOnWorklet_export as nitroFetchOnWorklet };
export const buildNitroRequestPure = _mod9943.buildNitroRequestPure;
export { NitroHeaders_export as NitroHeaders };
export const NitroResponse = _mod9932.NitroResponse;
export const NitroRequestClass = NitroRequest.NitroRequest;
