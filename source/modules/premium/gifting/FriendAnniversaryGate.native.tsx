// Module ID: 7990
// Function ID: 7991
// Name: getFriendAnniversaryGateConfig
// Dependencies: [7991, 2]
// Exports: getFriendAnniversaryGateConfig

// Module 7990 (getFriendAnniversaryGateConfig)
const result = require("set").fileFinishedImporting("modules/premium/gifting/FriendAnniversaryGate.native.tsx");

export const getFriendAnniversaryGateConfig = function getFriendAnniversaryGateConfig(arg0) {
  const obj = { enabled: null };
  obj[0] = importDefault(7991).getConfig(arg0).enabled;
  return obj;
};
