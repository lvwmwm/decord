// Module ID: 8225
// Function ID: 8226
// Name: getFriendAnniversaryGateConfig
// Dependencies: [8226, 2]
// Exports: getFriendAnniversaryGateConfig

// Module 8225 (getFriendAnniversaryGateConfig)
const result = require("set").fileFinishedImporting("modules/premium/gifting/FriendAnniversaryGate.native.tsx");

export const getFriendAnniversaryGateConfig = function getFriendAnniversaryGateConfig(arg0) {
  const obj = { enabled: null };
  obj[0] = importDefault(8226).getConfig(arg0).enabled;
  return obj;
};
