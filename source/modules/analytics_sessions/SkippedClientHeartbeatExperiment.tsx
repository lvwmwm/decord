// Module ID: 6699
// Function ID: 51875
// Name: shouldLogClientHeartbeatSkipped
// Dependencies: []
// Exports: shouldLogClientHeartbeatSkipped

// Module 6699 (shouldLogClientHeartbeatSkipped)
const _module = require(dependencyMap[0]);
let closure_0 = _module.createApexExperiment({ defaultConfig: { logHeartbeatSkipped: false }, variations: { [1]: { logHeartbeatSkipped: true } } });
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/analytics_sessions/SkippedClientHeartbeatExperiment.tsx");

export const shouldLogClientHeartbeatSkipped = function shouldLogClientHeartbeatSkipped() {
  return config.getConfig({ location: "shouldLogClientHeartbeatSkipped" }).logHeartbeatSkipped;
};
