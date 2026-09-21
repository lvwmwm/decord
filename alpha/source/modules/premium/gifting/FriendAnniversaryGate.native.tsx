// Module ID: 8338
// Function ID: 8339
// Name: FriendAnniversaryGate
// Dependencies: [8339, 2]
// Exports: getFriendAnniversaryGateConfig

// Module 8338 (FriendAnniversaryGate)
import MobileFriendAnniversaryExperimentDefault from "MobileFriendAnniversaryExperiment" /* 8339 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/gifting/FriendAnniversaryGate.native.tsx");

export const getFriendAnniversaryGateConfig = function getFriendAnniversaryGateConfig(arg0) {
  const obj = { enabled: MobileFriendAnniversaryExperimentDefault.getConfig(arg0).enabled };
  return obj;
};
