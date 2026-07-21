// Module ID: 13210
// Function ID: 100205
// Dependencies: []

// Module 13210
const _module = require(dependencyMap[0]);
const obj = { 9223372036854775807: null, 0: null, defaultConfig: { enabled: false }, variations: { [1]: { enabled: true } } };
let closure_2 = _module.createApexExperiment(obj);
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
