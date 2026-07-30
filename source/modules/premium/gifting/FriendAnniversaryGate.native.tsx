// Module ID: 7852
// Function ID: 7853
// Name: getFriendAnniversaryGateConfig
// Dependencies: [7853, 2]
// Exports: getFriendAnniversaryGateConfig

// Module 7852 (getFriendAnniversaryGateConfig)
const result = require("set").fileFinishedImporting("modules/premium/gifting/FriendAnniversaryGate.native.tsx");

export const getFriendAnniversaryGateConfig = function getFriendAnniversaryGateConfig(arg0) {
  const obj = { enabled: null };
  obj[0] = importDefault(7853).getConfig(arg0).enabled;
  return obj;
};
