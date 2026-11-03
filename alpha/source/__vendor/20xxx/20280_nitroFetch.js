// Module ID: 20280
// Function ID: 20281
// Name: nitroFetch
// Dependencies: [20281, 20282, 20301, 20302, 20299, 20284, 20288, 20283]

// Module 20280 (nitroFetch)
import _mod20282 from "module_20282" /* 20282 */;
import NitroRequest from "NitroRequest" /* 20283 */;
import NitroHeaders from "NitroHeaders" /* 20284 */;
import _mod20288 from "module_20288" /* 20288 */;
import _mod20299 from "module_20299" /* 20299 */;
import prefetch from "prefetch" /* 20301 */;
import nitroFetchOnWorklet from "nitroFetchOnWorklet" /* 20302 */;
import module_20281 from "module_20281" /* 20281 */;

const prefetch_export = prefetch.prefetch;
const nitroFetchOnWorklet_export = nitroFetchOnWorklet.nitroFetchOnWorklet;
const NitroHeaders_export = NitroHeaders.NitroHeaders;

export const nitroFetch = _mod20282.nitroFetch;
export { prefetch_export as prefetch };
export const prefetchOnAppStart = prefetch.prefetchOnAppStart;
export const removeFromAutoPrefetch = prefetch.removeFromAutoPrefetch;
export const removeAllFromAutoprefetch = prefetch.removeAllFromAutoprefetch;
export const __readAutoPrefetchQueue = prefetch.__readAutoPrefetchQueue;
export { nitroFetchOnWorklet_export as nitroFetchOnWorklet };
export const buildNitroRequestPure = _mod20299.buildNitroRequestPure;
export { NitroHeaders_export as NitroHeaders };
export const NitroResponse = _mod20288.NitroResponse;
export const NitroRequestClass = NitroRequest.NitroRequest;
