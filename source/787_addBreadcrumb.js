// Module ID: 787
// Function ID: 8909
// Name: addBreadcrumb
// Dependencies: [788, 794, 1111, 1000, 1089, 1152, 1156, 1170, 1163, 1183, 1176, 1181, 1173, 977]

// Module 787 (addBreadcrumb)
for (const key10015 in require("debugSymbolicatorIntegration")) {
  let tmp2 = key10015;
  arg5[key10015] = require("debugSymbolicatorIntegration")[key10015];
  continue;
}

export const addBreadcrumb = require("registerSpanErrorInstrumentation").addBreadcrumb;
export const addIntegration = require("registerSpanErrorInstrumentation").addIntegration;
export const captureException = require("registerSpanErrorInstrumentation").captureException;
export const captureEvent = require("registerSpanErrorInstrumentation").captureEvent;
export const captureFeedback = require("registerSpanErrorInstrumentation").captureFeedback;
export const captureMessage = require("registerSpanErrorInstrumentation").captureMessage;
export const Scope = require("registerSpanErrorInstrumentation").Scope;
export const setContext = require("registerSpanErrorInstrumentation").setContext;
export const setExtra = require("registerSpanErrorInstrumentation").setExtra;
export const setExtras = require("registerSpanErrorInstrumentation").setExtras;
export const setTag = require("registerSpanErrorInstrumentation").setTag;
export const setTags = require("registerSpanErrorInstrumentation").setTags;
export const setUser = require("registerSpanErrorInstrumentation").setUser;
export const startInactiveSpan = require("registerSpanErrorInstrumentation").startInactiveSpan;
export const startSpan = require("registerSpanErrorInstrumentation").startSpan;
export const startSpanManual = require("registerSpanErrorInstrumentation").startSpanManual;
export const getActiveSpan = require("registerSpanErrorInstrumentation").getActiveSpan;
export const getRootSpan = require("registerSpanErrorInstrumentation").getRootSpan;
export const withActiveSpan = require("registerSpanErrorInstrumentation").withActiveSpan;
export const suppressTracing = require("registerSpanErrorInstrumentation").suppressTracing;
export const spanToJSON = require("registerSpanErrorInstrumentation").spanToJSON;
export const spanIsSampled = require("registerSpanErrorInstrumentation").spanIsSampled;
export const setMeasurement = require("registerSpanErrorInstrumentation").setMeasurement;
export const getCurrentScope = require("registerSpanErrorInstrumentation").getCurrentScope;
export const getGlobalScope = require("registerSpanErrorInstrumentation").getGlobalScope;
export const getIsolationScope = require("registerSpanErrorInstrumentation").getIsolationScope;
export const getClient = require("registerSpanErrorInstrumentation").getClient;
export const setCurrentClient = require("registerSpanErrorInstrumentation").setCurrentClient;
export const addEventProcessor = require("registerSpanErrorInstrumentation").addEventProcessor;
export const lastEventId = require("registerSpanErrorInstrumentation").lastEventId;
export const ErrorBoundary = require("init").ErrorBoundary;
export const withErrorBoundary = require("init").withErrorBoundary;
export const createReduxEnhancer = require("init").createReduxEnhancer;
export const Profiler = require("init").Profiler;
export const useProfiler = require("init").useProfiler;
export const withProfiler = require("init").withProfiler;
export const logger = require("keys").logger;
export const consoleLoggingIntegration = require("keys").consoleLoggingIntegration;
export const featureFlagsIntegration = require("keys").featureFlagsIntegration;
export const metrics = require("keys").metrics;
export const SDK_NAME = require("module_1089").SDK_NAME;
export const SDK_VERSION = require("module_1089").SDK_VERSION;
export const ReactNativeClient = require("_isNativeReflectConstruct").ReactNativeClient;
export const init = require("init").init;
export const wrap = require("init").wrap;
export const nativeCrash = require("init").nativeCrash;
export const flush = require("init").flush;
export const close = require("init").close;
export const withScope = require("init").withScope;
export const crashedLastRun = require("init").crashedLastRun;
export const TouchEventBoundary = require("_isNativeReflectConstruct").TouchEventBoundary;
export const withTouchEventBoundary = require("_isNativeReflectConstruct").withTouchEventBoundary;
export const reactNativeTracingIntegration = require("reactNativeTracingIntegration").reactNativeTracingIntegration;
export const getCurrentReactNativeTracingIntegration = require("reactNativeTracingIntegration").getCurrentReactNativeTracingIntegration;
export const getReactNativeTracingIntegration = require("reactNativeTracingIntegration").getReactNativeTracingIntegration;
export const reactNavigationIntegration = require("reactNativeTracingIntegration").reactNavigationIntegration;
export const reactNativeNavigationIntegration = require("reactNativeTracingIntegration").reactNativeNavigationIntegration;
export const sentryTraceGesture = require("reactNativeTracingIntegration").sentryTraceGesture;
export const TimeToInitialDisplay = require("reactNativeTracingIntegration").TimeToInitialDisplay;
export const TimeToFullDisplay = require("reactNativeTracingIntegration").TimeToFullDisplay;
export const startTimeToInitialDisplaySpan = require("reactNativeTracingIntegration").startTimeToInitialDisplaySpan;
export const startTimeToFullDisplaySpan = require("reactNativeTracingIntegration").startTimeToFullDisplaySpan;
export const startIdleNavigationSpan = require("reactNativeTracingIntegration").startIdleNavigationSpan;
export const startIdleSpan = require("reactNativeTracingIntegration").startIdleSpan;
export const getDefaultIdleNavigationSpanOptions = require("reactNativeTracingIntegration").getDefaultIdleNavigationSpanOptions;
export const createTimeToFullDisplay = require("reactNativeTracingIntegration").createTimeToFullDisplay;
export const createTimeToInitialDisplay = require("reactNativeTracingIntegration").createTimeToInitialDisplay;
export const Mask = require("warn").Mask;
export const Unmask = require("warn").Unmask;
export const FeedbackButton = require("_isNativeReflectConstruct").FeedbackButton;
export const FeedbackWidget = require("_isNativeReflectConstruct").FeedbackWidget;
export const showFeedbackWidget = require("_callSuper").showFeedbackWidget;
export const showFeedbackButton = require("_callSuper").showFeedbackButton;
export const hideFeedbackButton = require("_callSuper").hideFeedbackButton;
export const getDataFromUri = require("getRNSentryModule").getDataFromUri;
