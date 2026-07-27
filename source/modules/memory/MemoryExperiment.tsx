// Module ID: 13398
// Function ID: 102875
// Dependencies: [1428, 2]

// Module 13398
import ApexExperiment from "ApexExperiment";

let obj = { name: "2025-12-shadow-node-spike", kind: "user", defaultConfig: { enabled: false }, variations: { [1]: { enabled: true } } };
let closure_2 = ApexExperiment.createApexExperiment(obj);
const interval = setInterval(() => {
  if (undefined === enabled) {
    const obj = { location: "startMemoryExperiment" };
    enabled = config.getConfig(obj).enabled;
  }
  if (enabled) {
    globalThis.gc();
  } else {
    const _clearInterval = clearInterval;
    clearInterval(closure_1);
  }
}, 60000);
const result = require("set").fileFinishedImporting("modules/memory/MemoryExperiment.tsx");
