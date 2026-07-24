// Module ID: 6990
// Function ID: 55926
// Name: SystemResources
// Dependencies: [5, 6, 7, 6984, 6916, 6991, 2]

// Module 6990 (SystemResources)
import DeviceState from "DeviceState";
import set from "set";
import _defineProperties from "_defineProperties";

const require = arg1;
const tmp2 = (() => {
  class SystemResources {
    constructor() {
      tmp = outer1_4(this, SystemResources);
      histogram = new f55937(f55931[3]).Histogram();
      this.cpuHistogram = histogram;
      histogram1 = new f55937(f55931[3]).Histogram();
      this.memoryHistogram = histogram1;
      obj = f55934(f55931[4]);
      this.startCPU = obj.getCumulativeCPUUsage();
      this.lastCPU = this.startCPU;
      this.lastBattery = null;
      return;
    }
  }
  let obj = {
    key: "getStats",
    value() {
      const self = this;
      const cpuHistogram = this.cpuHistogram;
      const report = cpuHistogram.getReport();
      const memoryHistogram = this.memoryHistogram;
      const report1 = memoryHistogram.getReport();
      let obj = callback2(6916);
      const cumulativeCPUUsage = obj.getCumulativeCPUUsage();
      let result;
      if (null != this.startCPU) {
        if (null != cumulativeCPUUsage) {
          result = 100 * (cumulativeCPUUsage.usage - self.startCPU.usage) / ((cumulativeCPUUsage.sampleTime - self.startCPU.sampleTime) / 1000);
        }
      }
      obj = { client_performance_cpu_percentile25: report.percentiles[25], client_performance_cpu_percentile50: report.percentiles[50], client_performance_cpu_percentile75: report.percentiles[75], client_performance_cpu_percentile90: report.percentiles[90], client_performance_cpu_percentile95: report.percentiles[95] };
      if (null == result) {
        result = report.mean;
      }
      obj.client_performance_cpu_mean = result;
      obj.client_performance_memory_percentile25 = report1.percentiles[25];
      obj.client_performance_memory_percentile50 = report1.percentiles[50];
      obj.client_performance_memory_percentile75 = report1.percentiles[75];
      obj.client_performance_memory_percentile90 = report1.percentiles[90];
      obj.client_performance_memory_percentile95 = report1.percentiles[95];
      ({ min: obj2.client_performance_memory_min, max: obj2.client_performance_memory_max, mean: obj2.client_performance_memory_mean } = report1);
      return obj;
    }
  };
  const items = [obj, , , , ];
  obj = {
    key: "takeSample",
    value() {
      const self = this;
      const cumulativeCPUUsage = callback2(6916).getCumulativeCPUUsage();
      const obj = callback2(6916);
      const currentMemoryUsageKB = callback2(6916).getCurrentMemoryUsageKB();
      if (null != cumulativeCPUUsage) {
        let flag = true;
        if (null != self.lastCPU) {
          const diff = cumulativeCPUUsage.sampleTime - self.lastCPU.sampleTime;
          flag = false;
          if (diff >= 1) {
            const cpuHistogram = self.cpuHistogram;
            cpuHistogram.addSample((cumulativeCPUUsage.usage - self.lastCPU.usage) / (diff / 1000) * 100, diff);
            flag = true;
          }
        }
        if (flag) {
          self.lastCPU = cumulativeCPUUsage;
        }
      } else {
        const currentCPUUsagePercent = callback2(6916).getCurrentCPUUsagePercent();
        if (null != currentCPUUsagePercent) {
          const cpuHistogram2 = self.cpuHistogram;
          cpuHistogram2.addSample(currentCPUUsagePercent);
        }
        const obj3 = callback2(6916);
      }
      if (null != currentMemoryUsageKB) {
        const memoryHistogram = self.memoryHistogram;
        memoryHistogram.addSample(currentMemoryUsageKB);
      }
    }
  };
  items[1] = obj;
  obj = { key: "getCurrentBattery" };
  let closure_2 = SystemResources(async () => yield callback(table[5]).getDeviceState({ fallback: false }).batteryLevel);
  obj.value = function getCurrentBattery() {
    return dependencyMap(...arguments);
  };
  items[2] = obj;
  const obj1 = { key: "setLastBattery" };
  let closure_1 = SystemResources(async function() {
    const self = this;
    self.lastBattery = yield self.getCurrentBattery();
  });
  obj1.value = function setLastBattery() {
    return callback2(...arguments);
  };
  items[3] = obj1;
  const obj2 = { key: "getBatteryLevelStats" };
  let closure_0 = SystemResources(async function() {
    const self = this;
    const tmp = yield self.getCurrentBattery();
    if (null != self.lastBattery) {
      if (null != tmp) {
        let obj = { startBattery: self.lastBattery, currentBattery: tmp };
        const _Math = Math;
        obj.batteryUsageRounded = Math.round(1000 * (tmp - self.lastBattery)) / 1000;
      }
      return obj;
    }
    obj = { startBattery: self.lastBattery, currentBattery: tmp, batteryUsageRounded: null };
  });
  obj2.value = function getBatteryLevelStats() {
    return callback(...arguments);
  };
  items[4] = obj2;
  return callback(SystemResources, items);
})();
let result = require("_defineProperties").fileFinishedImporting("lib/SystemResources.tsx");

export default tmp2;
