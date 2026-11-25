// Module ID: 8928
// Function ID: 8929
// Name: nitroFetch
// Dependencies: [8929, 8930, 8949, 8950, 8947, 8932, 8936, 8931]

// Module 8928 (nitroFetch)
import _mod8930 from "module_8930" /* 8930 */;
import NitroRequest from "NitroRequest" /* 8931 */;
import NitroHeaders from "NitroHeaders" /* 8932 */;
import _mod8936 from "module_8936" /* 8936 */;
import _mod8947 from "module_8947" /* 8947 */;
import prefetch from "prefetch" /* 8949 */;
import nitroFetchOnWorklet from "nitroFetchOnWorklet" /* 8950 */;
import module_8929 from "module_8929" /* 8929 */;

const prefetch_export = prefetch.prefetch;
const nitroFetchOnWorklet_export = nitroFetchOnWorklet.nitroFetchOnWorklet;
const NitroHeaders_export = NitroHeaders.NitroHeaders;

export const nitroFetch = _mod8930.nitroFetch;
export { prefetch_export as prefetch };
export const prefetchOnAppStart = prefetch.prefetchOnAppStart;
export const removeFromAutoPrefetch = prefetch.removeFromAutoPrefetch;
export const removeAllFromAutoprefetch = prefetch.removeAllFromAutoprefetch;
export const __readAutoPrefetchQueue = prefetch.__readAutoPrefetchQueue;
export { nitroFetchOnWorklet_export as nitroFetchOnWorklet };
export const buildNitroRequestPure = _mod8947.buildNitroRequestPure;
export { NitroHeaders_export as NitroHeaders };
export const NitroResponse = _mod8936.NitroResponse;
export const NitroRequestClass = NitroRequest.NitroRequest;
