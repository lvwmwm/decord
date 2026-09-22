// Module ID: 8342
// Function ID: 8343
// Name: FriendAnniversaryGate
// Dependencies: [8343, 2]
// Exports: getFriendAnniversaryGateConfig

// Module 8342 (FriendAnniversaryGate)
import MobileFriendAnniversaryExperimentDefault from "MobileFriendAnniversaryExperiment" /* 8343 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/gifting/FriendAnniversaryGate.native.tsx");

export const getFriendAnniversaryGateConfig = function getFriendAnniversaryGateConfig(arg0) {
  const obj = { enabled: MobileFriendAnniversaryExperimentDefault.getConfig(arg0).enabled };
  return obj;
};
