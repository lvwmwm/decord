// Module ID: 2071
// Function ID: 2072
// Name: libdiscoreExperiments
// Dependencies: [2072, 3, 1350, 38, 2]
// Exports: clearLibdiscoreExperimentCache, isExperimentSyncDisabled

// Module 2071 (libdiscoreExperiments)
import LoggerDefault from "Logger" /* 3 */;
import _modDef38 from "module_38" /* 38 */;
import shim from "shim" /* 1350 */;
import BridgedStore from "BridgedStore" /* 2072 */;
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
        const tmpResult = tmp(1350);
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
  getCurrentConfig() {
    let currentConfig;
    _modDef38(null != this.inner, "experiment must be set before calling getCurrentConfig");
    const inner = this.inner;
    if ("getCurrentConfig" in this.inner) {
      currentConfig = inner.getCurrentConfig({ location: "default" });
    } else {
      currentConfig = inner.getConfig({ location: "default" });
    }
    return currentConfig;
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
const tmp8 = new "getEnabledFeatureName"("2026-01-libdiscore-batch-store-refactor", undefined, tmp5, tmp4, tmp3, tmp2, tmp, require, dependencyMap);
tmp8.storeName = "batch-store-refactor";
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
const tmp10 = new "shouldCollectMetrics"("2025-11-defer-load-late-lazy-cache", undefined, tmp5, tmp4, tmp3, tmp2, undefined, require, dependencyMap, items, LibdiscoreCachedExperiment, LibdiscoreWrapperSimpleExperiment, tmp8, libdiscoreTelemetryExperiment);
tmp10.label = "Allow react to render before lazy cache is loaded";
tmp10.defaultValue = false;
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
const tmp11 = new "getTreatments"("2026-01-android-rmle", undefined, tmp5, LibdiscoreCustomTreatmentsExperiment, tmp3, tmp2, undefined, require, dependencyMap, items, LibdiscoreCachedExperiment, LibdiscoreWrapperSimpleExperiment, tmp8, libdiscoreTelemetryExperiment, tmp10, "getCachedBridgedStoreMode", prototype4, "shouldCollectMetrics", "getLabel", "getTreatments", this, getTreatments);
tmp11.label = "Android Pull Mode Rendering";
tmp11.treatmentCount = 4;
const tmp12 = new "getTreatments"("2026-02-android-fresco-cache", undefined, tmp5, LibdiscoreCustomTreatmentsExperiment, tmp3, tmp2, undefined, require, dependencyMap, items, LibdiscoreCachedExperiment, LibdiscoreWrapperSimpleExperiment, tmp8, libdiscoreTelemetryExperiment, tmp10, tmp11, prototype4, "shouldCollectMetrics", "getLabel", "getTreatments", this, "Android Pull Mode Rendering");
tmp12.label = "Android Fresco Cache";
tmp12.treatmentCount = 3;
const tmp13 = new "getTreatments"("2026-02-android-chat-mosaic-shared-pool", undefined, tmp5, LibdiscoreCustomTreatmentsExperiment, tmp3, tmp2, undefined, require, dependencyMap, items, LibdiscoreCachedExperiment, LibdiscoreWrapperSimpleExperiment, tmp8, libdiscoreTelemetryExperiment);
tmp13.label = "Android Chat Mosaic Shared Pool";
tmp13.defaultValue = false;
const tmp14 = new "getTreatments"("2026-03-mobile-hermes-occupancy-target", undefined, tmp5, LibdiscoreCustomTreatmentsExperiment, tmp3, tmp2, undefined, require, dependencyMap, items, LibdiscoreCachedExperiment, LibdiscoreWrapperSimpleExperiment, tmp8, libdiscoreTelemetryExperiment);
tmp14.label = "Android Hermes Occupancy Target";
tmp14.defaultValue = false;
const tmp15 = new "getTreatments"("2026-08-android-jank-per-screen", undefined, tmp5, LibdiscoreCustomTreatmentsExperiment, tmp3, tmp2, undefined, require, dependencyMap, items, LibdiscoreCachedExperiment, LibdiscoreWrapperSimpleExperiment, tmp8, libdiscoreTelemetryExperiment);
tmp15.label = "Android Per-Screen Jank Aggregation";
tmp15.defaultValue = false;
const tmp22 = new tmp2("2026-08-android-rn-reparenting-flag", undefined, tmp5, LibdiscoreCustomTreatmentsExperiment, tmp3, tmp2, undefined, require, dependencyMap, items, LibdiscoreCachedExperiment, LibdiscoreWrapperSimpleExperiment, tmp8, libdiscoreTelemetryExperiment);
tmp22.label = "RN Flag, was false on RN 0.81 and true in RN 0.86, suspect of causing RMLE regressions";
tmp22.defaultValue = false;
const tmp32 = new tmp3("2026-08-ios-objc-composed-image-cache", undefined, tmp5, LibdiscoreCustomTreatmentsExperiment, tmp3, this, undefined, require, dependencyMap, items, LibdiscoreCachedExperiment, LibdiscoreWrapperSimpleExperiment, tmp8, libdiscoreTelemetryExperiment, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp22, "RN Flag, was false on RN 0.81 and true in RN 0.86, suspect of causing RMLE regressions");
tmp32.label = "iOS ObjC Composed Image Cache";
tmp32.treatmentCount = 3;
let c7 = false;
const result = size.fileFinishedImporting("modules/libdiscore/libdiscoreExperiments.tsx");

export const ALL_LIBDISCORE_EXPERIMENTS = items;
export { LibdiscoreCachedExperiment };
export { LibdiscoreWrapperSimpleExperiment };
export const LibdiscoreBatchStoreRefactorExperiment = tmp8;
export const TelemetryExperiment = libdiscoreTelemetryExperiment;
export const DelayLoadLateLazyCacheHoldoutExperiment = tmp10;
export const AndroidPullModeRenderingExperiment = tmp11;
export const AndroidFrescoCacheExperiment = tmp12;
export const AndroidChatMosaicSharedPoolExperiment = tmp13;
export const AndroidHermesOccupancyTargetExperiment = tmp14;
export const AndroidJankPerScreenExperiment = tmp15;
export const AndroidRNFlagReparenting = tmp22;
export const IOSObjcComposedImageCacheExperiment = tmp32;
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
