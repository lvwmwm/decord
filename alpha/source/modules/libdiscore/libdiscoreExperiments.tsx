// Module ID: 5118
// Function ID: 5119
// Name: libdiscoreExperiments
// Dependencies: [5119, 3, 1363, 38, 2]
// Exports: clearLibdiscoreExperimentCache, isExperimentSyncDisabled

// Module 5118 (libdiscoreExperiments)
import LoggerDefault from "Logger" /* 3 */;
import _modDef38 from "module_38" /* 38 */;
import shim from "shim" /* 1363 */;
import BridgedStore from "BridgedStore" /* 5119 */;
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
        const tmpResult = tmp(1363);
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
const tmp16 = new "getEnabledFeatureName"("2026-01-libdiscore-batch-store-refactor", undefined, tmp13, tmp12, tmp11, tmp10, tmp9, require, dependencyMap);
tmp16.storeName = "batch-store-refactor";
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
const tmp18 = new "shouldCollectMetrics"("2025-11-defer-load-late-lazy-cache", undefined, tmp13, tmp12, tmp11, tmp10, undefined, require, dependencyMap, items, LibdiscoreCachedExperiment, LibdiscoreWrapperSimpleExperiment, tmp16, libdiscoreTelemetryExperiment, tmp8, tmp7, tmp6, tmp5, tmp4, tmp3, tmp2);
tmp18.label = "Allow react to render before lazy cache is loaded";
tmp18.defaultValue = false;
const tmp19 = new "shouldCollectMetrics"("2026-09-react-compiler-mobile", undefined, tmp13, tmp12, tmp11, tmp10, undefined, require, dependencyMap, items, LibdiscoreCachedExperiment, LibdiscoreWrapperSimpleExperiment, tmp16, libdiscoreTelemetryExperiment, tmp18, tmp7, tmp6, tmp5, tmp4, tmp3, tmp2);
tmp19.label = "React Compiler for mobile";
tmp19.defaultValue = false;
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
const tmp20 = new "getTreatments"("2026-01-android-rmle", undefined, tmp13, LibdiscoreCustomTreatmentsExperiment, tmp11, tmp10, undefined, require, dependencyMap, items, LibdiscoreCachedExperiment, LibdiscoreWrapperSimpleExperiment, tmp16, libdiscoreTelemetryExperiment, tmp18, tmp19, tmp6, tmp5, tmp4, tmp3, tmp2, tmp, "getCachedBridgedStoreMode", prototype4, "shouldCollectMetrics", "getLabel", "getTreatments", this, getTreatments);
tmp20.label = "Android Pull Mode Rendering";
tmp20.treatmentCount = 4;
const tmp21 = new "getTreatments"("2026-02-android-fresco-cache", undefined, tmp13, LibdiscoreCustomTreatmentsExperiment, tmp11, tmp10, undefined, require, dependencyMap, items, LibdiscoreCachedExperiment, LibdiscoreWrapperSimpleExperiment, tmp16, libdiscoreTelemetryExperiment, tmp18, tmp19, tmp20, tmp5, tmp4, tmp3, tmp2, tmp, "getCachedBridgedStoreMode", prototype4, "shouldCollectMetrics", "getLabel", "getTreatments", this, "Android Pull Mode Rendering");
tmp21.label = "Android Fresco Cache";
tmp21.treatmentCount = 3;
const tmp22 = new "getTreatments"("2026-02-android-chat-mosaic-shared-pool", undefined, tmp13, LibdiscoreCustomTreatmentsExperiment, tmp11, tmp10, undefined, require, dependencyMap, items, LibdiscoreCachedExperiment, LibdiscoreWrapperSimpleExperiment, tmp16, libdiscoreTelemetryExperiment, tmp18, tmp19, tmp20, tmp21, tmp4, tmp3, tmp2);
tmp22.label = "Android Chat Mosaic Shared Pool";
tmp22.defaultValue = false;
const tmp23 = new "getTreatments"("2026-03-mobile-hermes-occupancy-target", undefined, tmp13, LibdiscoreCustomTreatmentsExperiment, tmp11, tmp10, undefined, require, dependencyMap, items, LibdiscoreCachedExperiment, LibdiscoreWrapperSimpleExperiment, tmp16, libdiscoreTelemetryExperiment, tmp18, tmp19, tmp20, tmp21, tmp22, tmp3, tmp2);
tmp23.label = "Android Hermes Occupancy Target";
tmp23.defaultValue = false;
const tmp24 = new "getTreatments"("2026-08-android-jank-per-screen", undefined, tmp13, LibdiscoreCustomTreatmentsExperiment, tmp11, tmp10, undefined, require, dependencyMap, items, LibdiscoreCachedExperiment, LibdiscoreWrapperSimpleExperiment, tmp16, libdiscoreTelemetryExperiment, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp2);
tmp24.label = "Android Per-Screen Jank Aggregation";
tmp24.defaultValue = false;
const tmp25 = new "getTreatments"("2026-10-android-chat-preinflation", undefined, tmp13, LibdiscoreCustomTreatmentsExperiment, tmp11, tmp10, undefined, require, dependencyMap, items, LibdiscoreCachedExperiment, LibdiscoreWrapperSimpleExperiment, tmp16, libdiscoreTelemetryExperiment, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp, "getCachedBridgedStoreMode", prototype4, "shouldCollectMetrics", "getLabel", "getTreatments", this, "Android Per-Screen Jank Aggregation");
tmp25.label = "Android Chat Preinflation";
tmp25.treatmentCount = 3;
const tmp26 = new "getTreatments"("2026-10-uimanager-experiments", undefined, tmp13, LibdiscoreCustomTreatmentsExperiment, tmp11, tmp10, undefined, require, dependencyMap, items, LibdiscoreCachedExperiment, LibdiscoreWrapperSimpleExperiment, tmp16, libdiscoreTelemetryExperiment, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, "getCachedBridgedStoreMode", prototype4, "shouldCollectMetrics", "getLabel", "getTreatments", this, "Android Chat Preinflation");
tmp26.label = "UIManager Experiments";
tmp26.treatmentCount = 3;
const tmp27 = new "getTreatments"("2026-10-android-ui-manager-constants-cache", undefined, tmp13, LibdiscoreCustomTreatmentsExperiment, tmp11, tmp10, undefined, require, dependencyMap, items, LibdiscoreCachedExperiment, LibdiscoreWrapperSimpleExperiment, tmp16, libdiscoreTelemetryExperiment, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24);
tmp27.label = "Android UIManager Constants Cache";
tmp27.defaultValue = false;
const tmp28 = new "getTreatments"("2026-09-ios-callkit-connected-on-rtc", undefined, tmp13, LibdiscoreCustomTreatmentsExperiment, tmp11, tmp10, undefined, require, dependencyMap, items, LibdiscoreCachedExperiment, LibdiscoreWrapperSimpleExperiment, tmp16, libdiscoreTelemetryExperiment, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24);
tmp28.label = "iOS: show CallKit connected only once voice flows";
tmp28.defaultValue = false;
const tmp29 = new "getTreatments"("2026-11-android-telecom", undefined, tmp13, LibdiscoreCustomTreatmentsExperiment, tmp11, tmp10, undefined, require, dependencyMap, items, LibdiscoreCachedExperiment, LibdiscoreWrapperSimpleExperiment, tmp16, libdiscoreTelemetryExperiment, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24);
tmp29.label = "Android: Support TelecomManager on Android";
tmp29.defaultValue = false;
const tmp30 = new "getTreatments"("2026-10-ios-jank-per-screen", undefined, tmp13, LibdiscoreCustomTreatmentsExperiment, tmp11, tmp10, undefined, require, dependencyMap, items, LibdiscoreCachedExperiment, LibdiscoreWrapperSimpleExperiment, tmp16, libdiscoreTelemetryExperiment, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24);
tmp30.label = "iOS Per-Screen Jank Aggregation";
tmp30.defaultValue = false;
const tmp102 = new tmp10("2026-08-android-rn-reparenting-flag", undefined, tmp13, LibdiscoreCustomTreatmentsExperiment, tmp11, tmp10, undefined, require, dependencyMap, items, LibdiscoreCachedExperiment, LibdiscoreWrapperSimpleExperiment, tmp16, libdiscoreTelemetryExperiment, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24);
tmp102.label = "RN Flag, was false on RN 0.81 and true in RN 0.86, suspect of causing RMLE regressions";
tmp102.defaultValue = false;
const tmp112 = new tmp11("2026-08-ios-objc-composed-image-cache", undefined, tmp13, LibdiscoreCustomTreatmentsExperiment, tmp11, this, undefined, require, dependencyMap, items, LibdiscoreCachedExperiment, LibdiscoreWrapperSimpleExperiment, tmp16, libdiscoreTelemetryExperiment, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, tmp30, tmp102, "RN Flag, was false on RN 0.81 and true in RN 0.86, suspect of causing RMLE regressions");
tmp112.label = "iOS ObjC Composed Image Cache";
tmp112.treatmentCount = 3;
let c7 = false;
const result = size.fileFinishedImporting("modules/libdiscore/libdiscoreExperiments.tsx");

