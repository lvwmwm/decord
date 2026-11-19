// Module ID: 8463
// Function ID: 8464
// Dependencies: [8464, 8468, 8472, 8467, 8487, 8480, 8489, 8478, 8479, 8490]

// Module 8463
import nitroFetch from "nitroFetch" /* 8464 */;
import NitroRequest from "NitroRequest" /* 8467 */;
import NitroHeaders from "NitroHeaders" /* 8468 */;
import _mod8472 from "module_8472" /* 8472 */;
import NetworkInspector from "NetworkInspector" /* 8478 */;
import generateCurl from "generateCurl" /* 8479 */;
import hybridObject from "hybridObject" /* 8480 */;
import NitroXMLHttpRequest from "NitroXMLHttpRequest" /* 8487 */;
import _mod8489 from "module_8489" /* 8489 */;
import _asyncToGenerator from "_asyncToGenerator" /* 8490 */;

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
export const Response = _mod8472.NitroResponse;
export const Request = NitroRequest.NitroRequest;
export const XMLHttpRequest = NitroXMLHttpRequest.NitroXMLHttpRequest;
export const NitroFetch = hybridObject.NitroFetch;
export const registerTokenRefresh = _mod8489.registerTokenRefresh;
export const clearTokenRefresh = _mod8489.clearTokenRefresh;
export const callRefreshEndpoint = _mod8489.callRefreshEndpoint;
export const getStoredTokenRefreshConfig = _mod8489.getStoredTokenRefreshConfig;
export const getNestedField = _mod8489.getNestedField;
export const applyTemplate = _mod8489.applyTemplate;
export { NetworkInspector_export as NetworkInspector };
export { generateCurl_export as generateCurl };
export const profileFetch = _asyncToGenerator.profileFetch;
