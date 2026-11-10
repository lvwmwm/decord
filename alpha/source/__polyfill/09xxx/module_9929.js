// Module ID: 9929
// Function ID: 9930
// Dependencies: [9930, 9934, 9938, 9933, 9953, 9946, 9955, 9944, 9945, 9956]

// Module 9929
import nitroFetch from "nitroFetch" /* 9930 */;
import NitroRequest from "NitroRequest" /* 9933 */;
import NitroHeaders from "NitroHeaders" /* 9934 */;
import _mod9938 from "module_9938" /* 9938 */;
import NetworkInspector from "NetworkInspector" /* 9944 */;
import generateCurl from "generateCurl" /* 9945 */;
import hybridObject from "hybridObject" /* 9946 */;
import NitroXMLHttpRequest from "NitroXMLHttpRequest" /* 9953 */;
import _mod9955 from "module_9955" /* 9955 */;
import _asyncToGenerator from "_asyncToGenerator" /* 9956 */;

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
export const Response = _mod9938.NitroResponse;
export const Request = NitroRequest.NitroRequest;
export const XMLHttpRequest = NitroXMLHttpRequest.NitroXMLHttpRequest;
export const NitroFetch = hybridObject.NitroFetch;
export const registerTokenRefresh = _mod9955.registerTokenRefresh;
export const clearTokenRefresh = _mod9955.clearTokenRefresh;
export const callRefreshEndpoint = _mod9955.callRefreshEndpoint;
export const getStoredTokenRefreshConfig = _mod9955.getStoredTokenRefreshConfig;
export const getNestedField = _mod9955.getNestedField;
export const applyTemplate = _mod9955.applyTemplate;
export { NetworkInspector_export as NetworkInspector };
export { generateCurl_export as generateCurl };
export const profileFetch = _asyncToGenerator.profileFetch;
