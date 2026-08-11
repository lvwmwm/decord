// Module ID: 8182
// Function ID: 8183
// Name: getFriendAnniversaryGateConfig
// Dependencies: [8183, 2]
// Exports: getFriendAnniversaryGateConfig

// Module 8182 (getFriendAnniversaryGateConfig)
const result = require("set").fileFinishedImporting("modules/premium/gifting/FriendAnniversaryGate.native.tsx");

export const getFriendAnniversaryGateConfig = function getFriendAnniversaryGateConfig(arg0) {
  const obj = { enabled: null };
  obj[0] = importDefault(8183).getConfig(arg0).enabled;
  return obj;
};
