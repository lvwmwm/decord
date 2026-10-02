// Module ID: 910
// Function ID: 911
// Name: _addMeasureSpans
// Dependencies: [911, 935, 941, 936, 942, 943, 944, 945, 946, 940, 947]

// Module 910 (_addMeasureSpans)
import _mod911 from "module_911" /* 911 */;
import _mod935 from "module_935" /* 935 */;
import extractNetworkProtocol from "extractNetworkProtocol" /* 936 */;
import resourceTimingToSpanAttributes from "resourceTimingToSpanAttributes" /* 940 */;
import _onElementTiming from "_onElementTiming" /* 941 */;
import _mod942 from "module_942" /* 942 */;
import _mod943 from "module_943" /* 943 */;
import fetch from "fetch" /* 944 */;
import SENTRY_XHR_DATA_KEY from "SENTRY_XHR_DATA_KEY" /* 945 */;
import ORIGINAL_REQ_BODY from "ORIGINAL_REQ_BODY" /* 946 */;
import _onInp from "_onInp" /* 947 */;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const extractNetworkProtocol_export = extractNetworkProtocol.extractNetworkProtocol;
const fetch_export = fetch.fetch;
const SENTRY_XHR_DATA_KEY_export = SENTRY_XHR_DATA_KEY.SENTRY_XHR_DATA_KEY;
const resourceTimingToSpanAttributes_export = resourceTimingToSpanAttributes.resourceTimingToSpanAttributes;

export const addClsInstrumentationHandler = _mod911.addClsInstrumentationHandler;
export const addInpInstrumentationHandler = _mod911.addInpInstrumentationHandler;
export const addLcpInstrumentationHandler = _mod911.addLcpInstrumentationHandler;
export const addPerformanceInstrumentationHandler = _mod911.addPerformanceInstrumentationHandler;
export const addTtfbInstrumentationHandler = _mod911.addTtfbInstrumentationHandler;
export const addPerformanceEntries = _mod935.addPerformanceEntries;
export const startTrackingInteractions = _mod935.startTrackingInteractions;
export const startTrackingLongAnimationFrames = _mod935.startTrackingLongAnimationFrames;
export const startTrackingLongTasks = _mod935.startTrackingLongTasks;
export const startTrackingWebVitals = _mod935.startTrackingWebVitals;
export const startTrackingElementTiming = _onElementTiming.startTrackingElementTiming;
export { extractNetworkProtocol_export as extractNetworkProtocol };
export const addClickKeypressInstrumentationHandler = _mod942.addClickKeypressInstrumentationHandler;
export const addHistoryInstrumentationHandler = _mod943.addHistoryInstrumentationHandler;
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
