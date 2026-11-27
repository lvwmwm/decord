// Module ID: 8970
// Function ID: 8971
// Dependencies: [8971, 8975, 8979, 8974, 8994, 8987, 8996, 8985, 8986, 8997]

// Module 8970
import nitroFetch from "nitroFetch" /* 8971 */;
import NitroRequest from "NitroRequest" /* 8974 */;
import NitroHeaders from "NitroHeaders" /* 8975 */;
import _mod8979 from "module_8979" /* 8979 */;
import NetworkInspector from "NetworkInspector" /* 8985 */;
import generateCurl from "generateCurl" /* 8986 */;
import hybridObject from "hybridObject" /* 8987 */;
import NitroXMLHttpRequest from "NitroXMLHttpRequest" /* 8994 */;
import _mod8996 from "module_8996" /* 8996 */;
import _asyncToGenerator from "_asyncToGenerator" /* 8997 */;

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
export const Response = _mod8979.NitroResponse;
export const Request = NitroRequest.NitroRequest;
export const XMLHttpRequest = NitroXMLHttpRequest.NitroXMLHttpRequest;
export const NitroFetch = hybridObject.NitroFetch;
export const registerTokenRefresh = _mod8996.registerTokenRefresh;
export const clearTokenRefresh = _mod8996.clearTokenRefresh;
export const callRefreshEndpoint = _mod8996.callRefreshEndpoint;
export const getStoredTokenRefreshConfig = _mod8996.getStoredTokenRefreshConfig;
export const getNestedField = _mod8996.getNestedField;
export const applyTemplate = _mod8996.applyTemplate;
export { NetworkInspector_export as NetworkInspector };
export { generateCurl_export as generateCurl };
export const profileFetch = _asyncToGenerator.profileFetch;
