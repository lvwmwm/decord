// Module ID: 9988
// Function ID: 9989
// Dependencies: [9989, 9993, 9997, 9992, 10012, 10005, 10014, 10003, 10004, 10015]

// Module 9988
import nitroFetch from "nitroFetch" /* 9989 */;
import NitroRequest from "NitroRequest" /* 9992 */;
import NitroHeaders from "NitroHeaders" /* 9993 */;
import _mod9997 from "module_9997" /* 9997 */;
import NetworkInspector from "NetworkInspector" /* 10003 */;
import generateCurl from "generateCurl" /* 10004 */;
import hybridObject from "hybridObject" /* 10005 */;
import NitroXMLHttpRequest from "NitroXMLHttpRequest" /* 10012 */;
import _mod10014 from "module_10014" /* 10014 */;
import _asyncToGenerator from "_asyncToGenerator" /* 10015 */;

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
export const Response = _mod9997.NitroResponse;
export const Request = NitroRequest.NitroRequest;
export const XMLHttpRequest = NitroXMLHttpRequest.NitroXMLHttpRequest;
export const NitroFetch = hybridObject.NitroFetch;
export const registerTokenRefresh = _mod10014.registerTokenRefresh;
export const clearTokenRefresh = _mod10014.clearTokenRefresh;
export const callRefreshEndpoint = _mod10014.callRefreshEndpoint;
export const getStoredTokenRefreshConfig = _mod10014.getStoredTokenRefreshConfig;
export const getNestedField = _mod10014.getNestedField;
export const applyTemplate = _mod10014.applyTemplate;
export { NetworkInspector_export as NetworkInspector };
export { generateCurl_export as generateCurl };
export const profileFetch = _asyncToGenerator.profileFetch;
