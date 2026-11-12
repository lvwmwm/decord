// Module ID: 9006
// Function ID: 9007
// Name: nitroFetch
// Dependencies: [9007, 9008, 9027, 9028, 9025, 9010, 9014, 9009]

// Module 9006 (nitroFetch)
import _mod9008 from "module_9008" /* 9008 */;
import NitroRequest from "NitroRequest" /* 9009 */;
import NitroHeaders from "NitroHeaders" /* 9010 */;
import _mod9014 from "module_9014" /* 9014 */;
import _mod9025 from "module_9025" /* 9025 */;
import prefetch from "prefetch" /* 9027 */;
import nitroFetchOnWorklet from "nitroFetchOnWorklet" /* 9028 */;
import module_9007 from "module_9007" /* 9007 */;

const prefetch_export = prefetch.prefetch;
const nitroFetchOnWorklet_export = nitroFetchOnWorklet.nitroFetchOnWorklet;
const NitroHeaders_export = NitroHeaders.NitroHeaders;

export const nitroFetch = _mod9008.nitroFetch;
export { prefetch_export as prefetch };
export const prefetchOnAppStart = prefetch.prefetchOnAppStart;
export const removeFromAutoPrefetch = prefetch.removeFromAutoPrefetch;
export const removeAllFromAutoprefetch = prefetch.removeAllFromAutoprefetch;
export const __readAutoPrefetchQueue = prefetch.__readAutoPrefetchQueue;
export { nitroFetchOnWorklet_export as nitroFetchOnWorklet };
export const buildNitroRequestPure = _mod9025.buildNitroRequestPure;
export { NitroHeaders_export as NitroHeaders };
export const NitroResponse = _mod9014.NitroResponse;
export const NitroRequestClass = NitroRequest.NitroRequest;
