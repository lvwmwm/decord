// Module ID: 7756
// Function ID: 61634
// Name: getFriendAnniversaryGateConfig
// Dependencies: [7757, 2]
// Exports: getFriendAnniversaryGateConfig

// Module 7756 (getFriendAnniversaryGateConfig)
const result = require("set").fileFinishedImporting("modules/premium/gifting/FriendAnniversaryGate.native.tsx");

export const getFriendAnniversaryGateConfig = function getFriendAnniversaryGateConfig(arg0) {
  const obj = { enabled: importDefault(7757).getConfig(arg0).enabled };
  return obj;
};
