// Module ID: 7989
// Function ID: 7990
// Name: getFriendAnniversaryGateConfig
// Dependencies: [7990, 2]
// Exports: getFriendAnniversaryGateConfig

// Module 7989 (getFriendAnniversaryGateConfig)
import set from "set" /* 2 */;
import apexExperimentDefault from "apexExperiment" /* 7990 */;

const result = set.fileFinishedImporting("modules/premium/gifting/FriendAnniversaryGate.native.tsx");

export const getFriendAnniversaryGateConfig = function getFriendAnniversaryGateConfig(arg0) {
  const obj = { enabled: apexExperimentDefault.getConfig(arg0).enabled };
  return obj;
};
