// Module ID: 8080
// Function ID: 8081
// Name: getFriendAnniversaryGateConfig
// Dependencies: [8081, 2]
// Exports: getFriendAnniversaryGateConfig

// Module 8080 (getFriendAnniversaryGateConfig)
import set from "set" /* 2 */;
import apexExperimentDefault from "apexExperiment" /* 8081 */;

const result = set.fileFinishedImporting("modules/premium/gifting/FriendAnniversaryGate.native.tsx");

export const getFriendAnniversaryGateConfig = function getFriendAnniversaryGateConfig(arg0) {
  const obj = { enabled: apexExperimentDefault.getConfig(arg0).enabled };
  return obj;
};
