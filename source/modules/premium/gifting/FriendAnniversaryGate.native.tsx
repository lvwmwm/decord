// Module ID: 8103
// Function ID: 8104
// Name: getFriendAnniversaryGateConfig
// Dependencies: [8104, 2]
// Exports: getFriendAnniversaryGateConfig

// Module 8103 (getFriendAnniversaryGateConfig)
const result = require("set").fileFinishedImporting("modules/premium/gifting/FriendAnniversaryGate.native.tsx");

export const getFriendAnniversaryGateConfig = function getFriendAnniversaryGateConfig(arg0) {
  const obj = { enabled: null };
  obj[0] = importDefault(8104).getConfig(arg0).enabled;
  return obj;
};
