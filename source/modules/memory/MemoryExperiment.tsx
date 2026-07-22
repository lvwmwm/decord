// Module ID: 13219
// Function ID: 100260
// Dependencies: []

// Module 13219
const _module = require(dependencyMap[0]);
let closure_2 = _module.createApexExperiment({ defaultConfig: { enabled: false }, variations: { [1]: { enabled: true } } });
const interval = setInterval(() => {
  if (undefined === enabled) {
    const obj = { location: "startMemoryExperiment" };
    const enabled = config.getConfig(obj).enabled;
  }
  if (enabled) {
    globalThis.gc();
  } else {
    const _clearInterval = clearInterval;
    clearInterval(closure_1);
  }
}, 60000);
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/memory/MemoryExperiment.tsx");
