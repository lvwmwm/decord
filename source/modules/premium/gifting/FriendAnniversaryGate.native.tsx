// Module ID: 8400
// Function ID: 8401
// Name: getFriendAnniversaryGateConfig
// Dependencies: [8401, 2]
// Exports: getFriendAnniversaryGateConfig

// Module 8400 (getFriendAnniversaryGateConfig)
import set from "set" /* 2 */;
import apexExperimentDefault from "apexExperiment" /* 8401 */;

const result = set.fileFinishedImporting("modules/premium/gifting/FriendAnniversaryGate.native.tsx");

export const getFriendAnniversaryGateConfig = function getFriendAnniversaryGateConfig(arg0) {
  const obj = { enabled: apexExperimentDefault.getConfig(arg0).enabled };
  return obj;
};
