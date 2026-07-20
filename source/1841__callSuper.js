// Module ID: 1841
// Function ID: 20194
// Name: _callSuper
// Dependencies: []
// Exports: clearLibdiscoreExperimentCache, isExperimentSyncDisabled

// Module 1841 (_callSuper)
function _callSuper(arg0, arg1, arg2) {
  let items = arg2;
  const obj = callback(arg1);
  if (_isNativeReflectConstruct()) {
    if (!items) {
      items = [];
    }
    let constructResult = Reflect.construct(obj, items, callback(arg0).constructor);
  } else {
    constructResult = obj.apply(arg0, items);
  }
  return closure_3(arg0, constructResult);
}
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
const ensureValidMode = arg1(dependencyMap[5]).ensureValidMode;
let importDefaultResult = importDefault(dependencyMap[6]);
importDefaultResult = new importDefaultResult("libdiscoreExperiments");
const items = [];
let closure_11 = Symbol("unknown");
const tmp4 = () => {
  class LibdiscoreCachedExperiment {
    constructor(arg0) {
      tmp = closure_6(this, LibdiscoreCachedExperiment);
      this.id = arg0;
      this.inner = null;
      this.cachedConfig = closure_11;
      arr = closure_10.push(this);
      return;
    }
  }
  const arg1 = LibdiscoreCachedExperiment;
  let obj = {
    key: "getEnabledFeatureName",
    value() {
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
  };
  const items = [obj, , , ];
  obj = {
    key: "getCachedConfig",
    value() {
      const self = this;
      if (this.cachedConfig === closure_11) {
        if (obj.isLibdiscoreInitialized()) {
          const experimentCacher = LibdiscoreCachedExperiment(closure_2[7]).getExperimentCacher();
          self.cachedConfig = experimentCacher.getConfig(self.id);
          const obj2 = LibdiscoreCachedExperiment(closure_2[7]);
        } else {
          self.cachedConfig = undefined;
        }
        const obj = LibdiscoreCachedExperiment(closure_2[7]);
      }
      return self.cachedConfig;
    }
  };
  items[1] = obj;
  obj = {
    key: "setExperiment",
    value(inner) {
      this.inner = inner;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getCurrentConfig",
    value() {
      callback(closure_2[8])(null != this.inner, "experiment must be set before calling getCurrentConfig");
      const inner = this.inner;
      if ("getCurrentConfig" in this.inner) {
        let obj = { location: "default" };
        let currentConfig = inner.getCurrentConfig(obj);
      } else {
        obj = { location: "default" };
        currentConfig = inner.getConfig(obj);
      }
      return currentConfig;
    }
  };
  return callback3(LibdiscoreCachedExperiment, items);
}();
let tmp5 = (arg0) => {
  class LibdiscoreWrapperSimpleExperiment {
    constructor(arg0, arg1) {
      flag = arg2;
      self = this;
      if (arg2 === undefined) {
        flag = false;
      }
      tmp = closure_6(self, LibdiscoreWrapperSimpleExperiment);
      items = [];
      items[0] = arg0;
      tmp2 = closure_13(self, LibdiscoreWrapperSimpleExperiment, items);
      tmp2.label = arg1;
      tmp2.defaultValue = flag;
      return tmp2;
    }
  }
  const arg1 = LibdiscoreWrapperSimpleExperiment;
  callback2(LibdiscoreWrapperSimpleExperiment, arg0);
  let obj = {
    key: "getLabel",
    value() {
      return this.label;
    }
  };
  const items = [obj, , ];
  obj = {
    key: "getTreatments",
    value() {
      const items = [{ treatmentId: 0 }, { treatmentId: 1 }];
      return items;
    }
  };
  items[1] = obj;
  obj = {
    key: "getCachedEnabled",
    value() {
      const cachedConfig = this.getCachedConfig();
      if (null != cachedConfig) {
        if (-1 !== cachedConfig.treatmentId) {
          let defaultValue = 1 === cachedConfig.treatmentId;
        }
        return defaultValue;
      }
      defaultValue = this.defaultValue;
    }
  };
  items[2] = obj;
  return callback3(LibdiscoreWrapperSimpleExperiment, items);
}(tmp4);
let tmp6 = (arg0) => {
  class LibdiscoreBridgedStoreExperiment {
    constructor(arg0, arg1, arg2) {
      tmp = closure_6(this, LibdiscoreBridgedStoreExperiment);
      items = [, ];
      items[0] = arg0;
      items[1] = arg2;
      tmp2 = closure_13(this, LibdiscoreBridgedStoreExperiment, items);
      tmp2.storeName = arg1;
      return tmp2;
    }
  }
  const arg1 = LibdiscoreBridgedStoreExperiment;
  callback2(LibdiscoreBridgedStoreExperiment, arg0);
  let obj = {
    key: "getCachedBridgedStoreMode",
    value() {
      const cachedConfig = this.getCachedConfig();
      let treatmentId;
      if (null != cachedConfig) {
        treatmentId = cachedConfig.treatmentId;
      }
      let num = -1;
      if (null != treatmentId) {
        num = treatmentId;
      }
      if (1 === num) {
        let str = "typescript-libdiscore-dual-read";
      } else {
        str = "libdiscore";
        if (2 !== num) {
          str = "typescript";
        }
      }
      return callback2(str);
    }
  };
  const items = [obj, , , ];
  obj = {
    key: "getEnabledFeatureName",
    value() {
      const cachedBridgedStoreMode = this.getCachedBridgedStoreMode();
      let combined = null;
      if ("typescript" !== cachedBridgedStoreMode) {
        const _HermesInternal = HermesInternal;
        combined = "BridgedStore[" + this.storeName + "," + cachedBridgedStoreMode + "]";
      }
      return combined;
    }
  };
  items[1] = obj;
  obj = {
    key: "getLabel",
    value() {
      return "libdiscore '" + this.storeName + "' Migration";
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getTreatments",
    value() {
      const items = [{ treatmentId: 0 }, { treatmentId: 1 }, { treatmentId: 2 }];
      return items;
    }
  };
  return callback3(LibdiscoreBridgedStoreExperiment, items);
}(tmp4);
let tmp7 = (arg0) => {
  class LibdiscoreTelemetryExperiment {
    constructor(arg0) {
      items = [...arguments];
      tmp = closure_6(this, LibdiscoreTelemetryExperiment);
      items1 = [...items];
      tmp2 = closure_13(this, LibdiscoreTelemetryExperiment, items1);
      tmp2.MAX_EMISSIONS_PER_APP_LAUNCH = 5;
      tmp2.emissionsCount = 0;
      return tmp2;
    }
  }
  const arg1 = LibdiscoreTelemetryExperiment;
  callback2(LibdiscoreTelemetryExperiment, arg0);
  let obj = {
    key: "getLabel",
    value() {
      return "libdiscore Telemetry";
    }
  };
  const items = [obj, , , , ];
  obj = {
    key: "getTreatments",
    value() {
      const items = [{ treatmentId: 0 }, { treatmentId: 1 }, { treatmentId: 2 }, { treatmentId: 3 }];
      return items;
    }
  };
  items[1] = obj;
  obj = {
    key: "getMetricsSampleRate",
    value() {
      const cachedConfig = this.getCachedConfig();
      let treatmentId;
      if (null != cachedConfig) {
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
  };
  items[2] = obj;
  items[3] = {
    key: "didEmit",
    value() {
      this.emissionsCount = this.emissionsCount + 1;
    }
  };
  items[4] = {
    key: "shouldCollectMetrics",
    value() {
      const self = this;
      const metricsSampleRate = this.getMetricsSampleRate();
      let tmp2 = 0 !== metricsSampleRate;
      if (tmp2) {
        let tmp3 = 1 === metricsSampleRate;
        if (!tmp3) {
          let tmp5 = !tmp4;
          if (self.emissionsCount < self.MAX_EMISSIONS_PER_APP_LAUNCH) {
            const _Math = Math;
            tmp5 = Math.random() < metricsSampleRate;
          }
          tmp3 = tmp5;
        }
        tmp2 = tmp3;
      }
      return tmp2;
    }
  };
  return callback3(LibdiscoreTelemetryExperiment, items);
}(tmp4);
tmp6 = new tmp6("2026-01-libdiscore-batch-store-refactor", "batch-store-refactor");
tmp7 = new tmp7("2025-09-libdiscore-telemetry");
tmp5 = new tmp5("2025-11-defer-load-late-lazy-cache", "Allow react to render before lazy cache is loaded");
let tmp11 = (arg0) => {
  class LibdiscoreCustomTreatmentsExperiment {
    constructor(arg0, arg1, arg2) {
      tmp = closure_6(this, LibdiscoreCustomTreatmentsExperiment);
      items = [];
      items[0] = arg0;
      tmp2 = closure_13(this, LibdiscoreCustomTreatmentsExperiment, items);
      tmp2.label = arg1;
      tmp2.treatmentCount = arg2;
      return tmp2;
    }
  }
  const arg1 = LibdiscoreCustomTreatmentsExperiment;
  callback2(LibdiscoreCustomTreatmentsExperiment, arg0);
  let obj = {
    key: "getLabel",
    value() {
      return this.label;
    }
  };
  const items = [obj, ];
  obj = {
    key: "getTreatments",
    value() {
      return Array.from({ length: this.treatmentCount }, (arg0, treatmentId) => ({ treatmentId }));
    }
  };
  items[1] = obj;
  return callback3(LibdiscoreCustomTreatmentsExperiment, items);
}(tmp4);
tmp11 = new tmp11("2026-01-android-rmle", "Android Pull Mode Rendering", 4);
tmp11 = new tmp11("2026-02-android-fresco-cache", "Android Fresco Cache", 3);
tmp5 = new tmp5("2026-02-android-chat-mosaic-shared-pool", "Android Chat Mosaic Shared Pool");
const tmp51 = new tmp5("2026-03-mobile-hermes-occupancy-target", "Android Hermes Occupancy Target");
let closure_12 = false;
const tmp52 = new tmp5("2026-06-ios-ota-streaming", "iOS OTA Streaming Download");
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/libdiscore/libdiscoreExperiments.tsx");

export const ALL_LIBDISCORE_EXPERIMENTS = items;
export const LibdiscoreCachedExperiment = tmp4;
export const LibdiscoreWrapperSimpleExperiment = tmp5;
export const LibdiscoreBatchStoreRefactorExperiment = tmp6;
export const TelemetryExperiment = tmp7;
export const DelayLoadLateLazyCacheHoldoutExperiment = tmp5;
export const AndroidPullModeRenderingExperiment = tmp11;
export const AndroidFrescoCacheExperiment = tmp11;
export const AndroidChatMosaicSharedPoolExperiment = tmp5;
export const AndroidHermesOccupancyTargetExperiment = tmp51;
export const IOSOtaStreamingExperiment = tmp52;
export function isExperimentSyncDisabled() {
  return closure_12;
}
export const clearLibdiscoreExperimentCache = function clearLibdiscoreExperimentCache() {
  if (obj.isLibdiscoreInitialized()) {
    importDefaultResult.info("Clearing libdiscore experiment cache and disabling sync");
    let closure_12 = true;
    const experimentCacher = arg1(dependencyMap[7]).getExperimentCacher();
    experimentCacher.clearCache();
    const obj2 = arg1(dependencyMap[7]);
  }
};
