// Module ID: 9983
// Function ID: 9984
// Name: nitroFetch
// Dependencies: [9984, 9985, 10004, 10005, 10002, 9987, 9991, 9986]

// Module 9983 (nitroFetch)
import _mod9985 from "module_9985" /* 9985 */;
import NitroRequest from "NitroRequest" /* 9986 */;
import NitroHeaders from "NitroHeaders" /* 9987 */;
import _mod9991 from "module_9991" /* 9991 */;
import _mod10002 from "module_10002" /* 10002 */;
import prefetch from "prefetch" /* 10004 */;
import nitroFetchOnWorklet from "nitroFetchOnWorklet" /* 10005 */;
import module_9984 from "module_9984" /* 9984 */;

const prefetch_export = prefetch.prefetch;
const nitroFetchOnWorklet_export = nitroFetchOnWorklet.nitroFetchOnWorklet;
const NitroHeaders_export = NitroHeaders.NitroHeaders;

export const nitroFetch = _mod9985.nitroFetch;
export { prefetch_export as prefetch };
export const prefetchOnAppStart = prefetch.prefetchOnAppStart;
export const removeFromAutoPrefetch = prefetch.removeFromAutoPrefetch;
export const removeAllFromAutoprefetch = prefetch.removeAllFromAutoprefetch;
export const __readAutoPrefetchQueue = prefetch.__readAutoPrefetchQueue;
export { nitroFetchOnWorklet_export as nitroFetchOnWorklet };
export const buildNitroRequestPure = _mod10002.buildNitroRequestPure;
export { NitroHeaders_export as NitroHeaders };
export const NitroResponse = _mod9991.NitroResponse;
export const NitroRequestClass = NitroRequest.NitroRequest;
