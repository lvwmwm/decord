// Module ID: 8970
// Function ID: 8971
// Name: nitroFetch
// Dependencies: [8971, 8972, 8991, 8992, 8989, 8974, 8978, 8973]

// Module 8970 (nitroFetch)
import _mod8972 from "module_8972" /* 8972 */;
import NitroRequest from "NitroRequest" /* 8973 */;
import NitroHeaders from "NitroHeaders" /* 8974 */;
import _mod8978 from "module_8978" /* 8978 */;
import _mod8989 from "module_8989" /* 8989 */;
import prefetch from "prefetch" /* 8991 */;
import nitroFetchOnWorklet from "nitroFetchOnWorklet" /* 8992 */;
import module_8971 from "module_8971" /* 8971 */;

const prefetch_export = prefetch.prefetch;
const nitroFetchOnWorklet_export = nitroFetchOnWorklet.nitroFetchOnWorklet;
const NitroHeaders_export = NitroHeaders.NitroHeaders;

export const nitroFetch = _mod8972.nitroFetch;
export { prefetch_export as prefetch };
export const prefetchOnAppStart = prefetch.prefetchOnAppStart;
export const removeFromAutoPrefetch = prefetch.removeFromAutoPrefetch;
export const removeAllFromAutoprefetch = prefetch.removeAllFromAutoprefetch;
export const __readAutoPrefetchQueue = prefetch.__readAutoPrefetchQueue;
export { nitroFetchOnWorklet_export as nitroFetchOnWorklet };
export const buildNitroRequestPure = _mod8989.buildNitroRequestPure;
export { NitroHeaders_export as NitroHeaders };
export const NitroResponse = _mod8978.NitroResponse;
export const NitroRequestClass = NitroRequest.NitroRequest;
