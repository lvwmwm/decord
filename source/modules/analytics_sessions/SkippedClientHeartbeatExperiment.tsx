// Module ID: 6704
// Function ID: 51940
// Name: shouldLogClientHeartbeatSkipped
// Dependencies: [1428, 2]
// Exports: shouldLogClientHeartbeatSkipped

// Module 6704 (shouldLogClientHeartbeatSkipped)
import ApexExperiment from "ApexExperiment";

const obj = { name: "2026-02-client-heartbeat-skipped", kind: "user", defaultConfig: { logHeartbeatSkipped: false }, variations: { [1]: { logHeartbeatSkipped: true } } };
let closure_0 = ApexExperiment.createApexExperiment(obj);
const result = require("set").fileFinishedImporting("modules/analytics_sessions/SkippedClientHeartbeatExperiment.tsx");

export const shouldLogClientHeartbeatSkipped = function shouldLogClientHeartbeatSkipped() {
  return config.getConfig({ location: "shouldLogClientHeartbeatSkipped" }).logHeartbeatSkipped;
};
