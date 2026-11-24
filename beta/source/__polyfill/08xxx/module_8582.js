// Module ID: 8582
// Function ID: 8583
// Dependencies: [8583, 8587, 8591, 8586, 8606, 8599, 8608, 8597, 8598, 8609]

// Module 8582
import nitroFetch from "nitroFetch" /* 8583 */;
import NitroRequest from "NitroRequest" /* 8586 */;
import NitroHeaders from "NitroHeaders" /* 8587 */;
import _mod8591 from "module_8591" /* 8591 */;
import NetworkInspector from "NetworkInspector" /* 8597 */;
import generateCurl from "generateCurl" /* 8598 */;
import hybridObject from "hybridObject" /* 8599 */;
import NitroXMLHttpRequest from "NitroXMLHttpRequest" /* 8606 */;
import _mod8608 from "module_8608" /* 8608 */;
import _asyncToGenerator from "_asyncToGenerator" /* 8609 */;

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
export const Response = _mod8591.NitroResponse;
export const Request = NitroRequest.NitroRequest;
export const XMLHttpRequest = NitroXMLHttpRequest.NitroXMLHttpRequest;
export const NitroFetch = hybridObject.NitroFetch;
export const registerTokenRefresh = _mod8608.registerTokenRefresh;
export const clearTokenRefresh = _mod8608.clearTokenRefresh;
export const callRefreshEndpoint = _mod8608.callRefreshEndpoint;
export const getStoredTokenRefreshConfig = _mod8608.getStoredTokenRefreshConfig;
export const getNestedField = _mod8608.getNestedField;
export const applyTemplate = _mod8608.applyTemplate;
export { NetworkInspector_export as NetworkInspector };
export { generateCurl_export as generateCurl };
export const profileFetch = _asyncToGenerator.profileFetch;
