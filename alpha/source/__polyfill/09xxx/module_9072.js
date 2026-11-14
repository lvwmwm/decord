// Module ID: 9072
// Function ID: 9073
// Dependencies: [9073, 9077, 9081, 9076, 9096, 9089, 9098, 9087, 9088, 9099]

// Module 9072
import nitroFetch from "nitroFetch" /* 9073 */;
import NitroRequest from "NitroRequest" /* 9076 */;
import NitroHeaders from "NitroHeaders" /* 9077 */;
import _mod9081 from "module_9081" /* 9081 */;
import NetworkInspector from "NetworkInspector" /* 9087 */;
import generateCurl from "generateCurl" /* 9088 */;
import hybridObject from "hybridObject" /* 9089 */;
import NitroXMLHttpRequest from "NitroXMLHttpRequest" /* 9096 */;
import _mod9098 from "module_9098" /* 9098 */;
import _asyncToGenerator from "_asyncToGenerator" /* 9099 */;

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
export const Response = _mod9081.NitroResponse;
export const Request = NitroRequest.NitroRequest;
export const XMLHttpRequest = NitroXMLHttpRequest.NitroXMLHttpRequest;
export const NitroFetch = hybridObject.NitroFetch;
export const registerTokenRefresh = _mod9098.registerTokenRefresh;
export const clearTokenRefresh = _mod9098.clearTokenRefresh;
export const callRefreshEndpoint = _mod9098.callRefreshEndpoint;
export const getStoredTokenRefreshConfig = _mod9098.getStoredTokenRefreshConfig;
export const getNestedField = _mod9098.getNestedField;
export const applyTemplate = _mod9098.applyTemplate;
export { NetworkInspector_export as NetworkInspector };
export { generateCurl_export as generateCurl };
export const profileFetch = _asyncToGenerator.profileFetch;
