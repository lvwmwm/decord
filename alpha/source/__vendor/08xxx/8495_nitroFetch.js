// Module ID: 8495
// Function ID: 8496
// Name: nitroFetch
// Dependencies: [8496, 8497, 8516, 8517, 8514, 8499, 8503, 8498]

// Module 8495 (nitroFetch)
import _mod8497 from "module_8497" /* 8497 */;
import NitroRequest from "NitroRequest" /* 8498 */;
import NitroHeaders from "NitroHeaders" /* 8499 */;
import _mod8503 from "module_8503" /* 8503 */;
import _mod8514 from "module_8514" /* 8514 */;
import prefetch from "prefetch" /* 8516 */;
import nitroFetchOnWorklet from "nitroFetchOnWorklet" /* 8517 */;
import module_8496 from "module_8496" /* 8496 */;

const prefetch_export = prefetch.prefetch;
const nitroFetchOnWorklet_export = nitroFetchOnWorklet.nitroFetchOnWorklet;
const NitroHeaders_export = NitroHeaders.NitroHeaders;

export const nitroFetch = _mod8497.nitroFetch;
export { prefetch_export as prefetch };
export const prefetchOnAppStart = prefetch.prefetchOnAppStart;
export const removeFromAutoPrefetch = prefetch.removeFromAutoPrefetch;
export const removeAllFromAutoprefetch = prefetch.removeAllFromAutoprefetch;
export const __readAutoPrefetchQueue = prefetch.__readAutoPrefetchQueue;
export { nitroFetchOnWorklet_export as nitroFetchOnWorklet };
export const buildNitroRequestPure = _mod8514.buildNitroRequestPure;
export { NitroHeaders_export as NitroHeaders };
export const NitroResponse = _mod8503.NitroResponse;
export const NitroRequestClass = NitroRequest.NitroRequest;
