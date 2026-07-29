// Module ID: 7855
// Function ID: 7856
// Name: getFriendAnniversaryGateConfig
// Dependencies: [7856, 2]
// Exports: getFriendAnniversaryGateConfig

// Module 7855 (getFriendAnniversaryGateConfig)
const result = require("set").fileFinishedImporting("modules/premium/gifting/FriendAnniversaryGate.native.tsx");

export const getFriendAnniversaryGateConfig = function getFriendAnniversaryGateConfig(arg0) {
  const obj = { enabled: null };
  obj[0] = importDefault(7856).getConfig(arg0).enabled;
  return obj;
};
