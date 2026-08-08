// Module ID: 8180
// Function ID: 8181
// Name: getFriendAnniversaryGateConfig
// Dependencies: [8181, 2]
// Exports: getFriendAnniversaryGateConfig

// Module 8180 (getFriendAnniversaryGateConfig)
const result = require("set").fileFinishedImporting("modules/premium/gifting/FriendAnniversaryGate.native.tsx");

export const getFriendAnniversaryGateConfig = function getFriendAnniversaryGateConfig(arg0) {
  const obj = { enabled: null };
  obj[0] = importDefault(8181).getConfig(arg0).enabled;
  return obj;
};
