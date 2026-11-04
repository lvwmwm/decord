// Module ID: 9982
// Function ID: 9983
// Dependencies: [9983, 9987, 9991, 9986, 10006, 9999, 10008, 9997, 9998, 10009]

// Module 9982
import nitroFetch from "nitroFetch" /* 9983 */;
import NitroRequest from "NitroRequest" /* 9986 */;
import NitroHeaders from "NitroHeaders" /* 9987 */;
import _mod9991 from "module_9991" /* 9991 */;
import NetworkInspector from "NetworkInspector" /* 9997 */;
import generateCurl from "generateCurl" /* 9998 */;
import hybridObject from "hybridObject" /* 9999 */;
import NitroXMLHttpRequest from "NitroXMLHttpRequest" /* 10006 */;
import _mod10008 from "module_10008" /* 10008 */;
import _asyncToGenerator from "_asyncToGenerator" /* 10009 */;

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
export const Response = _mod9991.NitroResponse;
export const Request = NitroRequest.NitroRequest;
export const XMLHttpRequest = NitroXMLHttpRequest.NitroXMLHttpRequest;
export const NitroFetch = hybridObject.NitroFetch;
export const registerTokenRefresh = _mod10008.registerTokenRefresh;
export const clearTokenRefresh = _mod10008.clearTokenRefresh;
export const callRefreshEndpoint = _mod10008.callRefreshEndpoint;
export const getStoredTokenRefreshConfig = _mod10008.getStoredTokenRefreshConfig;
export const getNestedField = _mod10008.getNestedField;
export const applyTemplate = _mod10008.applyTemplate;
export { NetworkInspector_export as NetworkInspector };
export { generateCurl_export as generateCurl };
export const profileFetch = _asyncToGenerator.profileFetch;
