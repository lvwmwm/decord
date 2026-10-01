// Module ID: 7523
// Function ID: 7524
// Name: FriendAnniversaryGate
// Dependencies: [7524, 2]
// Exports: getFriendAnniversaryGateConfig

// Module 7523 (FriendAnniversaryGate)
import MobileFriendAnniversaryExperimentDefault from "MobileFriendAnniversaryExperiment" /* 7524 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/gifting/FriendAnniversaryGate.native.tsx");

export const getFriendAnniversaryGateConfig = function getFriendAnniversaryGateConfig(arg0) {
  let obj2;
  const obj = { enabled: obj2.getConfig(arg0).enabled };
  obj2 = MobileFriendAnniversaryExperimentDefault;
  return obj;
};
