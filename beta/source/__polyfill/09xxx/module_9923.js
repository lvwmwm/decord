// Module ID: 9923
// Function ID: 9924
// Dependencies: [9924, 9928, 9932, 9927, 9947, 9940, 9949, 9938, 9939, 9950]

// Module 9923
import nitroFetch from "nitroFetch" /* 9924 */;
import NitroRequest from "NitroRequest" /* 9927 */;
import NitroHeaders from "NitroHeaders" /* 9928 */;
import _mod9932 from "module_9932" /* 9932 */;
import NetworkInspector from "NetworkInspector" /* 9938 */;
import generateCurl from "generateCurl" /* 9939 */;
import hybridObject from "hybridObject" /* 9940 */;
import NitroXMLHttpRequest from "NitroXMLHttpRequest" /* 9947 */;
import _mod9949 from "module_9949" /* 9949 */;
import _asyncToGenerator from "_asyncToGenerator" /* 9950 */;

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
export const Response = _mod9932.NitroResponse;
export const Request = NitroRequest.NitroRequest;
export const XMLHttpRequest = NitroXMLHttpRequest.NitroXMLHttpRequest;
export const NitroFetch = hybridObject.NitroFetch;
export const registerTokenRefresh = _mod9949.registerTokenRefresh;
export const clearTokenRefresh = _mod9949.clearTokenRefresh;
export const callRefreshEndpoint = _mod9949.callRefreshEndpoint;
export const getStoredTokenRefreshConfig = _mod9949.getStoredTokenRefreshConfig;
export const getNestedField = _mod9949.getNestedField;
export const applyTemplate = _mod9949.applyTemplate;
export { NetworkInspector_export as NetworkInspector };
export { generateCurl_export as generateCurl };
export const profileFetch = _asyncToGenerator.profileFetch;
