// Module ID: 6907
// Function ID: 55013
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 6907 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
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
let closure_0 = importDefault(dependencyMap[0]);
let closure_1 = importDefault(dependencyMap[1]);
let closure_2 = importDefault(dependencyMap[2]);
let closure_3 = importDefault(dependencyMap[3]);
let closure_4 = importDefault(dependencyMap[4]);
const NativeModules = arg1(dependencyMap[5]).NativeModules;
let tmp2 = (ProcessUtils) => {
  class ProcessUtilsIOS {
    constructor() {
      self = this;
      tmp = ProcessUtilsIOS(this, ProcessUtilsIOS);
      obj = closure_3(ProcessUtilsIOS);
      tmp2 = closure_2;
      if (closure_6()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_3;
        constructResult = Reflect.construct(obj, [], closure_3(self).constructor);
      } else {
        constructResult = obj.apply(self, undefined);
      }
      tmp2Result = tmp2(self, constructResult);
      ProcessUtilsIOS = tmp2Result;
      tmp2Result.shouldCollectHermesInstrumentedStats = false;
      prop = undefined;
      if (null != closure_5) {
        tmp8 = closure_5;
        prop = closure_5.SystemResourceManager;
      }
      SystemResourceManager = prop;
      tmp9 = null == prop || null == prop.getCpuCoreCount;
      if (!tmp9) {
        cpuCoreCount = prop.getCpuCoreCount((cpuCoreCount) => {
          tmp2Result.cpuCoreCount = cpuCoreCount;
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
            closure_0.cpuPercentage = tmp2;
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
              closure_0.cumulativeCpuUsage = obj;
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
            closure_0.memory = tmp2;
          });
        }
        let tmp14;
        if (tmp2Result.shouldCollectHermesInstrumentedStats) {
          tmp14 = callback();
        }
        tmp2Result.hermesInstrumentedStatsSummary = tmp14;
      }, 1000);
      return tmp2Result;
    }
  }
  let closure_0 = ProcessUtilsIOS;
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
        tmp = callback3();
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
}(arg1(dependencyMap[6]).ProcessUtils);
tmp2 = new tmp2();
const result = arg1(dependencyMap[7]).fileFinishedImporting("utils/ProcessUtils.native.tsx");

export default tmp2;
