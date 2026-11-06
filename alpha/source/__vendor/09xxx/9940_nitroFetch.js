// Module ID: 9940
// Function ID: 9941
// Name: nitroFetch
// Dependencies: [9941, 9942, 9961, 9962, 9959, 9944, 9948, 9943]

// Module 9940 (nitroFetch)
import _mod9942 from "module_9942" /* 9942 */;
import NitroRequest from "NitroRequest" /* 9943 */;
import NitroHeaders from "NitroHeaders" /* 9944 */;
import _mod9948 from "module_9948" /* 9948 */;
import _mod9959 from "module_9959" /* 9959 */;
import prefetch from "prefetch" /* 9961 */;
import nitroFetchOnWorklet from "nitroFetchOnWorklet" /* 9962 */;
import module_9941 from "module_9941" /* 9941 */;

const prefetch_export = prefetch.prefetch;
const nitroFetchOnWorklet_export = nitroFetchOnWorklet.nitroFetchOnWorklet;
const NitroHeaders_export = NitroHeaders.NitroHeaders;

export const nitroFetch = _mod9942.nitroFetch;
export { prefetch_export as prefetch };
export const prefetchOnAppStart = prefetch.prefetchOnAppStart;
export const removeFromAutoPrefetch = prefetch.removeFromAutoPrefetch;
export const removeAllFromAutoprefetch = prefetch.removeAllFromAutoprefetch;
export const __readAutoPrefetchQueue = prefetch.__readAutoPrefetchQueue;
export { nitroFetchOnWorklet_export as nitroFetchOnWorklet };
export const buildNitroRequestPure = _mod9959.buildNitroRequestPure;
export { NitroHeaders_export as NitroHeaders };
export const NitroResponse = _mod9948.NitroResponse;
export const NitroRequestClass = NitroRequest.NitroRequest;
