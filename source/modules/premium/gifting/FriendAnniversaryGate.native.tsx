// Module ID: 7796
// Function ID: 61934
// Name: getFriendAnniversaryGateConfig
// Dependencies: [7797, 2]
// Exports: getFriendAnniversaryGateConfig

// Module 7796 (getFriendAnniversaryGateConfig)
const result = require("set").fileFinishedImporting("modules/premium/gifting/FriendAnniversaryGate.native.tsx");

export const getFriendAnniversaryGateConfig = function getFriendAnniversaryGateConfig(arg0) {
  const obj = { enabled: importDefault(7797).getConfig(arg0).enabled };
  return obj;
};
