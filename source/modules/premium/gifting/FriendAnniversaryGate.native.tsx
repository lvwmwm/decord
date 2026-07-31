// Module ID: 7860
// Function ID: 7861
// Name: getFriendAnniversaryGateConfig
// Dependencies: [7861, 2]
// Exports: getFriendAnniversaryGateConfig

// Module 7860 (getFriendAnniversaryGateConfig)
const result = require("set").fileFinishedImporting("modules/premium/gifting/FriendAnniversaryGate.native.tsx");

export const getFriendAnniversaryGateConfig = function getFriendAnniversaryGateConfig(arg0) {
  const obj = { enabled: null };
  obj[0] = importDefault(7861).getConfig(arg0).enabled;
  return obj;
};
