// Module ID: 8927
// Function ID: 8928
// Dependencies: [8928, 8932, 8936, 8931, 8951, 8944, 8953, 8942, 8943, 8954]

// Module 8927
import nitroFetch from "nitroFetch" /* 8928 */;
import NitroRequest from "NitroRequest" /* 8931 */;
import NitroHeaders from "NitroHeaders" /* 8932 */;
import _mod8936 from "module_8936" /* 8936 */;
import NetworkInspector from "NetworkInspector" /* 8942 */;
import generateCurl from "generateCurl" /* 8943 */;
import hybridObject from "hybridObject" /* 8944 */;
import NitroXMLHttpRequest from "NitroXMLHttpRequest" /* 8951 */;
import _mod8953 from "module_8953" /* 8953 */;
import _asyncToGenerator from "_asyncToGenerator" /* 8954 */;

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
export const Response = _mod8936.NitroResponse;
export const Request = NitroRequest.NitroRequest;
export const XMLHttpRequest = NitroXMLHttpRequest.NitroXMLHttpRequest;
export const NitroFetch = hybridObject.NitroFetch;
export const registerTokenRefresh = _mod8953.registerTokenRefresh;
export const clearTokenRefresh = _mod8953.clearTokenRefresh;
export const callRefreshEndpoint = _mod8953.callRefreshEndpoint;
export const getStoredTokenRefreshConfig = _mod8953.getStoredTokenRefreshConfig;
export const getNestedField = _mod8953.getNestedField;
export const applyTemplate = _mod8953.applyTemplate;
export { NetworkInspector_export as NetworkInspector };
export { generateCurl_export as generateCurl };
export const profileFetch = _asyncToGenerator.profileFetch;
