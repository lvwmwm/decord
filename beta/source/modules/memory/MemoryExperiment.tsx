// Module ID: 13894
// Function ID: 13895
// Name: MemoryExperiment
// Dependencies: [1441, 2]

// Module 13894 (MemoryExperiment)
import ApexExperiment from "ApexExperiment" /* 1441 */;
import size from "module_2" /* 2 */;

let enabled;

let obj2;
const obj = { name: "2025-12-shadow-node-spike", kind: "user", defaultConfig: { enabled: false }, variations: obj2 };
obj2 = { 1: null };
obj2[1] = { enabled: true };
const config = ApexExperiment.createApexExperiment(obj);
const interval = setInterval(() => {
  let tmp = enabled;
  if (undefined === enabled) {
    enabled = config.getConfig({ location: "startMemoryExperiment" }).enabled;
    tmp = enabled;
  }
  if (tmp) {
    globalThis.gc();
  } else {
    const _clearInterval = clearInterval;
    clearInterval(closure_1);
  }
}, 60000);
const result = size.fileFinishedImporting("modules/memory/MemoryExperiment.tsx");
