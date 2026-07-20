// Module ID: 787
// Function ID: 8903
// Name: addBreadcrumb
// Dependencies: []

// Module 787 (addBreadcrumb)
for (const key10015 in arg1(arg6[0])) {
  let tmp2 = key10015;
  arg5[key10015] = arg1(arg6[0])[key10015];
}

export const addBreadcrumb = require(dependencyMap[1]).addBreadcrumb;
export const addIntegration = require(dependencyMap[1]).addIntegration;
export const captureException = require(dependencyMap[1]).captureException;
export const captureEvent = require(dependencyMap[1]).captureEvent;
export const captureFeedback = require(dependencyMap[1]).captureFeedback;
export const captureMessage = require(dependencyMap[1]).captureMessage;
export const Scope = require(dependencyMap[1]).Scope;
export const setContext = require(dependencyMap[1]).setContext;
export const setExtra = require(dependencyMap[1]).setExtra;
export const setExtras = require(dependencyMap[1]).setExtras;
export const setTag = require(dependencyMap[1]).setTag;
export const setTags = require(dependencyMap[1]).setTags;
export const setUser = require(dependencyMap[1]).setUser;
export const startInactiveSpan = require(dependencyMap[1]).startInactiveSpan;
export const startSpan = require(dependencyMap[1]).startSpan;
export const startSpanManual = require(dependencyMap[1]).startSpanManual;
export const getActiveSpan = require(dependencyMap[1]).getActiveSpan;
export const getRootSpan = require(dependencyMap[1]).getRootSpan;
export const withActiveSpan = require(dependencyMap[1]).withActiveSpan;
export const suppressTracing = require(dependencyMap[1]).suppressTracing;
export const spanToJSON = require(dependencyMap[1]).spanToJSON;
export const spanIsSampled = require(dependencyMap[1]).spanIsSampled;
export const setMeasurement = require(dependencyMap[1]).setMeasurement;
export const getCurrentScope = require(dependencyMap[1]).getCurrentScope;
export const getGlobalScope = require(dependencyMap[1]).getGlobalScope;
export const getIsolationScope = require(dependencyMap[1]).getIsolationScope;
export const getClient = require(dependencyMap[1]).getClient;
export const setCurrentClient = require(dependencyMap[1]).setCurrentClient;
export const addEventProcessor = require(dependencyMap[1]).addEventProcessor;
export const lastEventId = require(dependencyMap[1]).lastEventId;
export const ErrorBoundary = require(dependencyMap[2]).ErrorBoundary;
export const withErrorBoundary = require(dependencyMap[2]).withErrorBoundary;
export const createReduxEnhancer = require(dependencyMap[2]).createReduxEnhancer;
export const Profiler = require(dependencyMap[2]).Profiler;
export const useProfiler = require(dependencyMap[2]).useProfiler;
export const withProfiler = require(dependencyMap[2]).withProfiler;
export const logger = require(dependencyMap[3]).logger;
export const consoleLoggingIntegration = require(dependencyMap[3]).consoleLoggingIntegration;
export const featureFlagsIntegration = require(dependencyMap[3]).featureFlagsIntegration;
export const metrics = require(dependencyMap[3]).metrics;
export const SDK_NAME = require(dependencyMap[4]).SDK_NAME;
export const SDK_VERSION = require(dependencyMap[4]).SDK_VERSION;
export const ReactNativeClient = require(dependencyMap[5]).ReactNativeClient;
export const init = require(dependencyMap[6]).init;
export const wrap = require(dependencyMap[6]).wrap;
export const nativeCrash = require(dependencyMap[6]).nativeCrash;
export const flush = require(dependencyMap[6]).flush;
export const close = require(dependencyMap[6]).close;
export const withScope = require(dependencyMap[6]).withScope;
export const crashedLastRun = require(dependencyMap[6]).crashedLastRun;
export const TouchEventBoundary = require(dependencyMap[7]).TouchEventBoundary;
export const withTouchEventBoundary = require(dependencyMap[7]).withTouchEventBoundary;
export const reactNativeTracingIntegration = require(dependencyMap[8]).reactNativeTracingIntegration;
export const getCurrentReactNativeTracingIntegration = require(dependencyMap[8]).getCurrentReactNativeTracingIntegration;
export const getReactNativeTracingIntegration = require(dependencyMap[8]).getReactNativeTracingIntegration;
export const reactNavigationIntegration = require(dependencyMap[8]).reactNavigationIntegration;
export const reactNativeNavigationIntegration = require(dependencyMap[8]).reactNativeNavigationIntegration;
export const sentryTraceGesture = require(dependencyMap[8]).sentryTraceGesture;
export const TimeToInitialDisplay = require(dependencyMap[8]).TimeToInitialDisplay;
export const TimeToFullDisplay = require(dependencyMap[8]).TimeToFullDisplay;
export const startTimeToInitialDisplaySpan = require(dependencyMap[8]).startTimeToInitialDisplaySpan;
export const startTimeToFullDisplaySpan = require(dependencyMap[8]).startTimeToFullDisplaySpan;
export const startIdleNavigationSpan = require(dependencyMap[8]).startIdleNavigationSpan;
export const startIdleSpan = require(dependencyMap[8]).startIdleSpan;
export const getDefaultIdleNavigationSpanOptions = require(dependencyMap[8]).getDefaultIdleNavigationSpanOptions;
export const createTimeToFullDisplay = require(dependencyMap[8]).createTimeToFullDisplay;
export const createTimeToInitialDisplay = require(dependencyMap[8]).createTimeToInitialDisplay;
export const Mask = require(dependencyMap[9]).Mask;
export const Unmask = require(dependencyMap[9]).Unmask;
export const FeedbackButton = require(dependencyMap[10]).FeedbackButton;
export const FeedbackWidget = require(dependencyMap[11]).FeedbackWidget;
export const showFeedbackWidget = require(dependencyMap[12]).showFeedbackWidget;
export const showFeedbackButton = require(dependencyMap[12]).showFeedbackButton;
export const hideFeedbackButton = require(dependencyMap[12]).hideFeedbackButton;
export const getDataFromUri = require(dependencyMap[13]).getDataFromUri;
