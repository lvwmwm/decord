// Module ID: 8971
// Function ID: 8972
// Name: nitroFetch
// Dependencies: [8972, 8973, 8992, 8993, 8990, 8975, 8979, 8974]

// Module 8971 (nitroFetch)
import _mod8973 from "module_8973" /* 8973 */;
import NitroRequest from "NitroRequest" /* 8974 */;
import NitroHeaders from "NitroHeaders" /* 8975 */;
import _mod8979 from "module_8979" /* 8979 */;
import _mod8990 from "module_8990" /* 8990 */;
import prefetch from "prefetch" /* 8992 */;
import nitroFetchOnWorklet from "nitroFetchOnWorklet" /* 8993 */;
import module_8972 from "module_8972" /* 8972 */;

const prefetch_export = prefetch.prefetch;
const nitroFetchOnWorklet_export = nitroFetchOnWorklet.nitroFetchOnWorklet;
const NitroHeaders_export = NitroHeaders.NitroHeaders;

export const nitroFetch = _mod8973.nitroFetch;
export { prefetch_export as prefetch };
export const prefetchOnAppStart = prefetch.prefetchOnAppStart;
export const removeFromAutoPrefetch = prefetch.removeFromAutoPrefetch;
export const removeAllFromAutoprefetch = prefetch.removeAllFromAutoprefetch;
export const __readAutoPrefetchQueue = prefetch.__readAutoPrefetchQueue;
export { nitroFetchOnWorklet_export as nitroFetchOnWorklet };
export const buildNitroRequestPure = _mod8990.buildNitroRequestPure;
export { NitroHeaders_export as NitroHeaders };
export const NitroResponse = _mod8979.NitroResponse;
export const NitroRequestClass = NitroRequest.NitroRequest;
