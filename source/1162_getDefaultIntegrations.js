// Module ID: 1162
// Function ID: 13206
// Name: getDefaultIntegrations
// Dependencies: []

// Module 1162 (getDefaultIntegrations)
arg5.getDefaultIntegrations = function getDefaultIntegrations(patchGlobalPromise) {
  const items = [];
  let obj = arg1(arg6[0]);
  const push = items.push;
  const obj2 = arg1(arg6[1]);
  if (notWebResult) {
    obj = { patchGlobalPromise: patchGlobalPromise.patchGlobalPromise };
    push(obj2.reactNativeErrorHandlersIntegration(obj));
    let tmp2Result = tmp2(tmp3[1]);
    items.push(tmp2Result.nativeLinkedErrorsIntegration());
  } else {
    push(obj2.browserApiErrorsIntegration());
    tmp2Result = tmp2(tmp3[1]);
    items.push(tmp2Result.browserGlobalHandlersIntegration());
    items.push(tmp2(tmp3[1]).browserLinkedErrorsIntegration());
    if (patchGlobalPromise.enableAutoSessionTracking) {
      items.push(arg1(arg6[2]).browserSessionIntegration());
      const obj5 = arg1(arg6[2]);
    }
    const tmp2Result1 = tmp2(tmp3[1]);
  }
  const notWebResult = obj.notWeb();
  items.push(arg1(arg6[1]).inboundFiltersIntegration());
  const obj8 = arg1(arg6[1]);
  items.push(arg1(arg6[1]).functionToStringIntegration());
  const obj9 = arg1(arg6[1]);
  items.push(arg1(arg6[1]).breadcrumbsIntegration());
  const obj10 = arg1(arg6[1]);
  items.push(arg1(arg6[1]).dedupeIntegration());
  const obj11 = arg1(arg6[1]);
  items.push(arg1(arg6[1]).httpContextIntegration());
  const obj12 = arg1(arg6[1]);
  items.push(arg1(arg6[1]).nativeReleaseIntegration());
  const obj13 = arg1(arg6[1]);
  items.push(arg1(arg6[1]).eventOriginIntegration());
  const obj14 = arg1(arg6[1]);
  items.push(arg1(arg6[1]).sdkInfoIntegration());
  const obj15 = arg1(arg6[1]);
  items.push(arg1(arg6[1]).reactNativeInfoIntegration());
  const obj16 = arg1(arg6[1]);
  items.push(arg1(arg6[1]).createReactNativeRewriteFrames());
  if (patchGlobalPromise.enableNative) {
    items.push(arg1(arg6[1]).deviceContextIntegration());
    const obj18 = arg1(arg6[1]);
    items.push(arg1(arg6[1]).modulesLoaderIntegration());
    let enableLogs = patchGlobalPromise.enableLogs;
    if (enableLogs) {
      enableLogs = "native" !== patchGlobalPromise.logsOrigin;
    }
    if (enableLogs) {
      items.push(arg1(arg6[1]).logEnricherIntegration());
      const obj20 = arg1(arg6[1]);
      items.push(arg1(arg6[2]).consoleLoggingIntegration());
      const obj21 = arg1(arg6[2]);
    }
    if (patchGlobalPromise.attachScreenshot) {
      items.push(arg1(arg6[1]).screenshotIntegration());
      const obj22 = arg1(arg6[1]);
    }
    if (patchGlobalPromise.attachViewHierarchy) {
      items.push(arg1(arg6[1]).viewHierarchyIntegration());
      const obj23 = arg1(arg6[1]);
    }
    if ("number" === typeof patchGlobalPromise.profilesSampleRate) {
      items.push(arg1(arg6[1]).hermesProfilingIntegration());
      const obj24 = arg1(arg6[1]);
    }
    const obj19 = arg1(arg6[1]);
  }
  let tmp39 = "number" === typeof patchGlobalPromise.tracesSampleRate;
  if (!tmp39) {
    tmp39 = "function" === typeof patchGlobalPromise.tracesSampler;
  }
  let enableNative = tmp39;
  if (tmp39) {
    enableNative = patchGlobalPromise.enableAppStartTracking;
  }
  if (enableNative) {
    enableNative = patchGlobalPromise.enableNative;
  }
  if (enableNative) {
    items.push(arg1(arg6[1]).appStartIntegration());
    const obj25 = arg1(arg6[1]);
  }
  const obj17 = arg1(arg6[1]);
  let enableNative2 = tmp39;
  if (tmp39) {
    enableNative2 = patchGlobalPromise.enableNativeFramesTracking;
  }
  if (enableNative2) {
    enableNative2 = patchGlobalPromise.enableNative;
  }
  const nativeFramesIntegrations = arg1(arg6[1]).createNativeFramesIntegrations(enableNative2);
  if (nativeFramesIntegrations) {
    items.push(nativeFramesIntegrations);
  }
  let enableStallTracking = tmp39;
  if (tmp39) {
    enableStallTracking = patchGlobalPromise.enableStallTracking;
  }
  if (enableStallTracking) {
    items.push(arg1(arg6[1]).stallTrackingIntegration());
    const obj27 = arg1(arg6[1]);
  }
  let enableUserInteractionTracing = tmp39;
  if (tmp39) {
    enableUserInteractionTracing = patchGlobalPromise.enableUserInteractionTracing;
  }
  if (enableUserInteractionTracing) {
    items.push(arg1(arg6[1]).userInteractionIntegration());
    const obj28 = arg1(arg6[1]);
  }
  let enableAutoPerformanceTracing = tmp39;
  if (tmp39) {
    enableAutoPerformanceTracing = patchGlobalPromise.enableAutoPerformanceTracing;
  }
  if (enableAutoPerformanceTracing) {
    items.push(arg1(arg6[1]).appRegistryIntegration());
    const obj29 = arg1(arg6[1]);
    items.push(arg1(arg6[3]).reactNativeTracingIntegration());
    const obj30 = arg1(arg6[3]);
  }
  if (tmp39) {
    items.push(arg1(arg6[1]).timeToDisplayIntegration());
    const obj31 = arg1(arg6[1]);
  }
  if (patchGlobalPromise.enableCaptureFailedRequests) {
    items.push(arg1(arg6[1]).httpClientIntegration());
    const obj32 = arg1(arg6[1]);
  }
  const obj26 = arg1(arg6[1]);
  items.push(arg1(arg6[1]).expoContextIntegration());
  if (patchGlobalPromise.spotlight) {
    let spotlight;
    if ("string" === typeof patchGlobalPromise.spotlight) {
      spotlight = patchGlobalPromise.spotlight;
    }
    obj = { sidecarUrl: spotlight };
    items.push(arg1(arg6[1]).spotlightIntegration(obj));
    const obj34 = arg1(arg6[1]);
  }
  let notWebResult1 = "number" === typeof patchGlobalPromise.replaysOnErrorSampleRate || "number" === typeof patchGlobalPromise.replaysSessionSampleRate;
  let tmp67 = patchGlobalPromise._experiments && "number" === typeof patchGlobalPromise._experiments.replaysOnErrorSampleRate;
  if (!tmp67) {
    tmp67 = patchGlobalPromise._experiments && "number" === typeof patchGlobalPromise._experiments.replaysSessionSampleRate;
    const tmp68 = patchGlobalPromise._experiments && "number" === typeof patchGlobalPromise._experiments.replaysSessionSampleRate;
  }
  let tmp69 = !notWebResult1;
  if (!notWebResult1) {
    tmp69 = tmp67;
  }
  if (tmp69) {
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
    notWebResult1 = tmp67;
  }
  if (notWebResult1) {
    notWebResult1 = arg1(arg6[0]).notWeb();
    const obj36 = arg1(arg6[0]);
  }
  if (notWebResult1) {
    items.push(arg1(arg6[1]).mobileReplayIntegration());
    const obj37 = arg1(arg6[1]);
  }
  const obj33 = arg1(arg6[1]);
  items.push(arg1(arg6[1]).primitiveTagIntegration());
  return items;
};
