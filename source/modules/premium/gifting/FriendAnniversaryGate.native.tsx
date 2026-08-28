// Module ID: 7935
// Function ID: 7936
// Name: getFriendAnniversaryGateConfig
// Dependencies: [7936, 2]
// Exports: getFriendAnniversaryGateConfig

// Module 7935 (getFriendAnniversaryGateConfig)
import set from "set" /* 2 */;
import apexExperimentDefault from "apexExperiment" /* 7936 */;

const result = set.fileFinishedImporting("modules/premium/gifting/FriendAnniversaryGate.native.tsx");

export const getFriendAnniversaryGateConfig = function getFriendAnniversaryGateConfig(arg0) {
  const obj = { enabled: apexExperimentDefault.getConfig(arg0).enabled };
  return obj;
};
