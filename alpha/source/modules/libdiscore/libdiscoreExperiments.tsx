// Module ID: 559
// Function ID: 560
// Name: libdiscoreExperiments
// Dependencies: [560, 3, 562, 38, 2]
// Exports: clearLibdiscoreExperimentCache, isExperimentSyncDisabled

// Module 559 (libdiscoreExperiments)
import LoggerDefault from "Logger" /* 3 */;
import _modDef38 from "module_38" /* 38 */;
import BridgedStore from "BridgedStore" /* 560 */;
import shim from "shim" /* 562 */;
import size from "module_2" /* 2 */;

let tmp;
let tmp2;
let tmp3;
let tmp4;
const ensureValidMode = BridgedStore.ensureValidMode;
const logger = new LoggerDefault("libdiscoreExperiments");
let items = [];
new LoggerDefault("libdiscoreExperiments");
let closure_6 = Symbol("unknown");
class LibdiscoreCachedExperiment {
  constructor(id) {
    const merged = Object.assign({ inner: null, cachedConfig: null });
    merged[1] = closure_6;
    merged.id = id;
    items.push(merged);
    return merged;
  }
  getEnabledFeatureName() {
    const cachedConfig = this.getCachedConfig();
    let combined = null;
    if (undefined !== cachedConfig) {
      combined = null;
      if (cachedConfig.treatmentId > 0) {
        const _HermesInternal = HermesInternal;
        combined = "" + this.id + ":" + cachedConfig.treatmentId;
      }
    }
    return combined;
  }
  getCachedConfig() {
    const self = this;
    if (this.cachedConfig === closure_6) {
      const obj = shim;
      const tmp = require;
      if (obj.isLibdiscoreInitialized()) {
        const tmpResult = tmp(562);
        const experimentCacher = tmpResult.getExperimentCacher();
        self.cachedConfig = experimentCacher.getConfig(self.id);
      } else {
        self.cachedConfig = undefined;
      }
    }
    return self.cachedConfig;
  }
  setExperiment(apexExperiment) {
    this.inner = apexExperiment;
  }
  getCurrentConfig(autoTrackExposure) {
    let currentConfig;
    const self = this;
    _modDef38(null != this.inner, "experiment must be set before reading the current config");
    let flag;
    if (autoTrackExposure != null) {
      flag = autoTrackExposure.autoTrackExposure;
    }
    if (flag == null) {
      flag = true;
    }
    const inner = self.inner;
    if ("getCurrentConfig" in self.inner) {
      const obj2 = { autoTrackExposure: flag };
      currentConfig = inner.getCurrentConfig({ location: "default" }, obj2);
    } else {
      const obj = { autoTrackExposure: flag };
      currentConfig = inner.getConfig({ location: "default" }, obj);
    }
    return currentConfig;
  }
  trackExposureIfCachedConfigMatches(currentConfig) {
    const self = this;
    const cachedConfig = this.getCachedConfig();
    let treatmentId;
    if (cachedConfig != null) {
      treatmentId = cachedConfig.treatmentId;
    }
    if (treatmentId === currentConfig.treatmentId) {
      currentConfig = self.getCurrentConfig();
    }
  }
}
const prototype = LibdiscoreCachedExperiment.prototype;
class LibdiscoreWrapperSimpleExperiment extends LibdiscoreCachedExperiment {
  constructor(arg0, label, arg2) {
    let flag = arg2;
    if (arg2 === undefined) {
      flag = false;
    }
    const tmp2 = new LibdiscoreWrapperSimpleExperiment(arg0, tmp, new.target, this);
    tmp2.label = label;
    tmp2.defaultValue = flag;
    return tmp2;
  }
  getLabel() {
    return this.label;
  }
  getTreatments() {
    items = [{ treatmentId: 0 }, { treatmentId: 1 }];
    return items;
  }
  getCachedEnabled() {
    const cachedConfig = this.getCachedConfig();
    if (null != cachedConfig) {
      let defaultValue;
      if (-1 !== cachedConfig.treatmentId) {
        defaultValue = 1 === cachedConfig.treatmentId;
      }
      return defaultValue;
    }
    defaultValue = this.defaultValue;
  }
}
const prototype2 = LibdiscoreWrapperSimpleExperiment.prototype;
class LibdiscoreBridgedStoreExperiment extends LibdiscoreCachedExperiment {
  constructor(arg0, storeName, arg2) {
    const tmp2 = new tmp(arg0, arg2, new.target);
    tmp2.storeName = storeName;
    return tmp2;
  }
  getCachedBridgedStoreMode() {
    let str;
    const cachedConfig = this.getCachedConfig();
    let num;
    if (cachedConfig != null) {
      num = cachedConfig.treatmentId;
    }
    if (num == null) {
      num = -1;
    }
    if (1 === num) {
      str = "typescript-libdiscore-dual-read";
    } else {
      str = "libdiscore";
      if (2 !== num) {
        str = "typescript";
      }
    }
    return ensureValidMode(str);
  }
  getEnabledFeatureName() {
    const cachedBridgedStoreMode = this.getCachedBridgedStoreMode();
    let combined = null;
    if ("typescript" !== cachedBridgedStoreMode) {
      const _HermesInternal = HermesInternal;
      combined = "BridgedStore[" + this.storeName + "," + cachedBridgedStoreMode + "]";
    }
    return combined;
  }
  getLabel() {
    return "libdiscore '" + this.storeName + "' Migration";
  }
  getTreatments() {
    items = [{ treatmentId: 0 }, { treatmentId: 1 }, { treatmentId: 2 }];
    return items;
  }
}
const prototype3 = LibdiscoreBridgedStoreExperiment.prototype;
const tmp12 = new "getEnabledFeatureName"("2026-01-libdiscore-batch-store-refactor", undefined, tmp9, tmp8, tmp7, tmp6, tmp5, require, dependencyMap);
tmp12.storeName = "batch-store-refactor";
class LibdiscoreTelemetryExperiment extends LibdiscoreCachedExperiment {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    applyArgumentsResult.MAX_EMISSIONS_PER_APP_LAUNCH = 5;
    applyArgumentsResult.emissionsCount = 0;
    return applyArgumentsResult;
  }
  getLabel() {
    return "libdiscore Telemetry";
  }
  getTreatments() {
    items = [{ treatmentId: 0 }, { treatmentId: 1 }, { treatmentId: 2 }, { treatmentId: 3 }];
    return items;
  }
  getMetricsSampleRate() {
    const cachedConfig = this.getCachedConfig();
    let treatmentId;
    if (cachedConfig != null) {
      treatmentId = cachedConfig.treatmentId;
    }
    if (1 === treatmentId) {
      return 0.01;
    } else if (2 === treatmentId) {
      return 0.05;
    } else if (3 === treatmentId) {
      return 1;
    } else {
      return 0;
    }
  }
  didEmit() {
    this.emissionsCount = this.emissionsCount + 1;
  }
  shouldCollectMetrics() {
    const self = this;
    const metricsSampleRate = this.getMetricsSampleRate();
    let tmp2 = 0 !== metricsSampleRate;
    if (tmp2) {
      let tmp3 = 1 === metricsSampleRate;
      if (!tmp3) {
        let tmp4 = self.emissionsCount < self.MAX_EMISSIONS_PER_APP_LAUNCH;
        if (tmp4) {
          const _Math = Math;
          tmp4 = Math.random() < metricsSampleRate;
        }
        tmp3 = tmp4;
      }
      tmp2 = tmp3;
    }
    return tmp2;
  }
}
const prototype4 = LibdiscoreTelemetryExperiment.prototype;
const libdiscoreTelemetryExperiment = new LibdiscoreTelemetryExperiment("2025-09-libdiscore-telemetry");
const tmp14 = new "shouldCollectMetrics"("2025-11-defer-load-late-lazy-cache", undefined, tmp9, tmp8, tmp7, tmp6, undefined, require, dependencyMap, items, LibdiscoreCachedExperiment, LibdiscoreWrapperSimpleExperiment, tmp12, libdiscoreTelemetryExperiment, tmp4, tmp3, tmp2);
tmp14.label = "Allow react to render before lazy cache is loaded";
tmp14.defaultValue = false;
const tmp15 = new "shouldCollectMetrics"("2026-09-react-compiler-mobile", undefined, tmp9, tmp8, tmp7, tmp6, undefined, require, dependencyMap, items, LibdiscoreCachedExperiment, LibdiscoreWrapperSimpleExperiment, tmp12, libdiscoreTelemetryExperiment, tmp14, tmp3, tmp2);
tmp15.label = "React Compiler for mobile";
tmp15.defaultValue = false;
class LibdiscoreCustomTreatmentsExperiment extends LibdiscoreCachedExperiment {
  constructor(arg0, label, treatmentCount) {
    const tmp2 = new tmp(arg0, new.target);
    tmp2.label = label;
    tmp2.treatmentCount = treatmentCount;
    return tmp2;
  }
  getLabel() {
    return this.label;
  }
}
function getTreatments() {
  const obj = { length: this.treatmentCount };
  return Array.from(obj, (arg0, treatmentId) => ({ treatmentId }));
}
LibdiscoreCustomTreatmentsExperiment.prototype["getTreatments"] = getTreatments;
const tmp16 = new "getTreatments"("2026-01-android-rmle", undefined, tmp9, LibdiscoreCustomTreatmentsExperiment, tmp7, tmp6, undefined, require, dependencyMap, items, LibdiscoreCachedExperiment, LibdiscoreWrapperSimpleExperiment, tmp12, libdiscoreTelemetryExperiment, tmp14, tmp15, tmp2, tmp, "getCachedBridgedStoreMode", prototype4, "shouldCollectMetrics", "getLabel", "getTreatments", this, getTreatments);
tmp16.label = "Android Pull Mode Rendering";
tmp16.treatmentCount = 4;
const tmp17 = new "getTreatments"("2026-02-android-fresco-cache", undefined, tmp9, LibdiscoreCustomTreatmentsExperiment, tmp7, tmp6, undefined, require, dependencyMap, items, LibdiscoreCachedExperiment, LibdiscoreWrapperSimpleExperiment, tmp12, libdiscoreTelemetryExperiment, tmp14, tmp15, tmp16, tmp, "getCachedBridgedStoreMode", prototype4, "shouldCollectMetrics", "getLabel", "getTreatments", this, "Android Pull Mode Rendering");
tmp17.label = "Android Fresco Cache";
tmp17.treatmentCount = 3;
const tmp18 = new "getTreatments"("2026-02-android-chat-mosaic-shared-pool", undefined, tmp9, LibdiscoreCustomTreatmentsExperiment, tmp7, tmp6, undefined, require, dependencyMap, items, LibdiscoreCachedExperiment, LibdiscoreWrapperSimpleExperiment, tmp12, libdiscoreTelemetryExperiment, tmp14, tmp15, tmp16);
tmp18.label = "Android Chat Mosaic Shared Pool";
tmp18.defaultValue = false;
const tmp19 = new "getTreatments"("2026-03-mobile-hermes-occupancy-target", undefined, tmp9, LibdiscoreCustomTreatmentsExperiment, tmp7, tmp6, undefined, require, dependencyMap, items, LibdiscoreCachedExperiment, LibdiscoreWrapperSimpleExperiment, tmp12, libdiscoreTelemetryExperiment, tmp14, tmp15, tmp16);
tmp19.label = "Android Hermes Occupancy Target";
tmp19.defaultValue = false;
const tmp20 = new "getTreatments"("2026-08-android-jank-per-screen", undefined, tmp9, LibdiscoreCustomTreatmentsExperiment, tmp7, tmp6, undefined, require, dependencyMap, items, LibdiscoreCachedExperiment, LibdiscoreWrapperSimpleExperiment, tmp12, libdiscoreTelemetryExperiment, tmp14, tmp15, tmp16);
tmp20.label = "Android Per-Screen Jank Aggregation";
tmp20.defaultValue = false;
const tmp21 = new "getTreatments"("2026-10-android-chat-preinflation", undefined, tmp9, LibdiscoreCustomTreatmentsExperiment, tmp7, tmp6, undefined, require, dependencyMap, items, LibdiscoreCachedExperiment, LibdiscoreWrapperSimpleExperiment, tmp12, libdiscoreTelemetryExperiment, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, "getLabel", "getTreatments", this, "Android Per-Screen Jank Aggregation");
tmp21.label = "Android Chat Preinflation";
tmp21.treatmentCount = 3;
const tmp22 = new "getTreatments"("2026-09-ios-callkit-connected-on-rtc", undefined, tmp9, LibdiscoreCustomTreatmentsExperiment, tmp7, tmp6, undefined, require, dependencyMap, items, LibdiscoreCachedExperiment, LibdiscoreWrapperSimpleExperiment, tmp12, libdiscoreTelemetryExperiment, tmp14, tmp15, tmp16);
tmp22.label = "iOS: show CallKit connected only once voice flows";
tmp22.defaultValue = false;
const tmp62 = new tmp6("2026-08-android-rn-reparenting-flag", undefined, tmp9, LibdiscoreCustomTreatmentsExperiment, tmp7, tmp6, undefined, require, dependencyMap, items, LibdiscoreCachedExperiment, LibdiscoreWrapperSimpleExperiment, tmp12, libdiscoreTelemetryExperiment, tmp14, tmp15, tmp16);
tmp62.label = "RN Flag, was false on RN 0.81 and true in RN 0.86, suspect of causing RMLE regressions";
tmp62.defaultValue = false;
const tmp72 = new tmp7("2026-08-ios-objc-composed-image-cache", undefined, tmp9, LibdiscoreCustomTreatmentsExperiment, tmp7, this, undefined, require, dependencyMap, items, LibdiscoreCachedExperiment, LibdiscoreWrapperSimpleExperiment, tmp12, libdiscoreTelemetryExperiment, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp62, "RN Flag, was false on RN 0.81 and true in RN 0.86, suspect of causing RMLE regressions");
tmp72.label = "iOS ObjC Composed Image Cache";
tmp72.treatmentCount = 3;
let c7 = false;
const result = size.fileFinishedImporting("modules/libdiscore/libdiscoreExperiments.tsx");

