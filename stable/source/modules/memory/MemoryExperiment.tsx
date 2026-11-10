// Module ID: 16228
// Function ID: 16229
// Name: MemoryExperiment
// Dependencies: [1447, 2]

// Module 16228 (MemoryExperiment)
import ApexExperiment from "ApexExperiment" /* 1447 */;
import size from "module_2" /* 2 */;

let obj2;
const obj = { name: "2025-12-shadow-node-spike", kind: "user", defaultConfig: { enabled: false }, variations: obj2 };
obj2 = { 1: null };
obj2[1] = { enabled: true };
let closure_0 = ApexExperiment.createApexExperiment(obj);
let enabled;
const interval = setInterval(() => {
  let tmp = enabled;
  if (undefined === enabled) {
    enabled = enabled.getConfig({ location: "startMemoryExperiment" }).enabled;
    tmp = enabled;
  }
  if (tmp) {
    if (globalThis.gc != null) {
      globalThis.gc();
    }
  } else {
    const _clearInterval = clearInterval;
    clearInterval(closure_1);
  }
}, 60000);
const result = size.fileFinishedImporting("modules/memory/MemoryExperiment.tsx");
