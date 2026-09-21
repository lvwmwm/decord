// Module ID: 902
// Function ID: 903
// Name: triggerHandlers
// Dependencies: [903, 927, 933, 928, 934, 935, 936, 937, 938, 932, 939]

// Module 902 (triggerHandlers)
import _mod903 from "module_903" /* 903 */;
import _addMeasureSpans from "_addMeasureSpans" /* 927 */;
import extractNetworkProtocol from "extractNetworkProtocol" /* 928 */;
import resourceTimingToSpanAttributes from "resourceTimingToSpanAttributes" /* 932 */;
import _onElementTiming from "_onElementTiming" /* 933 */;
import instrumentDOM from "instrumentDOM" /* 934 */;
import instrumentHistory from "instrumentHistory" /* 935 */;
import fetch from "fetch" /* 936 */;
import instrumentXHR from "instrumentXHR" /* 937 */;
import serializeFormData from "serializeFormData" /* 938 */;
import _onInp from "_onInp" /* 939 */;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const addClsInstrumentationHandler = _mod903.addClsInstrumentationHandler;
export const addInpInstrumentationHandler = _mod903.addInpInstrumentationHandler;
export const addLcpInstrumentationHandler = _mod903.addLcpInstrumentationHandler;
export const addPerformanceInstrumentationHandler = _mod903.addPerformanceInstrumentationHandler;
export const addTtfbInstrumentationHandler = _mod903.addTtfbInstrumentationHandler;
export const addPerformanceEntries = _addMeasureSpans.addPerformanceEntries;
export const startTrackingInteractions = _addMeasureSpans.startTrackingInteractions;
export const startTrackingLongAnimationFrames = _addMeasureSpans.startTrackingLongAnimationFrames;
export const startTrackingLongTasks = _addMeasureSpans.startTrackingLongTasks;
export const startTrackingWebVitals = _addMeasureSpans.startTrackingWebVitals;
export const startTrackingElementTiming = _onElementTiming.startTrackingElementTiming;
export const extractNetworkProtocol = extractNetworkProtocol.extractNetworkProtocol;
export const addClickKeypressInstrumentationHandler = instrumentDOM.addClickKeypressInstrumentationHandler;
export const addHistoryInstrumentationHandler = instrumentHistory.addHistoryInstrumentationHandler;
export const clearCachedImplementation = fetch.clearCachedImplementation;
export const fetch = fetch.fetch;
export const getNativeImplementation = fetch.getNativeImplementation;
export const setTimeout = fetch.setTimeout;
export const SENTRY_XHR_DATA_KEY = instrumentXHR.SENTRY_XHR_DATA_KEY;
export const addXhrInstrumentationHandler = instrumentXHR.addXhrInstrumentationHandler;
export const getBodyString = serializeFormData.getBodyString;
export const getFetchRequestArgBody = serializeFormData.getFetchRequestArgBody;
export const parseXhrResponseHeaders = serializeFormData.parseXhrResponseHeaders;
export const serializeFormData = serializeFormData.serializeFormData;
export const resourceTimingToSpanAttributes = resourceTimingToSpanAttributes.resourceTimingToSpanAttributes;
export const registerInpInteractionListener = _onInp.registerInpInteractionListener;
export const startTrackingINP = _onInp.startTrackingINP;
