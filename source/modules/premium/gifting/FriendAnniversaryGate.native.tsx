// Module ID: 8011
// Function ID: 8012
// Name: getFriendAnniversaryGateConfig
// Dependencies: [8012, 2]
// Exports: getFriendAnniversaryGateConfig

// Module 8011 (getFriendAnniversaryGateConfig)
import set from "set" /* 2 */;
import apexExperimentDefault from "apexExperiment" /* 8012 */;

const result = set.fileFinishedImporting("modules/premium/gifting/FriendAnniversaryGate.native.tsx");

export const getFriendAnniversaryGateConfig = function getFriendAnniversaryGateConfig(arg0) {
  const obj = { enabled: apexExperimentDefault.getConfig(arg0).enabled };
  return obj;
};
