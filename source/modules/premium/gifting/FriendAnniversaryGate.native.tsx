// Module ID: 7750
// Function ID: 61587
// Name: getFriendAnniversaryGateConfig
// Dependencies: []
// Exports: getFriendAnniversaryGateConfig

// Module 7750 (getFriendAnniversaryGateConfig)
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("modules/premium/gifting/FriendAnniversaryGate.native.tsx");

export const getFriendAnniversaryGateConfig = function getFriendAnniversaryGateConfig(arg0) {
  const obj = { enabled: importDefault(dependencyMap[0]).getConfig(arg0).enabled };
  return obj;
};
