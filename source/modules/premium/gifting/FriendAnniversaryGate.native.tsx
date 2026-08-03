// Module ID: 7978
// Function ID: 7979
// Name: getFriendAnniversaryGateConfig
// Dependencies: [7979, 2]
// Exports: getFriendAnniversaryGateConfig

// Module 7978 (getFriendAnniversaryGateConfig)
const result = require("set").fileFinishedImporting("modules/premium/gifting/FriendAnniversaryGate.native.tsx");

export const getFriendAnniversaryGateConfig = function getFriendAnniversaryGateConfig(arg0) {
  const obj = { enabled: null };
  obj[0] = importDefault(7979).getConfig(arg0).enabled;
  return obj;
};