export const ALL_LIBDISCORE_EXPERIMENTS = items;
export { LibdiscoreCachedExperiment };
export { LibdiscoreWrapperSimpleExperiment };
export const LibdiscoreBatchStoreRefactorExperiment = tmp12;
export const TelemetryExperiment = libdiscoreTelemetryExperiment;
export const DelayLoadLateLazyCacheHoldoutExperiment = tmp14;
export const ReactCompilerExperiment = tmp15;
export const AndroidPullModeRenderingExperiment = tmp16;
export const AndroidFrescoCacheExperiment = tmp17;
export const AndroidChatMosaicSharedPoolExperiment = tmp18;
export const AndroidHermesOccupancyTargetExperiment = tmp19;
export const AndroidJankPerScreenExperiment = tmp20;
export const AndroidChatPreinflationExperiment = tmp21;
export const IOSCallKitConnectedOnRTCExperiment = tmp22;
export const AndroidRNFlagReparenting = tmp62;
export const IOSObjcComposedImageCacheExperiment = tmp72;
export function isExperimentSyncDisabled() {
  return c7;
}
export const clearLibdiscoreExperimentCache = function clearLibdiscoreExperimentCache() {
  const obj = shim;
  if (obj.isLibdiscoreInitialized()) {
    logger.info("Clearing libdiscore experiment cache and disabling sync");
    c7 = true;
    const tmpResult = shim;
    const experimentCacher = tmpResult.getExperimentCacher();
    experimentCacher.clearCache();
  }
};
