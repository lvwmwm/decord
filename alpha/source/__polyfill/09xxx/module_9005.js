// Module ID: 9005
// Function ID: 9006
// Dependencies: [9006, 9010, 9014, 9009, 9029, 9022, 9031, 9020, 9021, 9032]

// Module 9005
import nitroFetch from "nitroFetch" /* 9006 */;
import NitroRequest from "NitroRequest" /* 9009 */;
import NitroHeaders from "NitroHeaders" /* 9010 */;
import _mod9014 from "module_9014" /* 9014 */;
import NetworkInspector from "NetworkInspector" /* 9020 */;
import generateCurl from "generateCurl" /* 9021 */;
import hybridObject from "hybridObject" /* 9022 */;
import NitroXMLHttpRequest from "NitroXMLHttpRequest" /* 9029 */;
import _mod9031 from "module_9031" /* 9031 */;
import _asyncToGenerator from "_asyncToGenerator" /* 9032 */;

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
export const Response = _mod9014.NitroResponse;
export const Request = NitroRequest.NitroRequest;
export const XMLHttpRequest = NitroXMLHttpRequest.NitroXMLHttpRequest;
export const NitroFetch = hybridObject.NitroFetch;
export const registerTokenRefresh = _mod9031.registerTokenRefresh;
export const clearTokenRefresh = _mod9031.clearTokenRefresh;
export const callRefreshEndpoint = _mod9031.callRefreshEndpoint;
export const getStoredTokenRefreshConfig = _mod9031.getStoredTokenRefreshConfig;
export const getNestedField = _mod9031.getNestedField;
export const applyTemplate = _mod9031.applyTemplate;
export { NetworkInspector_export as NetworkInspector };
export { generateCurl_export as generateCurl };
export const profileFetch = _asyncToGenerator.profileFetch;
