// Module ID: 9930
// Function ID: 9931
// Name: nitroFetch
// Dependencies: [9931, 9932, 9951, 9952, 9949, 9934, 9938, 9933]

// Module 9930 (nitroFetch)
import _mod9932 from "module_9932" /* 9932 */;
import NitroRequest from "NitroRequest" /* 9933 */;
import NitroHeaders from "NitroHeaders" /* 9934 */;
import _mod9938 from "module_9938" /* 9938 */;
import _mod9949 from "module_9949" /* 9949 */;
import prefetch from "prefetch" /* 9951 */;
import nitroFetchOnWorklet from "nitroFetchOnWorklet" /* 9952 */;
import module_9931 from "module_9931" /* 9931 */;

const prefetch_export = prefetch.prefetch;
const nitroFetchOnWorklet_export = nitroFetchOnWorklet.nitroFetchOnWorklet;
const NitroHeaders_export = NitroHeaders.NitroHeaders;

export const nitroFetch = _mod9932.nitroFetch;
export { prefetch_export as prefetch };
export const prefetchOnAppStart = prefetch.prefetchOnAppStart;
export const removeFromAutoPrefetch = prefetch.removeFromAutoPrefetch;
export const removeAllFromAutoprefetch = prefetch.removeAllFromAutoprefetch;
export const __readAutoPrefetchQueue = prefetch.__readAutoPrefetchQueue;
export { nitroFetchOnWorklet_export as nitroFetchOnWorklet };
export const buildNitroRequestPure = _mod9949.buildNitroRequestPure;
export { NitroHeaders_export as NitroHeaders };
export const NitroResponse = _mod9938.NitroResponse;
export const NitroRequestClass = NitroRequest.NitroRequest;
