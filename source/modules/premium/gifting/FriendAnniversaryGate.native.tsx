// Module ID: 8332
// Function ID: 8333
// Name: getFriendAnniversaryGateConfig
// Dependencies: [8333, 2]
// Exports: getFriendAnniversaryGateConfig

// Module 8332 (getFriendAnniversaryGateConfig)
import set from "set" /* 2 */;
import apexExperimentDefault from "apexExperiment" /* 8333 */;

const result = set.fileFinishedImporting("modules/premium/gifting/FriendAnniversaryGate.native.tsx");

export const getFriendAnniversaryGateConfig = function getFriendAnniversaryGateConfig(arg0) {
  const obj = { enabled: apexExperimentDefault.getConfig(arg0).enabled };
  return obj;
};
