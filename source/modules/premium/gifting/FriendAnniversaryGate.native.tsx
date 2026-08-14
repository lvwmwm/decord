// Module ID: 8246
// Function ID: 8247
// Name: getFriendAnniversaryGateConfig
// Dependencies: [8247, 2]
// Exports: getFriendAnniversaryGateConfig

// Module 8246 (getFriendAnniversaryGateConfig)
const result = require("set").fileFinishedImporting("modules/premium/gifting/FriendAnniversaryGate.native.tsx");

export const getFriendAnniversaryGateConfig = function getFriendAnniversaryGateConfig(arg0) {
  const obj = { enabled: null };
  obj[0] = importDefault(8247).getConfig(arg0).enabled;
  return obj;
};
