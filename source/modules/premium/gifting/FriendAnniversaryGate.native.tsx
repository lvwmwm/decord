// Module ID: 7957
// Function ID: 7958
// Name: getFriendAnniversaryGateConfig
// Dependencies: [7958, 2]
// Exports: getFriendAnniversaryGateConfig

// Module 7957 (getFriendAnniversaryGateConfig)
import set from "set" /* 2 */;
import apexExperimentDefault from "apexExperiment" /* 7958 */;

const result = set.fileFinishedImporting("modules/premium/gifting/FriendAnniversaryGate.native.tsx");

export const getFriendAnniversaryGateConfig = function getFriendAnniversaryGateConfig(arg0) {
  const obj = { enabled: apexExperimentDefault.getConfig(arg0).enabled };
  return obj;
};
