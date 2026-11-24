// Module ID: 8828
// Function ID: 8829
// Dependencies: [8829, 8833, 8837, 8832, 8852, 8845, 8854, 8843, 8844, 8855]

// Module 8828
import nitroFetch from "nitroFetch" /* 8829 */;
import NitroRequest from "NitroRequest" /* 8832 */;
import NitroHeaders from "NitroHeaders" /* 8833 */;
import _mod8837 from "module_8837" /* 8837 */;
import NetworkInspector from "NetworkInspector" /* 8843 */;
import generateCurl from "generateCurl" /* 8844 */;
import hybridObject from "hybridObject" /* 8845 */;
import NitroXMLHttpRequest from "NitroXMLHttpRequest" /* 8852 */;
import _mod8854 from "module_8854" /* 8854 */;
import _asyncToGenerator from "_asyncToGenerator" /* 8855 */;

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
export const Response = _mod8837.NitroResponse;
export const Request = NitroRequest.NitroRequest;
export const XMLHttpRequest = NitroXMLHttpRequest.NitroXMLHttpRequest;
export const NitroFetch = hybridObject.NitroFetch;
export const registerTokenRefresh = _mod8854.registerTokenRefresh;
export const clearTokenRefresh = _mod8854.clearTokenRefresh;
export const callRefreshEndpoint = _mod8854.callRefreshEndpoint;
export const getStoredTokenRefreshConfig = _mod8854.getStoredTokenRefreshConfig;
export const getNestedField = _mod8854.getNestedField;
export const applyTemplate = _mod8854.applyTemplate;
export { NetworkInspector_export as NetworkInspector };
export { generateCurl_export as generateCurl };
export const profileFetch = _asyncToGenerator.profileFetch;
