// Module ID: 7527
// Function ID: 7528
// Name: FriendAnniversaryGate
// Dependencies: [7528, 2]
// Exports: getFriendAnniversaryGateConfig

// Module 7527 (FriendAnniversaryGate)
import MobileFriendAnniversaryExperimentDefault from "MobileFriendAnniversaryExperiment" /* 7528 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/gifting/FriendAnniversaryGate.native.tsx");

export const getFriendAnniversaryGateConfig = function getFriendAnniversaryGateConfig(arg0) {
  let obj2;
  const obj = { enabled: obj2.getConfig(arg0).enabled };
  obj2 = MobileFriendAnniversaryExperimentDefault;
  return obj;
};
