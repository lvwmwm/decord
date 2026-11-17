// Module ID: 9083
// Function ID: 9084
// Dependencies: [9084, 9088, 9092, 9087, 9107, 9100, 9109, 9098, 9099, 9110]

// Module 9083
import nitroFetch from "nitroFetch" /* 9084 */;
import NitroRequest from "NitroRequest" /* 9087 */;
import NitroHeaders from "NitroHeaders" /* 9088 */;
import _mod9092 from "module_9092" /* 9092 */;
import NetworkInspector from "NetworkInspector" /* 9098 */;
import generateCurl from "generateCurl" /* 9099 */;
import hybridObject from "hybridObject" /* 9100 */;
import NitroXMLHttpRequest from "NitroXMLHttpRequest" /* 9107 */;
import _mod9109 from "module_9109" /* 9109 */;
import _asyncToGenerator from "_asyncToGenerator" /* 9110 */;

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
export const Response = _mod9092.NitroResponse;
export const Request = NitroRequest.NitroRequest;
export const XMLHttpRequest = NitroXMLHttpRequest.NitroXMLHttpRequest;
export const NitroFetch = hybridObject.NitroFetch;
export const registerTokenRefresh = _mod9109.registerTokenRefresh;
export const clearTokenRefresh = _mod9109.clearTokenRefresh;
export const callRefreshEndpoint = _mod9109.callRefreshEndpoint;
export const getStoredTokenRefreshConfig = _mod9109.getStoredTokenRefreshConfig;
export const getNestedField = _mod9109.getNestedField;
export const applyTemplate = _mod9109.applyTemplate;
export { NetworkInspector_export as NetworkInspector };
export { generateCurl_export as generateCurl };
export const profileFetch = _asyncToGenerator.profileFetch;
