// Module ID: 8292
// Function ID: 8293
// Name: getFriendAnniversaryGateConfig
// Dependencies: [8293, 2]
// Exports: getFriendAnniversaryGateConfig

// Module 8292 (getFriendAnniversaryGateConfig)
const result = require("set").fileFinishedImporting("modules/premium/gifting/FriendAnniversaryGate.native.tsx");

export const getFriendAnniversaryGateConfig = function getFriendAnniversaryGateConfig(arg0) {
  const obj = { enabled: null };
  obj[0] = importDefault(8293).getConfig(arg0).enabled;
  return obj;
};
