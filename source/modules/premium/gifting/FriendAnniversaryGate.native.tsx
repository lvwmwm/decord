// Module ID: 7921
// Function ID: 7922
// Name: getFriendAnniversaryGateConfig
// Dependencies: [7922, 2]
// Exports: getFriendAnniversaryGateConfig

// Module 7921 (getFriendAnniversaryGateConfig)
import set from "set" /* 2 */;
import apexExperimentDefault from "apexExperiment" /* 7922 */;

const result = set.fileFinishedImporting("modules/premium/gifting/FriendAnniversaryGate.native.tsx");

export const getFriendAnniversaryGateConfig = function getFriendAnniversaryGateConfig(arg0) {
  const obj = { enabled: apexExperimentDefault.getConfig(arg0).enabled };
  return obj;
};
