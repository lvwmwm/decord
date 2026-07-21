// Module ID: 6986
// Function ID: 55872
// Name: SystemResources
// Dependencies: []

// Module 6986 (SystemResources)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
const tmp2 = () => {
  class SystemResources {
    constructor() {
      tmp = closure_4(this, SystemResources);
      histogram = new f55883(f55877[3]).Histogram();
      this.cpuHistogram = histogram;
      histogram1 = new f55883(f55877[3]).Histogram();
      this.memoryHistogram = histogram1;
      obj = f55880(f55877[4]);
      this.startCPU = obj.getCumulativeCPUUsage();
      this.lastCPU = this.startCPU;
      this.lastBattery = null;
      return;
    }
  }
  const callback = SystemResources;
  let obj = {
    key: "getStats",
    value() {
      const self = this;
      const cpuHistogram = this.cpuHistogram;
      const report = cpuHistogram.getReport();
      const memoryHistogram = this.memoryHistogram;
      const report1 = memoryHistogram.getReport();
      let obj = callback2(closure_2[4]);
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
      const cumulativeCPUUsage = callback2(closure_2[4]).getCumulativeCPUUsage();
      const obj = callback2(closure_2[4]);
      const currentMemoryUsageKB = callback2(closure_2[4]).getCurrentMemoryUsageKB();
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
        const currentCPUUsagePercent = callback2(closure_2[4]).getCurrentCPUUsagePercent();
        if (null != currentCPUUsagePercent) {
          const cpuHistogram2 = self.cpuHistogram;
          cpuHistogram2.addSample(currentCPUUsagePercent);
        }
        const obj3 = callback2(closure_2[4]);
      }
      if (null != currentMemoryUsageKB) {
        const memoryHistogram = self.memoryHistogram;
        memoryHistogram.addSample(currentMemoryUsageKB);
      }
    }
  };
  items[1] = obj;
  obj = { key: "getCurrentBattery" };
  let closure_2 = callback(async () => yield callback(closure_2[5]).getDeviceState({ fallback: false }).batteryLevel);
  obj.value = function getCurrentBattery() {
    return callback3(...arguments);
  };
  items[2] = obj;
  const obj1 = { key: "setLastBattery" };
  let closure_1 = callback(async function() {
    const self = this;
    self.lastBattery = yield self.getCurrentBattery();
  });
  obj1.value = function setLastBattery() {
    return callback2(...arguments);
  };
  items[3] = obj1;
  const obj2 = { key: "getBatteryLevelStats" };
  let closure_0 = callback(async function() {
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
  return callback2(SystemResources, items);
}();
const result = arg1(dependencyMap[6]).fileFinishedImporting("lib/SystemResources.tsx");

export default tmp2;
