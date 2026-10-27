// Module ID: 907
// Function ID: 908
// Name: _addMeasureSpans
// Dependencies: [908, 932, 938, 933, 939, 940, 941, 942, 943, 937, 944]

// Module 907 (_addMeasureSpans)
import _mod908 from "module_908" /* 908 */;
import _mod932 from "module_932" /* 932 */;
import extractNetworkProtocol from "extractNetworkProtocol" /* 933 */;
import resourceTimingToSpanAttributes from "resourceTimingToSpanAttributes" /* 937 */;
import _onElementTiming from "_onElementTiming" /* 938 */;
import _mod939 from "module_939" /* 939 */;
import _mod940 from "module_940" /* 940 */;
import fetch from "fetch" /* 941 */;
import SENTRY_XHR_DATA_KEY from "SENTRY_XHR_DATA_KEY" /* 942 */;
import ORIGINAL_REQ_BODY from "ORIGINAL_REQ_BODY" /* 943 */;
import _onInp from "_onInp" /* 944 */;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const extractNetworkProtocol_export = extractNetworkProtocol.extractNetworkProtocol;
const fetch_export = fetch.fetch;
const SENTRY_XHR_DATA_KEY_export = SENTRY_XHR_DATA_KEY.SENTRY_XHR_DATA_KEY;
const resourceTimingToSpanAttributes_export = resourceTimingToSpanAttributes.resourceTimingToSpanAttributes;

export const addClsInstrumentationHandler = _mod908.addClsInstrumentationHandler;
export const addInpInstrumentationHandler = _mod908.addInpInstrumentationHandler;
export const addLcpInstrumentationHandler = _mod908.addLcpInstrumentationHandler;
export const addPerformanceInstrumentationHandler = _mod908.addPerformanceInstrumentationHandler;
export const addTtfbInstrumentationHandler = _mod908.addTtfbInstrumentationHandler;
export const addPerformanceEntries = _mod932.addPerformanceEntries;
export const startTrackingInteractions = _mod932.startTrackingInteractions;
export const startTrackingLongAnimationFrames = _mod932.startTrackingLongAnimationFrames;
export const startTrackingLongTasks = _mod932.startTrackingLongTasks;
export const startTrackingWebVitals = _mod932.startTrackingWebVitals;
export const startTrackingElementTiming = _onElementTiming.startTrackingElementTiming;
export { extractNetworkProtocol_export as extractNetworkProtocol };
export const addClickKeypressInstrumentationHandler = _mod939.addClickKeypressInstrumentationHandler;
export const addHistoryInstrumentationHandler = _mod940.addHistoryInstrumentationHandler;
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
