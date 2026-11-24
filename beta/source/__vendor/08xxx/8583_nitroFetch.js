// Module ID: 8583
// Function ID: 8584
// Name: nitroFetch
// Dependencies: [8584, 8585, 8604, 8605, 8602, 8587, 8591, 8586]

// Module 8583 (nitroFetch)
import _mod8585 from "module_8585" /* 8585 */;
import NitroRequest from "NitroRequest" /* 8586 */;
import NitroHeaders from "NitroHeaders" /* 8587 */;
import _mod8591 from "module_8591" /* 8591 */;
import _mod8602 from "module_8602" /* 8602 */;
import prefetch from "prefetch" /* 8604 */;
import nitroFetchOnWorklet from "nitroFetchOnWorklet" /* 8605 */;
import module_8584 from "module_8584" /* 8584 */;

const prefetch_export = prefetch.prefetch;
const nitroFetchOnWorklet_export = nitroFetchOnWorklet.nitroFetchOnWorklet;
const NitroHeaders_export = NitroHeaders.NitroHeaders;

export const nitroFetch = _mod8585.nitroFetch;
export { prefetch_export as prefetch };
export const prefetchOnAppStart = prefetch.prefetchOnAppStart;
export const removeFromAutoPrefetch = prefetch.removeFromAutoPrefetch;
export const removeAllFromAutoprefetch = prefetch.removeAllFromAutoprefetch;
export const __readAutoPrefetchQueue = prefetch.__readAutoPrefetchQueue;
export { nitroFetchOnWorklet_export as nitroFetchOnWorklet };
export const buildNitroRequestPure = _mod8602.buildNitroRequestPure;
export { NitroHeaders_export as NitroHeaders };
export const NitroResponse = _mod8591.NitroResponse;
export const NitroRequestClass = NitroRequest.NitroRequest;
