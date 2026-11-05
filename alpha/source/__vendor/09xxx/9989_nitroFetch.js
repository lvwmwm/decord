// Module ID: 9989
// Function ID: 9990
// Name: nitroFetch
// Dependencies: [9990, 9991, 10010, 10011, 10008, 9993, 9997, 9992]

// Module 9989 (nitroFetch)
import _mod9991 from "module_9991" /* 9991 */;
import NitroRequest from "NitroRequest" /* 9992 */;
import NitroHeaders from "NitroHeaders" /* 9993 */;
import _mod9997 from "module_9997" /* 9997 */;
import _mod10008 from "module_10008" /* 10008 */;
import prefetch from "prefetch" /* 10010 */;
import nitroFetchOnWorklet from "nitroFetchOnWorklet" /* 10011 */;
import module_9990 from "module_9990" /* 9990 */;

const prefetch_export = prefetch.prefetch;
const nitroFetchOnWorklet_export = nitroFetchOnWorklet.nitroFetchOnWorklet;
const NitroHeaders_export = NitroHeaders.NitroHeaders;

export const nitroFetch = _mod9991.nitroFetch;
export { prefetch_export as prefetch };
export const prefetchOnAppStart = prefetch.prefetchOnAppStart;
export const removeFromAutoPrefetch = prefetch.removeFromAutoPrefetch;
export const removeAllFromAutoprefetch = prefetch.removeAllFromAutoprefetch;
export const __readAutoPrefetchQueue = prefetch.__readAutoPrefetchQueue;
export { nitroFetchOnWorklet_export as nitroFetchOnWorklet };
export const buildNitroRequestPure = _mod10008.buildNitroRequestPure;
export { NitroHeaders_export as NitroHeaders };
export const NitroResponse = _mod9997.NitroResponse;
export const NitroRequestClass = NitroRequest.NitroRequest;
