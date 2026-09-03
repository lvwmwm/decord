// Module ID: 8001
// Function ID: 8002
// Name: getFriendAnniversaryGateConfig
// Dependencies: [8002, 2]
// Exports: getFriendAnniversaryGateConfig

// Module 8001 (getFriendAnniversaryGateConfig)
import set from "set" /* 2 */;
import apexExperimentDefault from "apexExperiment" /* 8002 */;

const result = set.fileFinishedImporting("modules/premium/gifting/FriendAnniversaryGate.native.tsx");

export const getFriendAnniversaryGateConfig = function getFriendAnniversaryGateConfig(arg0) {
  const obj = { enabled: apexExperimentDefault.getConfig(arg0).enabled };
  return obj;
};
