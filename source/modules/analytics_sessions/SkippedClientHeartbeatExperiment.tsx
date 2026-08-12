// Module ID: 6972
// Function ID: 6973
// Name: shouldLogClientHeartbeatSkipped
// Dependencies: [1471, 2]
// Exports: shouldLogClientHeartbeatSkipped

// Module 6972 (shouldLogClientHeartbeatSkipped)
import ApexExperiment from "ApexExperiment";

const obj = { 1: null };
obj[1] = { logHeartbeatSkipped: true };
let closure_0 = ApexExperiment.createApexExperiment({ name: "2026-02-client-heartbeat-skipped", kind: "user", defaultConfig: { logHeartbeatSkipped: false }, variations: obj });
const result = require("set").fileFinishedImporting("modules/analytics_sessions/SkippedClientHeartbeatExperiment.tsx");

export const shouldLogClientHeartbeatSkipped = function shouldLogClientHeartbeatSkipped() {
  return config.getConfig({ location: "shouldLogClientHeartbeatSkipped" }).logHeartbeatSkipped;
};
