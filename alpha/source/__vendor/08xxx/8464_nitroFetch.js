// Module ID: 8464
// Function ID: 8465
// Name: nitroFetch
// Dependencies: [8465, 8466, 8485, 8486, 8483, 8468, 8472, 8467]

// Module 8464 (nitroFetch)
import _mod8466 from "module_8466" /* 8466 */;
import NitroRequest from "NitroRequest" /* 8467 */;
import NitroHeaders from "NitroHeaders" /* 8468 */;
import _mod8472 from "module_8472" /* 8472 */;
import _mod8483 from "module_8483" /* 8483 */;
import prefetch from "prefetch" /* 8485 */;
import nitroFetchOnWorklet from "nitroFetchOnWorklet" /* 8486 */;
import module_8465 from "module_8465" /* 8465 */;

const prefetch_export = prefetch.prefetch;
const nitroFetchOnWorklet_export = nitroFetchOnWorklet.nitroFetchOnWorklet;
const NitroHeaders_export = NitroHeaders.NitroHeaders;

export const nitroFetch = _mod8466.nitroFetch;
export { prefetch_export as prefetch };
export const prefetchOnAppStart = prefetch.prefetchOnAppStart;
export const removeFromAutoPrefetch = prefetch.removeFromAutoPrefetch;
export const removeAllFromAutoprefetch = prefetch.removeAllFromAutoprefetch;
export const __readAutoPrefetchQueue = prefetch.__readAutoPrefetchQueue;
export { nitroFetchOnWorklet_export as nitroFetchOnWorklet };
export const buildNitroRequestPure = _mod8483.buildNitroRequestPure;
export { NitroHeaders_export as NitroHeaders };
export const NitroResponse = _mod8472.NitroResponse;
export const NitroRequestClass = NitroRequest.NitroRequest;
