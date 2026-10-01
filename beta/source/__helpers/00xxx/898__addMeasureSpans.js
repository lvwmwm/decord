// Module ID: 898
// Function ID: 899
// Name: _addMeasureSpans
// Dependencies: [899, 923, 929, 924, 930, 931, 932, 933, 934, 928, 935]

// Module 898 (_addMeasureSpans)
import _mod899 from "module_899" /* 899 */;
import _mod923 from "module_923" /* 923 */;
import extractNetworkProtocol from "extractNetworkProtocol" /* 924 */;
import resourceTimingToSpanAttributes from "resourceTimingToSpanAttributes" /* 928 */;
import _onElementTiming from "_onElementTiming" /* 929 */;
import _mod930 from "module_930" /* 930 */;
import _mod931 from "module_931" /* 931 */;
import fetch from "fetch" /* 932 */;
import SENTRY_XHR_DATA_KEY from "SENTRY_XHR_DATA_KEY" /* 933 */;
import ORIGINAL_REQ_BODY from "ORIGINAL_REQ_BODY" /* 934 */;
import _onInp from "_onInp" /* 935 */;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const extractNetworkProtocol_export = extractNetworkProtocol.extractNetworkProtocol;
const fetch_export = fetch.fetch;
const SENTRY_XHR_DATA_KEY_export = SENTRY_XHR_DATA_KEY.SENTRY_XHR_DATA_KEY;
const resourceTimingToSpanAttributes_export = resourceTimingToSpanAttributes.resourceTimingToSpanAttributes;

export const addClsInstrumentationHandler = _mod899.addClsInstrumentationHandler;
export const addInpInstrumentationHandler = _mod899.addInpInstrumentationHandler;
export const addLcpInstrumentationHandler = _mod899.addLcpInstrumentationHandler;
export const addPerformanceInstrumentationHandler = _mod899.addPerformanceInstrumentationHandler;
export const addTtfbInstrumentationHandler = _mod899.addTtfbInstrumentationHandler;
export const addPerformanceEntries = _mod923.addPerformanceEntries;
export const startTrackingInteractions = _mod923.startTrackingInteractions;
export const startTrackingLongAnimationFrames = _mod923.startTrackingLongAnimationFrames;
export const startTrackingLongTasks = _mod923.startTrackingLongTasks;
export const startTrackingWebVitals = _mod923.startTrackingWebVitals;
export const startTrackingElementTiming = _onElementTiming.startTrackingElementTiming;
export { extractNetworkProtocol_export as extractNetworkProtocol };
export const addClickKeypressInstrumentationHandler = _mod930.addClickKeypressInstrumentationHandler;
export const addHistoryInstrumentationHandler = _mod931.addHistoryInstrumentationHandler;
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
