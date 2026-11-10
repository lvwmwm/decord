// Module ID: 895
// Function ID: 896
// Name: _addMeasureSpans
// Dependencies: [896, 920, 926, 921, 927, 928, 929, 930, 931, 925, 932]

// Module 895 (_addMeasureSpans)
import _mod896 from "module_896" /* 896 */;
import _mod920 from "module_920" /* 920 */;
import extractNetworkProtocol from "extractNetworkProtocol" /* 921 */;
import resourceTimingToSpanAttributes from "resourceTimingToSpanAttributes" /* 925 */;
import _onElementTiming from "_onElementTiming" /* 926 */;
import _mod927 from "module_927" /* 927 */;
import _mod928 from "module_928" /* 928 */;
import fetch from "fetch" /* 929 */;
import SENTRY_XHR_DATA_KEY from "SENTRY_XHR_DATA_KEY" /* 930 */;
import ORIGINAL_REQ_BODY from "ORIGINAL_REQ_BODY" /* 931 */;
import _onInp from "_onInp" /* 932 */;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const extractNetworkProtocol_export = extractNetworkProtocol.extractNetworkProtocol;
const fetch_export = fetch.fetch;
const SENTRY_XHR_DATA_KEY_export = SENTRY_XHR_DATA_KEY.SENTRY_XHR_DATA_KEY;
const resourceTimingToSpanAttributes_export = resourceTimingToSpanAttributes.resourceTimingToSpanAttributes;

export const addClsInstrumentationHandler = _mod896.addClsInstrumentationHandler;
export const addInpInstrumentationHandler = _mod896.addInpInstrumentationHandler;
export const addLcpInstrumentationHandler = _mod896.addLcpInstrumentationHandler;
export const addPerformanceInstrumentationHandler = _mod896.addPerformanceInstrumentationHandler;
export const addTtfbInstrumentationHandler = _mod896.addTtfbInstrumentationHandler;
export const addPerformanceEntries = _mod920.addPerformanceEntries;
export const startTrackingInteractions = _mod920.startTrackingInteractions;
export const startTrackingLongAnimationFrames = _mod920.startTrackingLongAnimationFrames;
export const startTrackingLongTasks = _mod920.startTrackingLongTasks;
export const startTrackingWebVitals = _mod920.startTrackingWebVitals;
export const startTrackingElementTiming = _onElementTiming.startTrackingElementTiming;
export { extractNetworkProtocol_export as extractNetworkProtocol };
export const addClickKeypressInstrumentationHandler = _mod927.addClickKeypressInstrumentationHandler;
export const addHistoryInstrumentationHandler = _mod928.addHistoryInstrumentationHandler;
export const clearCachedImplementation = fetch.clearCachedImplementation;
export { fetch_export as fetch };
export const getNativeImplementation = fetch.getNativeImplementation;
export const setTimeout = fetch.setTimeout;
export { SENTRY_XHR_DATA_KEY_export as SENTRY_XHR_DATA_KEY };
export const addXhrInstrumentationHandler = SENTRY_XHR_DATA_KEY.addXhrInstrumentationHandler;
export const getBodyString = ORIGINAL_REQ_BODY.getBodyString;
export const getFetchRequestArgBody = ORIGINAL_REQ_BODY.getFetchRequestArgBody;
export const parseXhrResponseHeaders = ORIGINAL_REQ_BODY.parseXhrResponseHeaders;
export const serializeFormData = ORIGINAL_REQ_BODY.serializeFormData;
export { resourceTimingToSpanAttributes_export as resourceTimingToSpanAttributes };
export const registerInpInteractionListener = _onInp.registerInpInteractionListener;
export const startTrackingINP = _onInp.startTrackingINP;
