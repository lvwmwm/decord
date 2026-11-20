// Module ID: 8462
// Function ID: 8463
// Dependencies: [8463, 8467, 8471, 8466, 8486, 8479, 8488, 8477, 8478, 8489]

// Module 8462
import nitroFetch from "nitroFetch" /* 8463 */;
import NitroRequest from "NitroRequest" /* 8466 */;
import NitroHeaders from "NitroHeaders" /* 8467 */;
import _mod8471 from "module_8471" /* 8471 */;
import NetworkInspector from "NetworkInspector" /* 8477 */;
import generateCurl from "generateCurl" /* 8478 */;
import hybridObject from "hybridObject" /* 8479 */;
import NitroXMLHttpRequest from "NitroXMLHttpRequest" /* 8486 */;
import _mod8488 from "module_8488" /* 8488 */;
import _asyncToGenerator from "_asyncToGenerator" /* 8489 */;

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
export const Response = _mod8471.NitroResponse;
export const Request = NitroRequest.NitroRequest;
export const XMLHttpRequest = NitroXMLHttpRequest.NitroXMLHttpRequest;
export const NitroFetch = hybridObject.NitroFetch;
export const registerTokenRefresh = _mod8488.registerTokenRefresh;
export const clearTokenRefresh = _mod8488.clearTokenRefresh;
export const callRefreshEndpoint = _mod8488.callRefreshEndpoint;
export const getStoredTokenRefreshConfig = _mod8488.getStoredTokenRefreshConfig;
export const getNestedField = _mod8488.getNestedField;
export const applyTemplate = _mod8488.applyTemplate;
export { NetworkInspector_export as NetworkInspector };
export { generateCurl_export as generateCurl };
export const profileFetch = _asyncToGenerator.profileFetch;
