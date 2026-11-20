// Module ID: 8463
// Function ID: 8464
// Name: nitroFetch
// Dependencies: [8464, 8465, 8484, 8485, 8482, 8467, 8471, 8466]

// Module 8463 (nitroFetch)
import _mod8465 from "module_8465" /* 8465 */;
import NitroRequest from "NitroRequest" /* 8466 */;
import NitroHeaders from "NitroHeaders" /* 8467 */;
import _mod8471 from "module_8471" /* 8471 */;
import _mod8482 from "module_8482" /* 8482 */;
import prefetch from "prefetch" /* 8484 */;
import nitroFetchOnWorklet from "nitroFetchOnWorklet" /* 8485 */;
import module_8464 from "module_8464" /* 8464 */;

const prefetch_export = prefetch.prefetch;
const nitroFetchOnWorklet_export = nitroFetchOnWorklet.nitroFetchOnWorklet;
const NitroHeaders_export = NitroHeaders.NitroHeaders;

export const nitroFetch = _mod8465.nitroFetch;
export { prefetch_export as prefetch };
export const prefetchOnAppStart = prefetch.prefetchOnAppStart;
export const removeFromAutoPrefetch = prefetch.removeFromAutoPrefetch;
export const removeAllFromAutoprefetch = prefetch.removeAllFromAutoprefetch;
export const __readAutoPrefetchQueue = prefetch.__readAutoPrefetchQueue;
export { nitroFetchOnWorklet_export as nitroFetchOnWorklet };
export const buildNitroRequestPure = _mod8482.buildNitroRequestPure;
export { NitroHeaders_export as NitroHeaders };
export const NitroResponse = _mod8471.NitroResponse;
export const NitroRequestClass = NitroRequest.NitroRequest;
