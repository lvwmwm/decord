// Module ID: 8829
// Function ID: 8830
// Name: nitroFetch
// Dependencies: [8830, 8831, 8850, 8851, 8848, 8833, 8837, 8832]

// Module 8829 (nitroFetch)
import _mod8831 from "module_8831" /* 8831 */;
import NitroRequest from "NitroRequest" /* 8832 */;
import NitroHeaders from "NitroHeaders" /* 8833 */;
import _mod8837 from "module_8837" /* 8837 */;
import _mod8848 from "module_8848" /* 8848 */;
import prefetch from "prefetch" /* 8850 */;
import nitroFetchOnWorklet from "nitroFetchOnWorklet" /* 8851 */;
import module_8830 from "module_8830" /* 8830 */;

const prefetch_export = prefetch.prefetch;
const nitroFetchOnWorklet_export = nitroFetchOnWorklet.nitroFetchOnWorklet;
const NitroHeaders_export = NitroHeaders.NitroHeaders;

export const nitroFetch = _mod8831.nitroFetch;
export { prefetch_export as prefetch };
export const prefetchOnAppStart = prefetch.prefetchOnAppStart;
export const removeFromAutoPrefetch = prefetch.removeFromAutoPrefetch;
export const removeAllFromAutoprefetch = prefetch.removeAllFromAutoprefetch;
export const __readAutoPrefetchQueue = prefetch.__readAutoPrefetchQueue;
export { nitroFetchOnWorklet_export as nitroFetchOnWorklet };
export const buildNitroRequestPure = _mod8848.buildNitroRequestPure;
export { NitroHeaders_export as NitroHeaders };
export const NitroResponse = _mod8837.NitroResponse;
export const NitroRequestClass = NitroRequest.NitroRequest;
