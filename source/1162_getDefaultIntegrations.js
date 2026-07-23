// Module ID: 1162
// Function ID: 13207
// Name: getDefaultIntegrations
// Dependencies: [978, 788, 1000, 1163]

// Module 1162 (getDefaultIntegrations)
const require = arg1;
const dependencyMap = arg6;
arg5.getDefaultIntegrations = function getDefaultIntegrations(patchGlobalPromise) {
  const items = [];
  let obj = require(978) /* isHermesEnabled */;
  const push = items.push;
  const obj2 = require(788) /* debugSymbolicatorIntegration */;
  if (notWebResult) {
    obj = { patchGlobalPromise: patchGlobalPromise.patchGlobalPromise };
    push(obj2.reactNativeErrorHandlersIntegration(obj));
    let tmp2Result = tmp2(788);
    items.push(tmp2Result.nativeLinkedErrorsIntegration());
  } else {
    push(obj2.browserApiErrorsIntegration());
    tmp2Result = tmp2(788);
    items.push(tmp2Result.browserGlobalHandlersIntegration());
    items.push(tmp2(788).browserLinkedErrorsIntegration());
    if (patchGlobalPromise.enableAutoSessionTracking) {
      items.push(require(1000) /* keys */.browserSessionIntegration());
      const obj5 = require(1000) /* keys */;
    }
    const tmp2Result1 = tmp2(788);
  }
  notWebResult = obj.notWeb();
  items.push(require(788) /* debugSymbolicatorIntegration */.inboundFiltersIntegration());
  const obj8 = require(788) /* debugSymbolicatorIntegration */;
  items.push(require(788) /* debugSymbolicatorIntegration */.functionToStringIntegration());
  const obj9 = require(788) /* debugSymbolicatorIntegration */;
  items.push(require(788) /* debugSymbolicatorIntegration */.breadcrumbsIntegration());
  const obj10 = require(788) /* debugSymbolicatorIntegration */;
  items.push(require(788) /* debugSymbolicatorIntegration */.dedupeIntegration());
  const obj11 = require(788) /* debugSymbolicatorIntegration */;
  items.push(require(788) /* debugSymbolicatorIntegration */.httpContextIntegration());
  const obj12 = require(788) /* debugSymbolicatorIntegration */;
  items.push(require(788) /* debugSymbolicatorIntegration */.nativeReleaseIntegration());
  const obj13 = require(788) /* debugSymbolicatorIntegration */;
  items.push(require(788) /* debugSymbolicatorIntegration */.eventOriginIntegration());
  const obj14 = require(788) /* debugSymbolicatorIntegration */;
  items.push(require(788) /* debugSymbolicatorIntegration */.sdkInfoIntegration());
  const obj15 = require(788) /* debugSymbolicatorIntegration */;
  items.push(require(788) /* debugSymbolicatorIntegration */.reactNativeInfoIntegration());
  const obj16 = require(788) /* debugSymbolicatorIntegration */;
  items.push(require(788) /* debugSymbolicatorIntegration */.createReactNativeRewriteFrames());
  if (patchGlobalPromise.enableNative) {
    items.push(require(788) /* debugSymbolicatorIntegration */.deviceContextIntegration());
    const obj18 = require(788) /* debugSymbolicatorIntegration */;
    items.push(require(788) /* debugSymbolicatorIntegration */.modulesLoaderIntegration());
    let enableLogs = patchGlobalPromise.enableLogs;
    if (enableLogs) {
      enableLogs = "native" !== patchGlobalPromise.logsOrigin;
    }
    if (enableLogs) {
      items.push(require(788) /* debugSymbolicatorIntegration */.logEnricherIntegration());
      const obj20 = require(788) /* debugSymbolicatorIntegration */;
      items.push(require(1000) /* keys */.consoleLoggingIntegration());
      const obj21 = require(1000) /* keys */;
    }
    if (patchGlobalPromise.attachScreenshot) {
      items.push(require(788) /* debugSymbolicatorIntegration */.screenshotIntegration());
      const obj22 = require(788) /* debugSymbolicatorIntegration */;
    }
    if (patchGlobalPromise.attachViewHierarchy) {
      items.push(require(788) /* debugSymbolicatorIntegration */.viewHierarchyIntegration());
      const obj23 = require(788) /* debugSymbolicatorIntegration */;
    }
    if ("number" === typeof patchGlobalPromise.profilesSampleRate) {
      items.push(require(788) /* debugSymbolicatorIntegration */.hermesProfilingIntegration());
      const obj24 = require(788) /* debugSymbolicatorIntegration */;
    }
    const obj19 = require(788) /* debugSymbolicatorIntegration */;
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
    items.push(require(788) /* debugSymbolicatorIntegration */.appStartIntegration());
    const obj25 = require(788) /* debugSymbolicatorIntegration */;
  }
  const obj17 = require(788) /* debugSymbolicatorIntegration */;
  let enableNative2 = tmp39;
  if (tmp39) {
    enableNative2 = patchGlobalPromise.enableNativeFramesTracking;
  }
  if (enableNative2) {
    enableNative2 = patchGlobalPromise.enableNative;
  }
  const nativeFramesIntegrations = require(788) /* debugSymbolicatorIntegration */.createNativeFramesIntegrations(enableNative2);
  if (nativeFramesIntegrations) {
    items.push(nativeFramesIntegrations);
  }
  let enableStallTracking = tmp39;
  if (tmp39) {
    enableStallTracking = patchGlobalPromise.enableStallTracking;
  }
  if (enableStallTracking) {
    items.push(require(788) /* debugSymbolicatorIntegration */.stallTrackingIntegration());
    const obj27 = require(788) /* debugSymbolicatorIntegration */;
  }
  let enableUserInteractionTracing = tmp39;
  if (tmp39) {
    enableUserInteractionTracing = patchGlobalPromise.enableUserInteractionTracing;
  }
  if (enableUserInteractionTracing) {
    items.push(require(788) /* debugSymbolicatorIntegration */.userInteractionIntegration());
    const obj28 = require(788) /* debugSymbolicatorIntegration */;
  }
  let enableAutoPerformanceTracing = tmp39;
  if (tmp39) {
    enableAutoPerformanceTracing = patchGlobalPromise.enableAutoPerformanceTracing;
  }
  if (enableAutoPerformanceTracing) {
    items.push(require(788) /* debugSymbolicatorIntegration */.appRegistryIntegration());
    const obj29 = require(788) /* debugSymbolicatorIntegration */;
    items.push(require(1163) /* reactNativeTracingIntegration */.reactNativeTracingIntegration());
    const obj30 = require(1163) /* reactNativeTracingIntegration */;
  }
  if (tmp39) {
    items.push(require(788) /* debugSymbolicatorIntegration */.timeToDisplayIntegration());
    const obj31 = require(788) /* debugSymbolicatorIntegration */;
  }
  if (patchGlobalPromise.enableCaptureFailedRequests) {
    items.push(require(788) /* debugSymbolicatorIntegration */.httpClientIntegration());
    const obj32 = require(788) /* debugSymbolicatorIntegration */;
  }
  const obj26 = require(788) /* debugSymbolicatorIntegration */;
  items.push(require(788) /* debugSymbolicatorIntegration */.expoContextIntegration());
  if (patchGlobalPromise.spotlight) {
    let spotlight;
    if ("string" === typeof patchGlobalPromise.spotlight) {
      spotlight = patchGlobalPromise.spotlight;
    }
    obj = { sidecarUrl: spotlight };
    items.push(require(788) /* debugSymbolicatorIntegration */.spotlightIntegration(obj));
    const obj34 = require(788) /* debugSymbolicatorIntegration */;
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
    notWebResult1 = require(978) /* isHermesEnabled */.notWeb();
    const obj36 = require(978) /* isHermesEnabled */;
  }
  if (notWebResult1) {
    items.push(require(788) /* debugSymbolicatorIntegration */.mobileReplayIntegration());
    const obj37 = require(788) /* debugSymbolicatorIntegration */;
  }
  const obj33 = require(788) /* debugSymbolicatorIntegration */;
  items.push(require(788) /* debugSymbolicatorIntegration */.primitiveTagIntegration());
  return items;
};
