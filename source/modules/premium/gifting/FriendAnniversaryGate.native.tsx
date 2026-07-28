// Module ID: 7832
// Function ID: 62024
// Name: getFriendAnniversaryGateConfig
// Dependencies: [7833, 2]
// Exports: getFriendAnniversaryGateConfig

// Module 7832 (getFriendAnniversaryGateConfig)
const result = require("set").fileFinishedImporting("modules/premium/gifting/FriendAnniversaryGate.native.tsx");

export const getFriendAnniversaryGateConfig = function getFriendAnniversaryGateConfig(arg0) {
  const obj = { enabled: importDefault(7833).getConfig(arg0).enabled };
  return obj;
};
