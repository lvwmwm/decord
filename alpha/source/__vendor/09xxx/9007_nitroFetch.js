// Module ID: 9007
// Function ID: 9008
// Name: nitroFetch
// Dependencies: [9008, 9009, 9028, 9029, 9026, 9011, 9015, 9010]

// Module 9007 (nitroFetch)
import _mod9009 from "module_9009" /* 9009 */;
import NitroRequest from "NitroRequest" /* 9010 */;
import NitroHeaders from "NitroHeaders" /* 9011 */;
import _mod9015 from "module_9015" /* 9015 */;
import _mod9026 from "module_9026" /* 9026 */;
import prefetch from "prefetch" /* 9028 */;
import nitroFetchOnWorklet from "nitroFetchOnWorklet" /* 9029 */;
import module_9008 from "module_9008" /* 9008 */;

const prefetch_export = prefetch.prefetch;
const nitroFetchOnWorklet_export = nitroFetchOnWorklet.nitroFetchOnWorklet;
const NitroHeaders_export = NitroHeaders.NitroHeaders;

export const nitroFetch = _mod9009.nitroFetch;
export { prefetch_export as prefetch };
export const prefetchOnAppStart = prefetch.prefetchOnAppStart;
export const removeFromAutoPrefetch = prefetch.removeFromAutoPrefetch;
export const removeAllFromAutoprefetch = prefetch.removeAllFromAutoprefetch;
export const __readAutoPrefetchQueue = prefetch.__readAutoPrefetchQueue;
export { nitroFetchOnWorklet_export as nitroFetchOnWorklet };
export const buildNitroRequestPure = _mod9026.buildNitroRequestPure;
export { NitroHeaders_export as NitroHeaders };
export const NitroResponse = _mod9015.NitroResponse;
export const NitroRequestClass = NitroRequest.NitroRequest;
