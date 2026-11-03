// Module ID: 20279
// Function ID: 20280
// Dependencies: [20280, 20284, 20288, 20283, 20303, 20296, 20305, 20294, 20295, 20306]

// Module 20279
import nitroFetch from "nitroFetch" /* 20280 */;
import NitroRequest from "NitroRequest" /* 20283 */;
import NitroHeaders from "NitroHeaders" /* 20284 */;
import _mod20288 from "module_20288" /* 20288 */;
import NetworkInspector from "NetworkInspector" /* 20294 */;
import generateCurl from "generateCurl" /* 20295 */;
import hybridObject from "hybridObject" /* 20296 */;
import NitroXMLHttpRequest from "NitroXMLHttpRequest" /* 20303 */;
import _mod20305 from "module_20305" /* 20305 */;
import _asyncToGenerator from "_asyncToGenerator" /* 20306 */;

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
export const Response = _mod20288.NitroResponse;
export const Request = NitroRequest.NitroRequest;
export const XMLHttpRequest = NitroXMLHttpRequest.NitroXMLHttpRequest;
export const NitroFetch = hybridObject.NitroFetch;
export const registerTokenRefresh = _mod20305.registerTokenRefresh;
export const clearTokenRefresh = _mod20305.clearTokenRefresh;
export const callRefreshEndpoint = _mod20305.callRefreshEndpoint;
export const getStoredTokenRefreshConfig = _mod20305.getStoredTokenRefreshConfig;
export const getNestedField = _mod20305.getNestedField;
export const applyTemplate = _mod20305.applyTemplate;
export { NetworkInspector_export as NetworkInspector };
export { generateCurl_export as generateCurl };
export const profileFetch = _asyncToGenerator.profileFetch;
