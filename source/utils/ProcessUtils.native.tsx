// Module ID: 6917
// Function ID: 55080
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 27, 6918, 2]

// Module 6917 (_isNativeReflectConstruct)
import ProcessUtils from "ProcessUtils";
import set from "set";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import { NativeModules } from "get ActivityIndicator";

function _isNativeReflectConstruct() {
  let ProcessUtils = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return ProcessUtils;
  }
  const result = _isNativeReflectConstruct();
}
function getHermesInstrumentedStatsSummary() {
  const _HermesInternal = HermesInternal;
  if (null != _HermesInternal) {
    if ("object" === typeof _HermesInternal) {
      const getInstrumentedStats = _HermesInternal.getInstrumentedStats;
      if ("function" === typeof getInstrumentedStats) {
        const instrumentedStats = getInstrumentedStats();
        if (null != instrumentedStats) {
          if ("object" === typeof tmp3) {
            const _Object = Object;
            const entries = Object.entries(instrumentedStats);
            const found = entries.filter((arg0) => {
              let tmp2;
              [, tmp2] = arg0;
              let isFiniteResult = tmp3;
              if ("number" === typeof tmp2) {
                const _Number = Number;
                isFiniteResult = Number.isFinite(tmp);
              }
              return isFiniteResult;
            });
            const substr = found.slice(0, 6);
            const mapped = substr.map((arg0) => {
              let tmp;
              let tmp2;
              [tmp, tmp2] = arg0;
              return "" + tmp + "=" + tmp2;
            });
            let joined;
            if (mapped.length > 0) {
              joined = mapped.join(", ");
            }
            return joined;
          }
        }
      }
    }
  }
}
let tmp2 = ((ProcessUtils) => {
  class ProcessUtilsIOS {
    constructor() {
      self = this;
      tmp = ProcessUtilsIOS(this, apply);
      obj = outer1_3(apply);
      tmp2 = outer1_2;
      if (outer1_6()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = outer1_3;
        constructResult = Reflect.construct(obj, [], outer1_3(self).constructor);
      } else {
        constructResult = obj.apply(self, undefined);
      }
      tmp2Result = tmp2(self, constructResult);
      apply = tmp2Result;
      tmp2Result.shouldCollectHermesInstrumentedStats = false;
      prop = undefined;
      if (null != outer1_5) {
        tmp8 = outer1_5;
        prop = outer1_5.SystemResourceManager;
      }
      SystemResourceManager = prop;
      tmp9 = null == prop || null == prop.getCpuCoreCount;
      if (!tmp9) {
        cpuCoreCount = prop.getCpuCoreCount((cpuCoreCount) => {
          ProcessUtils.cpuCoreCount = cpuCoreCount;
        });
      }
      timerId = setInterval(() => {
        let tmp = null == prop;
        if (!tmp) {
          tmp = null == prop.getCurrentCpuUsagePercent;
        }
        if (!tmp) {
          const currentCpuUsagePercent = prop.getCurrentCpuUsagePercent((arg0) => {
            let tmp2;
            if (arg0 >= 0) {
              tmp2 = arg0;
            }
            outer1_0.cpuPercentage = tmp2;
          });
        }
        let tmp5 = null == prop;
        if (!tmp5) {
          tmp5 = null == prop.getCumulativeCpuUsage;
        }
        if (!tmp5) {
          const cumulativeCpuUsage = prop.getCumulativeCpuUsage((usage) => {
            if (usage >= 0) {
              const obj = { usage };
              const _performance = performance;
              obj.sampleTime = performance.now();
              outer1_0.cumulativeCpuUsage = obj;
            }
          });
        }
        let tmp9 = null == prop;
        if (!tmp9) {
          tmp9 = null == prop.getCurrentMemoryUsageKb;
        }
        if (!tmp9) {
          const currentMemoryUsageKb = prop.getCurrentMemoryUsageKb((arg0) => {
            let tmp2;
            if (arg0 >= 0) {
              tmp2 = arg0;
            }
            outer1_0.memory = tmp2;
          });
        }
        let tmp14;
        if (tmp2Result.shouldCollectHermesInstrumentedStats) {
          tmp14 = outer2_7();
        }
        tmp2Result.hermesInstrumentedStatsSummary = tmp14;
      }, 1000);
      return tmp2Result;
    }
  }
  callback2(ProcessUtilsIOS, ProcessUtils);
  let obj = {
    key: "getProcessUptime",
    value() {
      return null;
    }
  };
  const items = [obj, , , , , , , , , , , , , , , , , , , , , , , , , , , ];
  obj = {
    key: "getCumulativeCPUUsage",
    value() {
      return this.cumulativeCpuUsage;
    }
  };
  items[1] = obj;
  obj = {
    key: "getCurrentCPUUsagePercent",
    value() {
      return this.cpuPercentage;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getCurrentMemoryUsageKB",
    value() {
      return this.memory;
    }
  };
  items[4] = {
    key: "setShouldCollectHermesInstrumentedStats",
    value(shouldCollectHermesInstrumentedStats) {
      this.shouldCollectHermesInstrumentedStats = shouldCollectHermesInstrumentedStats;
      let tmp;
      if (shouldCollectHermesInstrumentedStats) {
        tmp = outer1_7();
      }
      this.hermesInstrumentedStatsSummary = tmp;
    }
  };
  items[5] = {
    key: "getCurrentHermesInstrumentedStatsSummary",
    value() {
      return this.shouldCollectHermesInstrumentedStats ? this.hermesInstrumentedStatsSummary : undefined;
    }
  };
  items[6] = {
    key: "enablePerfMemoryHooks",
    value() {
      return null;
    }
  };
  items[7] = {
    key: "disablePerfMemoryHooks",
    value() {
      return null;
    }
  };
  items[8] = {
    key: "getPerfAttributedMemory",
    value() {
      return null;
    }
  };
  items[9] = {
    key: "getPerfAttributedMemoryCallstacks",
    value() {
      return null;
    }
  };
  items[10] = {
    key: "getPerfAttributedMemoryStats",
    value() {
      return null;
    }
  };
  items[11] = {
    key: "startCPUProfiling",
    value() {
      return null;
    }
  };
  items[12] = {
    key: "stopCPUProfiling",
    value() {
      return Promise.resolve(null);
    }
  };
  items[13] = {
    key: "enablePAMemoryProfiler",
    value() {
      return null;
    }
  };
  items[14] = {
    key: "disablePAMemoryProfiler",
    value() {
      return null;
    }
  };
  items[15] = {
    key: "getPerfAttributedPAMemory",
    value() {
      return null;
    }
  };
  items[16] = {
    key: "getPerfAttributedPAMemoryCallstacks",
    value() {
      return null;
    }
  };
  items[17] = {
    key: "getPartitionAllocatorStats",
    value() {
      return null;
    }
  };
  items[18] = {
    key: "enableProfilingV8Heap",
    value() {

    }
  };
  items[19] = {
    key: "disableProfilingV8Heap",
    value() {

    }
  };
  items[20] = {
    key: "getProfilerV8MemoryCallstacks",
    value() {
      return null;
    }
  };
  items[21] = {
    key: "getMemoryUsageDetails",
    value() {
      return { [0]: this.memory };
    }
  };
  items[22] = {
    key: "getMemoryUsageElectronRenderer",
    value() {
      return null;
    }
  };
  items[23] = {
    key: "getMemoryPrivateUsageElectronRenderer",
    value() {
      return null;
    }
  };
  items[24] = {
    key: "getMemoryUsageElectronRendererUsedHeapSize",
    value() {
      return null;
    }
  };
  items[25] = {
    key: "getMemoryHeapStats",
    value() {
      return null;
    }
  };
  items[26] = {
    key: "getBlinkMemoryInfo",
    value() {
      return null;
    }
  };
  items[27] = {
    key: "getMemoryUsageElectronProcessTypeDetails",
    value() {
      return null;
    }
  };
  return callback(ProcessUtilsIOS, items);
})(require("ProcessUtils").ProcessUtils);
tmp2 = new tmp2();
let result = require("_possibleConstructorReturn").fileFinishedImporting("utils/ProcessUtils.native.tsx");

export default tmp2;
