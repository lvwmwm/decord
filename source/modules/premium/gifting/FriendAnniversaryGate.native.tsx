// Module ID: 7849
// Function ID: 61961
// Name: getFriendAnniversaryGateConfig
// Dependencies: [7850, 2]
// Exports: getFriendAnniversaryGateConfig

// Module 7849 (getFriendAnniversaryGateConfig)
const result = require("set").fileFinishedImporting("modules/premium/gifting/FriendAnniversaryGate.native.tsx");

export const getFriendAnniversaryGateConfig = function getFriendAnniversaryGateConfig(arg0) {
  const obj = { enabled: importDefault(7850).getConfig(arg0).enabled };
  return obj;
};
