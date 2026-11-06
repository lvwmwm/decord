// Module ID: 9939
// Function ID: 9940
// Dependencies: [9940, 9944, 9948, 9943, 9963, 9956, 9965, 9954, 9955, 9966]

// Module 9939
import nitroFetch from "nitroFetch" /* 9940 */;
import NitroRequest from "NitroRequest" /* 9943 */;
import NitroHeaders from "NitroHeaders" /* 9944 */;
import _mod9948 from "module_9948" /* 9948 */;
import NetworkInspector from "NetworkInspector" /* 9954 */;
import generateCurl from "generateCurl" /* 9955 */;
import hybridObject from "hybridObject" /* 9956 */;
import NitroXMLHttpRequest from "NitroXMLHttpRequest" /* 9963 */;
import _mod9965 from "module_9965" /* 9965 */;
import _asyncToGenerator from "_asyncToGenerator" /* 9966 */;

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
export const Response = _mod9948.NitroResponse;
export const Request = NitroRequest.NitroRequest;
export const XMLHttpRequest = NitroXMLHttpRequest.NitroXMLHttpRequest;
export const NitroFetch = hybridObject.NitroFetch;
export const registerTokenRefresh = _mod9965.registerTokenRefresh;
export const clearTokenRefresh = _mod9965.clearTokenRefresh;
export const callRefreshEndpoint = _mod9965.callRefreshEndpoint;
export const getStoredTokenRefreshConfig = _mod9965.getStoredTokenRefreshConfig;
export const getNestedField = _mod9965.getNestedField;
export const applyTemplate = _mod9965.applyTemplate;
export { NetworkInspector_export as NetworkInspector };
export { generateCurl_export as generateCurl };
export const profileFetch = _asyncToGenerator.profileFetch;
