// Module ID: 8969
// Function ID: 8970
// Dependencies: [8970, 8974, 8978, 8973, 8993, 8986, 8995, 8984, 8985, 8996]

// Module 8969
import nitroFetch from "nitroFetch" /* 8970 */;
import NitroRequest from "NitroRequest" /* 8973 */;
import NitroHeaders from "NitroHeaders" /* 8974 */;
import _mod8978 from "module_8978" /* 8978 */;
import NetworkInspector from "NetworkInspector" /* 8984 */;
import generateCurl from "generateCurl" /* 8985 */;
import hybridObject from "hybridObject" /* 8986 */;
import NitroXMLHttpRequest from "NitroXMLHttpRequest" /* 8993 */;
import _mod8995 from "module_8995" /* 8995 */;
import _asyncToGenerator from "_asyncToGenerator" /* 8996 */;

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
export const Response = _mod8978.NitroResponse;
export const Request = NitroRequest.NitroRequest;
export const XMLHttpRequest = NitroXMLHttpRequest.NitroXMLHttpRequest;
export const NitroFetch = hybridObject.NitroFetch;
export const registerTokenRefresh = _mod8995.registerTokenRefresh;
export const clearTokenRefresh = _mod8995.clearTokenRefresh;
export const callRefreshEndpoint = _mod8995.callRefreshEndpoint;
export const getStoredTokenRefreshConfig = _mod8995.getStoredTokenRefreshConfig;
export const getNestedField = _mod8995.getNestedField;
export const applyTemplate = _mod8995.applyTemplate;
export { NetworkInspector_export as NetworkInspector };
export { generateCurl_export as generateCurl };
export const profileFetch = _asyncToGenerator.profileFetch;
