// Module ID: 8221
// Function ID: 8222
// Name: getFriendAnniversaryGateConfig
// Dependencies: [8222, 2]
// Exports: getFriendAnniversaryGateConfig

// Module 8221 (getFriendAnniversaryGateConfig)
const result = require("set").fileFinishedImporting("modules/premium/gifting/FriendAnniversaryGate.native.tsx");

export const getFriendAnniversaryGateConfig = function getFriendAnniversaryGateConfig(arg0) {
  const obj = { enabled: null };
  obj[0] = importDefault(8222).getConfig(arg0).enabled;
  return obj;
};
