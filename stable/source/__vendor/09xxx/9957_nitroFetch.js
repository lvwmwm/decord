// Module ID: 9957
// Function ID: 9958
// Name: nitroFetch
// Dependencies: [9958, 9959, 9978, 9979, 9976, 9961, 9965, 9960]

// Module 9957 (nitroFetch)
import _mod9959 from "module_9959" /* 9959 */;
import NitroRequest from "NitroRequest" /* 9960 */;
import NitroHeaders from "NitroHeaders" /* 9961 */;
import _mod9965 from "module_9965" /* 9965 */;
import _mod9976 from "module_9976" /* 9976 */;
import prefetch from "prefetch" /* 9978 */;
import nitroFetchOnWorklet from "nitroFetchOnWorklet" /* 9979 */;
import module_9958 from "module_9958" /* 9958 */;

const prefetch_export = prefetch.prefetch;
const nitroFetchOnWorklet_export = nitroFetchOnWorklet.nitroFetchOnWorklet;
const NitroHeaders_export = NitroHeaders.NitroHeaders;

export const nitroFetch = _mod9959.nitroFetch;
export { prefetch_export as prefetch };
export const prefetchOnAppStart = prefetch.prefetchOnAppStart;
export const removeFromAutoPrefetch = prefetch.removeFromAutoPrefetch;
export const removeAllFromAutoprefetch = prefetch.removeAllFromAutoprefetch;
export const __readAutoPrefetchQueue = prefetch.__readAutoPrefetchQueue;
export { nitroFetchOnWorklet_export as nitroFetchOnWorklet };
export const buildNitroRequestPure = _mod9976.buildNitroRequestPure;
export { NitroHeaders_export as NitroHeaders };
export const NitroResponse = _mod9965.NitroResponse;
export const NitroRequestClass = NitroRequest.NitroRequest;