export const ALL_LIBDISCORE_EXPERIMENTS = items;
export { LibdiscoreCachedExperiment };
export { LibdiscoreWrapperSimpleExperiment };
export const LibdiscoreBatchStoreRefactorExperiment = tmp16;
export const TelemetryExperiment = libdiscoreTelemetryExperiment;
export const DelayLoadLateLazyCacheHoldoutExperiment = tmp18;
export const ReactCompilerExperiment = tmp19;
export const AndroidPullModeRenderingExperiment = tmp20;
export const AndroidFrescoCacheExperiment = tmp21;
export const AndroidChatMosaicSharedPoolExperiment = tmp22;
export const AndroidHermesOccupancyTargetExperiment = tmp23;
export const AndroidJankPerScreenExperiment = tmp24;
export const AndroidChatPreinflationExperiment = tmp25;
export const UIManagerExperiments = tmp26;
export const AndroidUIManagerConstantsCacheExperiment = tmp27;
export const IOSCallKitConnectedOnRTCExperiment = tmp28;
export const AndroidTelecomCallsManagerExperiment = tmp29;
export const IOSJankPerScreenExperiment = tmp30;
export const AndroidRNFlagReparenting = tmp102;
export const IOSObjcComposedImageCacheExperiment = tmp112;
export function isExperimentSyncDisabled() {
  return c7;
}
export function clearLibdiscoreExperimentCache() {
  const obj = shim;
  if (obj.isLibdiscoreInitialized()) {
    logger.info("Clearing libdiscore experiment cache and disabling sync");
    c7 = true;
    const tmpResult = shim;
    const experimentCacher = tmpResult.getExperimentCacher();
    experimentCacher.clearCache();
  }
}
