// Module ID: 1051
// Function ID: 1052
// Dependencies: [867, 676, 889, 1052]
// Exports: getDefaultIntegrations

// Module 1051
import debugSymbolicatorIntegration from "debugSymbolicatorIntegration" /* 676 */;
import _mod867 from "module_867" /* 867 */;

require = arg1;
const dependencyMap = arg6;

export const getDefaultIntegrations = function getDefaultIntegrations(patchGlobalPromise) {
  const items = [];
  const push = items.push;
  const obj2 = debugSymbolicatorIntegration;
  if (notWebResult) {
    const obj3 = { patchGlobalPromise: patchGlobalPromise.patchGlobalPromise };
    push(obj2.reactNativeErrorHandlersIntegration(obj3));
    items.push(tmp(676).nativeLinkedErrorsIntegration());
    const tmpResult = tmp(676);
  } else {
    push(obj2.browserApiErrorsIntegration());
    items.push(tmp(676).browserGlobalHandlersIntegration());
    const tmpResult34 = tmp(676);
    items.push(tmp(676).browserLinkedErrorsIntegration());
    if (patchGlobalPromise.enableAutoSessionTracking) {
      items.push(tmp(889).browserSessionIntegration());
      const tmpResult36 = tmp(889);
    }
    const tmpResult35 = tmp(676);
  }
  notWebResult = _mod867.notWeb();
  items.push(debugSymbolicatorIntegration.inboundFiltersIntegration());
  const tmpResult37 = debugSymbolicatorIntegration;
  items.push(debugSymbolicatorIntegration.functionToStringIntegration());
  const tmpResult38 = debugSymbolicatorIntegration;
  items.push(debugSymbolicatorIntegration.breadcrumbsIntegration());
  const tmpResult39 = debugSymbolicatorIntegration;
  items.push(debugSymbolicatorIntegration.dedupeIntegration());
  const tmpResult40 = debugSymbolicatorIntegration;
  items.push(debugSymbolicatorIntegration.httpContextIntegration());
  const tmpResult41 = debugSymbolicatorIntegration;
  items.push(debugSymbolicatorIntegration.nativeReleaseIntegration());
  const tmpResult42 = debugSymbolicatorIntegration;
  items.push(debugSymbolicatorIntegration.eventOriginIntegration());
  const tmpResult43 = debugSymbolicatorIntegration;
  items.push(debugSymbolicatorIntegration.sdkInfoIntegration());
  const tmpResult44 = debugSymbolicatorIntegration;
  items.push(debugSymbolicatorIntegration.reactNativeInfoIntegration());
  const tmpResult45 = debugSymbolicatorIntegration;
  items.push(debugSymbolicatorIntegration.createReactNativeRewriteFrames());
  if (patchGlobalPromise.enableNative) {
    items.push(tmp(676).deviceContextIntegration());
    const tmpResult47 = tmp(676);
    items.push(tmp(676).modulesLoaderIntegration());
    let enableLogs = patchGlobalPromise.enableLogs;
    if (enableLogs) {
      enableLogs = "native" !== patchGlobalPromise.logsOrigin;
    }
    if (enableLogs) {
      items.push(tmp(676).logEnricherIntegration());
      const tmpResult49 = tmp(676);
      items.push(tmp(889).consoleLoggingIntegration());
      const tmpResult50 = tmp(889);
    }
    if (patchGlobalPromise.attachScreenshot) {
      items.push(tmp(676).screenshotIntegration());
      const tmpResult51 = tmp(676);
    }
    if (patchGlobalPromise.attachViewHierarchy) {
      items.push(tmp(676).viewHierarchyIntegration());
      const tmpResult52 = tmp(676);
    }
    if (typeof patchGlobalPromise.profilesSampleRate === "number") {
      items.push(tmp(676).hermesProfilingIntegration());
      const tmpResult53 = tmp(676);
    }
    const tmpResult48 = tmp(676);
  }
  const tracesSampleRate = patchGlobalPromise.tracesSampleRate;
  let tmp26 = typeof tracesSampleRate === "number";
  if (typeof tracesSampleRate !== "number") {
    tmp26 = typeof patchGlobalPromise.tracesSampler === "function";
  }
  let enableNative = tmp26;
  if (tmp26) {
    enableNative = patchGlobalPromise.enableAppStartTracking;
  }
  if (enableNative) {
    enableNative = patchGlobalPromise.enableNative;
  }
  if (enableNative) {
    items.push(tmp(676).appStartIntegration());
    const tmpResult54 = tmp(676);
  }
  const tmpResult46 = debugSymbolicatorIntegration;
  let enableNative2 = tmp26;
  if (tmp26) {
    enableNative2 = patchGlobalPromise.enableNativeFramesTracking;
  }
  if (enableNative2) {
    enableNative2 = patchGlobalPromise.enableNative;
  }
  const nativeFramesIntegrations = debugSymbolicatorIntegration.createNativeFramesIntegrations(enableNative2);
  if (nativeFramesIntegrations) {
    items.push(nativeFramesIntegrations);
  }
  let enableStallTracking = tmp26;
  if (tmp26) {
    enableStallTracking = patchGlobalPromise.enableStallTracking;
  }
  if (enableStallTracking) {
    items.push(tmp(676).stallTrackingIntegration());
    const tmpResult56 = tmp(676);
  }
  let enableUserInteractionTracing = tmp26;
  if (tmp26) {
    enableUserInteractionTracing = patchGlobalPromise.enableUserInteractionTracing;
  }
  if (enableUserInteractionTracing) {
    items.push(tmp(676).userInteractionIntegration());
    const tmpResult57 = tmp(676);
  }
  let enableAutoPerformanceTracing = tmp26;
  if (tmp26) {
    enableAutoPerformanceTracing = patchGlobalPromise.enableAutoPerformanceTracing;
  }
  if (enableAutoPerformanceTracing) {
    items.push(tmp(676).appRegistryIntegration());
    const tmpResult58 = tmp(676);
    items.push(tmp(1052).reactNativeTracingIntegration());
    const tmpResult59 = tmp(1052);
  }
  if (tmp26) {
    items.push(tmp(676).timeToDisplayIntegration());
    const tmpResult60 = tmp(676);
  }
  if (patchGlobalPromise.enableCaptureFailedRequests) {
    items.push(tmp(676).httpClientIntegration());
    const tmpResult61 = tmp(676);
  }
  const tmpResult55 = debugSymbolicatorIntegration;
  items.push(debugSymbolicatorIntegration.expoContextIntegration());
  if (patchGlobalPromise.spotlight) {
    let spotlight;
    if (typeof patchGlobalPromise.spotlight === "string") {
      spotlight = patchGlobalPromise.spotlight;
    }
    const obj4 = { sidecarUrl: spotlight };
    items.push(tmp(676).spotlightIntegration(obj4));
    const tmpResult63 = tmp(676);
  }
  const replaysOnErrorSampleRate = patchGlobalPromise.replaysOnErrorSampleRate;
  let notWebResult1 = typeof replaysOnErrorSampleRate === "number";
  if (typeof replaysOnErrorSampleRate !== "number") {
    notWebResult1 = typeof patchGlobalPromise.replaysSessionSampleRate === "number";
  }
  let tmp40 = patchGlobalPromise._experiments && typeof patchGlobalPromise._experiments.replaysOnErrorSampleRate === "number";
  if (!tmp40) {
    tmp40 = patchGlobalPromise._experiments && typeof patchGlobalPromise._experiments.replaysSessionSampleRate === "number";
    const tmp41 = patchGlobalPromise._experiments && typeof patchGlobalPromise._experiments.replaysSessionSampleRate === "number";
  }
  let tmp42 = !notWebResult1;
  if (!notWebResult1) {
    tmp42 = tmp40;
  }
  if (tmp42) {
    const _experiments = patchGlobalPromise._experiments;
    let prop;
    if (null !== _experiments) {
      if (undefined !== _experiments) {
        prop = _experiments.replaysOnErrorSampleRate;
      }
    }
    patchGlobalPromise.replaysOnErrorSampleRate = prop;
    const _experiments2 = patchGlobalPromise._experiments;
    let prop1;
    if (null !== _experiments2) {
      if (undefined !== _experiments2) {
        prop1 = _experiments2.replaysSessionSampleRate;
      }
    }
    patchGlobalPromise.replaysSessionSampleRate = prop1;
  }
  if (!notWebResult1) {
    notWebResult1 = tmp40;
  }
  if (notWebResult1) {
    notWebResult1 = tmp(867).notWeb();
    const tmpResult64 = tmp(867);
  }
  if (notWebResult1) {
    items.push(tmp(676).mobileReplayIntegration());
    const tmpResult65 = tmp(676);
  }
  const tmpResult62 = debugSymbolicatorIntegration;
  items.push(debugSymbolicatorIntegration.primitiveTagIntegration());
  return items;
};
