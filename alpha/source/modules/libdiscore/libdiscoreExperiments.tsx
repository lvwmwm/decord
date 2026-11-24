// Module ID: 4792
// Function ID: 4793
// Name: libdiscoreExperiments
// Dependencies: [4793, 3, 1364, 38, 2]
// Exports: clearLibdiscoreExperimentCache, isExperimentSyncDisabled

// Module 4792 (libdiscoreExperiments)
import LoggerDefault from "Logger" /* 3 */;
import _modDef38 from "module_38" /* 38 */;
import shim from "shim" /* 1364 */;
import BridgedStore from "BridgedStore" /* 4793 */;
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
        const tmpResult = tmp(1364);
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
const tmp13 = new "getEnabledFeatureName"("2026-01-libdiscore-batch-store-refactor", undefined, tmp10, tmp9, tmp8, tmp7, require, dependencyMap, items);
tmp13.storeName = "batch-store-refactor";
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
const tmp15 = new "shouldCollectMetrics"("2026-09-react-compiler-mobile", undefined, tmp10, tmp9, tmp8, undefined, require, dependencyMap, items, LibdiscoreCachedExperiment, LibdiscoreWrapperSimpleExperiment, tmp13, libdiscoreTelemetryExperiment, tmp6, tmp5, tmp4, tmp3, tmp2, tmp);
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
  getTreatments() {
    const obj = { length: this.treatmentCount };
    return Array.from(obj, (arg0, treatmentId) => ({ treatmentId }));
  }
}
const prototype5 = LibdiscoreCustomTreatmentsExperiment.prototype;
const tmp16 = new "getTreatments"("2026-01-android-rmle", undefined, tmp10, tmp9, tmp8, undefined, require);
tmp16.label = "Android Pull Mode Rendering";
tmp16.treatmentCount = 4;
const tmp17 = new "getTreatments"("2026-02-android-fresco-cache", undefined, tmp10, tmp9, tmp8, undefined, require);
tmp17.label = "Android Fresco Cache";
tmp17.treatmentCount = 3;
const tmp18 = new "getTreatments"("2026-02-android-chat-mosaic-shared-pool", undefined, tmp10, tmp9, tmp8, undefined, require, dependencyMap, items, LibdiscoreCachedExperiment, LibdiscoreWrapperSimpleExperiment, tmp13, libdiscoreTelemetryExperiment, tmp15, tmp16, tmp17, tmp3, tmp2, tmp);
tmp18.label = "Android Chat Mosaic Shared Pool";
tmp18.defaultValue = false;
const tmp19 = new "getTreatments"("2026-03-mobile-hermes-occupancy-target", undefined, tmp10, tmp9, tmp8, undefined, require, dependencyMap, items, LibdiscoreCachedExperiment, LibdiscoreWrapperSimpleExperiment, tmp13, libdiscoreTelemetryExperiment, tmp15, tmp16, tmp17, tmp18, tmp2, tmp);
tmp19.label = "Android Hermes Occupancy Target";
tmp19.defaultValue = false;
const tmp20 = new "getTreatments"("2026-08-android-jank-per-screen", undefined, tmp10, tmp9, tmp8, undefined, require, dependencyMap, items, LibdiscoreCachedExperiment, LibdiscoreWrapperSimpleExperiment, tmp13, libdiscoreTelemetryExperiment, tmp15, tmp16, tmp17, tmp18, tmp19, tmp);
tmp20.label = "Android Per-Screen Jank Aggregation";
tmp20.defaultValue = false;
const tmp21 = new "getTreatments"("2026-10-android-chat-preinflation", undefined, tmp10, tmp9, tmp8, undefined, require);
tmp21.label = "Android Chat Preinflation";
tmp21.treatmentCount = 3;
const tmp22 = new "getTreatments"("2026-10-uimanager-experiments", undefined, tmp10, tmp9, tmp8, undefined, require);
tmp22.label = "UIManager Experiments";
tmp22.treatmentCount = 3;
const tmp23 = new "getTreatments"("2026-10-android-ui-manager-constants-cache", undefined, tmp10, tmp9, tmp8, undefined, require, dependencyMap, items, LibdiscoreCachedExperiment, LibdiscoreWrapperSimpleExperiment, tmp13, libdiscoreTelemetryExperiment, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20);
tmp23.label = "Android UIManager Constants Cache";
tmp23.defaultValue = false;
const tmp24 = new "getTreatments"("2026-09-ios-callkit-connected-on-rtc", undefined, tmp10, tmp9, tmp8, undefined, require, dependencyMap, items, LibdiscoreCachedExperiment, LibdiscoreWrapperSimpleExperiment, tmp13, libdiscoreTelemetryExperiment, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20);
tmp24.label = "iOS: show CallKit connected only once voice flows";
tmp24.defaultValue = false;
const tmp25 = new "getTreatments"("2026-11-android-telecom", undefined, tmp10, tmp9, tmp8, undefined, require, dependencyMap, items, LibdiscoreCachedExperiment, LibdiscoreWrapperSimpleExperiment, tmp13, libdiscoreTelemetryExperiment, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20);
tmp25.label = "Android: Support TelecomManager on Android";
tmp25.defaultValue = false;
const tmp82 = new tmp8("2026-10-ios-jank-per-screen", undefined, tmp10, tmp9, tmp8, undefined, require, dependencyMap, items, LibdiscoreCachedExperiment, LibdiscoreWrapperSimpleExperiment, tmp13, libdiscoreTelemetryExperiment, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20);
tmp82.label = "iOS Per-Screen Jank Aggregation";
tmp82.defaultValue = false;
const tmp92 = new tmp9("2026-08-android-rn-reparenting-flag", undefined, tmp10, tmp9, this, undefined, require, dependencyMap, items, LibdiscoreCachedExperiment, LibdiscoreWrapperSimpleExperiment, tmp13, libdiscoreTelemetryExperiment, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20);
tmp92.label = "RN Flag, was false on RN 0.81 and true in RN 0.86, suspect of causing RMLE regressions";
tmp92.defaultValue = false;
let c7 = false;
const result = size.fileFinishedImporting("modules/libdiscore/libdiscoreExperiments.tsx");

export const ALL_LIBDISCORE_EXPERIMENTS = items;
export { LibdiscoreCachedExperiment };
export { LibdiscoreWrapperSimpleExperiment };
export const LibdiscoreBatchStoreRefactorExperiment = tmp13;
export const TelemetryExperiment = libdiscoreTelemetryExperiment;
export const ReactCompilerExperiment = tmp15;
export const AndroidPullModeRenderingExperiment = tmp16;
export const AndroidFrescoCacheExperiment = tmp17;
export const AndroidChatMosaicSharedPoolExperiment = tmp18;
export const AndroidHermesOccupancyTargetExperiment = tmp19;
export const AndroidJankPerScreenExperiment = tmp20;
export const AndroidChatPreinflationExperiment = tmp21;
export const UIManagerExperiments = tmp22;
export const AndroidUIManagerConstantsCacheExperiment = tmp23;
export const IOSCallKitConnectedOnRTCExperiment = tmp24;
export const AndroidTelecomCallsManagerExperiment = tmp25;
export const IOSJankPerScreenExperiment = tmp82;
export const AndroidRNFlagReparenting = tmp92;
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
