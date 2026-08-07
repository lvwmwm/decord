// Module ID: 8120
// Function ID: 8121
// Name: getFriendAnniversaryGateConfig
// Dependencies: [8121, 2]
// Exports: getFriendAnniversaryGateConfig

// Module 8120 (getFriendAnniversaryGateConfig)
const result = require("set").fileFinishedImporting("modules/premium/gifting/FriendAnniversaryGate.native.tsx");

export const getFriendAnniversaryGateConfig = function getFriendAnniversaryGateConfig(arg0) {
  const obj = { enabled: null };
  obj[0] = importDefault(8121).getConfig(arg0).enabled;
  return obj;
};
