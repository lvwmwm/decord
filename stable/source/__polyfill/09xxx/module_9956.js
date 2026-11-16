// Module ID: 9956
// Function ID: 9957
// Dependencies: [9957, 9961, 9965, 9960, 9980, 9973, 9982, 9971, 9972, 9983]

// Module 9956
import nitroFetch from "nitroFetch" /* 9957 */;
import NitroRequest from "NitroRequest" /* 9960 */;
import NitroHeaders from "NitroHeaders" /* 9961 */;
import _mod9965 from "module_9965" /* 9965 */;
import NetworkInspector from "NetworkInspector" /* 9971 */;
import generateCurl from "generateCurl" /* 9972 */;
import hybridObject from "hybridObject" /* 9973 */;
import NitroXMLHttpRequest from "NitroXMLHttpRequest" /* 9980 */;
import _mod9982 from "module_9982" /* 9982 */;
import _asyncToGenerator from "_asyncToGenerator" /* 9983 */;

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
export const Response = _mod9965.NitroResponse;
export const Request = NitroRequest.NitroRequest;
export const XMLHttpRequest = NitroXMLHttpRequest.NitroXMLHttpRequest;
export const NitroFetch = hybridObject.NitroFetch;
export const registerTokenRefresh = _mod9982.registerTokenRefresh;
export const clearTokenRefresh = _mod9982.clearTokenRefresh;
export const callRefreshEndpoint = _mod9982.callRefreshEndpoint;
export const getStoredTokenRefreshConfig = _mod9982.getStoredTokenRefreshConfig;
export const getNestedField = _mod9982.getNestedField;
export const applyTemplate = _mod9982.applyTemplate;
export { NetworkInspector_export as NetworkInspector };
export { generateCurl_export as generateCurl };
export const profileFetch = _asyncToGenerator.profileFetch;
