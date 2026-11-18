// Module ID: 8494
// Function ID: 8495
// Dependencies: [8495, 8499, 8503, 8498, 8518, 8511, 8520, 8509, 8510, 8521]

// Module 8494
import nitroFetch from "nitroFetch" /* 8495 */;
import NitroRequest from "NitroRequest" /* 8498 */;
import NitroHeaders from "NitroHeaders" /* 8499 */;
import _mod8503 from "module_8503" /* 8503 */;
import NetworkInspector from "NetworkInspector" /* 8509 */;
import generateCurl from "generateCurl" /* 8510 */;
import hybridObject from "hybridObject" /* 8511 */;
import NitroXMLHttpRequest from "NitroXMLHttpRequest" /* 8518 */;
import _mod8520 from "module_8520" /* 8520 */;
import _asyncToGenerator from "_asyncToGenerator" /* 8521 */;

const NetworkInspector_export = NetworkInspector.NetworkInspector;
const generateCurl_export = generateCurl.generateCurl;

export const fetch = nitroFetch.nitroFetch;
export const nitroFetchOnWorklet = nitroFetch.nitroFetchOnWorklet;
export const prefetch = nitroFetch.prefetch;
export const prefetchOnAppStart = nitroFetch.prefetchOnAppStart;
export const removeFromAutoPrefetch = nitroFetch.removeFromAutoPrefetch;
export const removeAllFromAutoprefetch = nitroFetch.removeAllFromAutoprefetch;
export const __readAutoPrefetchQueue = nitroFetch.__readAutoPrefetchQueue;
export const Headers = NitroHeaders.NitroHeaders;
export const Response = _mod8503.NitroResponse;
export const Request = NitroRequest.NitroRequest;
export const XMLHttpRequest = NitroXMLHttpRequest.NitroXMLHttpRequest;
export const NitroFetch = hybridObject.NitroFetch;
export const registerTokenRefresh = _mod8520.registerTokenRefresh;
export const clearTokenRefresh = _mod8520.clearTokenRefresh;
export const callRefreshEndpoint = _mod8520.callRefreshEndpoint;
export const getStoredTokenRefreshConfig = _mod8520.getStoredTokenRefreshConfig;
export const getNestedField = _mod8520.getNestedField;
export const applyTemplate = _mod8520.applyTemplate;
export { NetworkInspector_export as NetworkInspector };
export { generateCurl_export as generateCurl };
export const profileFetch = _asyncToGenerator.profileFetch;
