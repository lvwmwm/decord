// Module ID: 679
// Function ID: 680
// Dependencies: [680, 686, 1004, 893, 982, 1045, 1049, 1063, 1056, 1076, 1069, 1074, 1066, 870]

// Module 679
import _mod686 from "module_686" /* 686 */;
import NativeModules from "NativeModules" /* 870 */;
import feedbackAsyncIntegration from "feedbackAsyncIntegration" /* 893 */;
import SDK_PACKAGE_NAME from "SDK_PACKAGE_NAME" /* 982 */;
import init from "init" /* 1004 */;
import _mod1045 from "module_1045" /* 1045 */;
import _mod1049 from "module_1049" /* 1049 */;
import reactNativeTracingIntegration from "reactNativeTracingIntegration" /* 1056 */;
import _mod1063 from "module_1063" /* 1063 */;
import _mod1066 from "module_1066" /* 1066 */;
import _mod1069 from "module_1069" /* 1069 */;
import _mod1074 from "module_1074" /* 1074 */;
import warn from "warn" /* 1076 */;

const require = globalThis.__r;

for (const key10013 in require("debugSymbolicatorIntegration")) {
  arg5[key10013] = require("debugSymbolicatorIntegration")[key10013];
  continue;
}

export const addBreadcrumb = _mod686.addBreadcrumb;
export const addIntegration = _mod686.addIntegration;
export const captureException = _mod686.captureException;
export const captureEvent = _mod686.captureEvent;
export const captureFeedback = _mod686.captureFeedback;
export const captureMessage = _mod686.captureMessage;
export const Scope = _mod686.Scope;
export const setContext = _mod686.setContext;
export const setExtra = _mod686.setExtra;
export const setExtras = _mod686.setExtras;
export const setTag = _mod686.setTag;
export const setTags = _mod686.setTags;
export const setUser = _mod686.setUser;
export const startInactiveSpan = _mod686.startInactiveSpan;
export const startSpan = _mod686.startSpan;
export const startSpanManual = _mod686.startSpanManual;
export const getActiveSpan = _mod686.getActiveSpan;
export const getRootSpan = _mod686.getRootSpan;
export const withActiveSpan = _mod686.withActiveSpan;
export const suppressTracing = _mod686.suppressTracing;
export const spanToJSON = _mod686.spanToJSON;
export const spanIsSampled = _mod686.spanIsSampled;
export const setMeasurement = _mod686.setMeasurement;
export const getCurrentScope = _mod686.getCurrentScope;
export const getGlobalScope = _mod686.getGlobalScope;
export const getIsolationScope = _mod686.getIsolationScope;
export const getClient = _mod686.getClient;
export const setCurrentClient = _mod686.setCurrentClient;
export const addEventProcessor = _mod686.addEventProcessor;
export const lastEventId = _mod686.lastEventId;
export const ErrorBoundary = init.ErrorBoundary;
export const withErrorBoundary = init.withErrorBoundary;
export const createReduxEnhancer = init.createReduxEnhancer;
export const Profiler = init.Profiler;
export const useProfiler = init.useProfiler;
export const withProfiler = init.withProfiler;
export const logger = feedbackAsyncIntegration.logger;
export const consoleLoggingIntegration = feedbackAsyncIntegration.consoleLoggingIntegration;
export const featureFlagsIntegration = feedbackAsyncIntegration.featureFlagsIntegration;
export const metrics = feedbackAsyncIntegration.metrics;
export const SDK_NAME = SDK_PACKAGE_NAME.SDK_NAME;
export const SDK_VERSION = SDK_PACKAGE_NAME.SDK_VERSION;
export const ReactNativeClient = _mod1045.ReactNativeClient;
export const init = _mod1049.init;
export const wrap = _mod1049.wrap;
export const nativeCrash = _mod1049.nativeCrash;
export const flush = _mod1049.flush;
export const close = _mod1049.close;
export const withScope = _mod1049.withScope;
export const crashedLastRun = _mod1049.crashedLastRun;
export const TouchEventBoundary = _mod1063.TouchEventBoundary;
export const withTouchEventBoundary = _mod1063.withTouchEventBoundary;
export const reactNativeTracingIntegration = reactNativeTracingIntegration.reactNativeTracingIntegration;
export const getCurrentReactNativeTracingIntegration = reactNativeTracingIntegration.getCurrentReactNativeTracingIntegration;
export const getReactNativeTracingIntegration = reactNativeTracingIntegration.getReactNativeTracingIntegration;
export const reactNavigationIntegration = reactNativeTracingIntegration.reactNavigationIntegration;
export const reactNativeNavigationIntegration = reactNativeTracingIntegration.reactNativeNavigationIntegration;
export const sentryTraceGesture = reactNativeTracingIntegration.sentryTraceGesture;
export const TimeToInitialDisplay = reactNativeTracingIntegration.TimeToInitialDisplay;
export const TimeToFullDisplay = reactNativeTracingIntegration.TimeToFullDisplay;
export const startTimeToInitialDisplaySpan = reactNativeTracingIntegration.startTimeToInitialDisplaySpan;
export const startTimeToFullDisplaySpan = reactNativeTracingIntegration.startTimeToFullDisplaySpan;
export const startIdleNavigationSpan = reactNativeTracingIntegration.startIdleNavigationSpan;
export const startIdleSpan = reactNativeTracingIntegration.startIdleSpan;
export const getDefaultIdleNavigationSpanOptions = reactNativeTracingIntegration.getDefaultIdleNavigationSpanOptions;
export const createTimeToFullDisplay = reactNativeTracingIntegration.createTimeToFullDisplay;
export const createTimeToInitialDisplay = reactNativeTracingIntegration.createTimeToInitialDisplay;
export const Mask = warn.Mask;
export const Unmask = warn.Unmask;
export const FeedbackButton = _mod1069.FeedbackButton;
export const FeedbackWidget = _mod1074.FeedbackWidget;
export const showFeedbackWidget = _mod1066.showFeedbackWidget;
export const showFeedbackButton = _mod1066.showFeedbackButton;
export const hideFeedbackButton = _mod1066.hideFeedbackButton;
export const getDataFromUri = NativeModules.getDataFromUri;
