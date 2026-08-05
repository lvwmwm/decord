// Module ID: 7962
// Function ID: 7963
// Name: getFriendAnniversaryGateConfig
// Dependencies: [7963, 2]
// Exports: getFriendAnniversaryGateConfig

// Module 7962 (getFriendAnniversaryGateConfig)
const result = require("set").fileFinishedImporting("modules/premium/gifting/FriendAnniversaryGate.native.tsx");

export const getFriendAnniversaryGateConfig = function getFriendAnniversaryGateConfig(arg0) {
  const obj = { enabled: null };
  obj[0] = importDefault(7963).getConfig(arg0).enabled;
  return obj;
};
