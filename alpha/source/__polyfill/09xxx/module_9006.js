// Module ID: 9006
// Function ID: 9007
// Dependencies: [9007, 9011, 9015, 9010, 9030, 9023, 9032, 9021, 9022, 9033]

// Module 9006
import nitroFetch from "nitroFetch" /* 9007 */;
import NitroRequest from "NitroRequest" /* 9010 */;
import NitroHeaders from "NitroHeaders" /* 9011 */;
import _mod9015 from "module_9015" /* 9015 */;
import NetworkInspector from "NetworkInspector" /* 9021 */;
import generateCurl from "generateCurl" /* 9022 */;
import hybridObject from "hybridObject" /* 9023 */;
import NitroXMLHttpRequest from "NitroXMLHttpRequest" /* 9030 */;
import _mod9032 from "module_9032" /* 9032 */;
import _asyncToGenerator from "_asyncToGenerator" /* 9033 */;

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
export const Response = _mod9015.NitroResponse;
export const Request = NitroRequest.NitroRequest;
export const XMLHttpRequest = NitroXMLHttpRequest.NitroXMLHttpRequest;
export const NitroFetch = hybridObject.NitroFetch;
export const registerTokenRefresh = _mod9032.registerTokenRefresh;
export const clearTokenRefresh = _mod9032.clearTokenRefresh;
export const callRefreshEndpoint = _mod9032.callRefreshEndpoint;
export const getStoredTokenRefreshConfig = _mod9032.getStoredTokenRefreshConfig;
export const getNestedField = _mod9032.getNestedField;
export const applyTemplate = _mod9032.applyTemplate;
export { NetworkInspector_export as NetworkInspector };
export { generateCurl_export as generateCurl };
export const profileFetch = _asyncToGenerator.profileFetch;
