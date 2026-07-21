// Module ID: 11517
// Function ID: 89742
// Name: useGuildPowerupRollbackEnabled
// Dependencies: []
// Exports: default, isGuildPowerupRollbackEnabled

// Module 11517 (useGuildPowerupRollbackEnabled)
const _module = require(dependencyMap[2]);
const result = _module.fileFinishedImporting("modules/premium/powerups/hooks/useGuildPowerupRollbackEnabled.tsx");

export default function useGuildPowerupRollbackEnabled(guildId, skuId, location) {
  const fileUpload250MbPowerupRollbackEnabled = require(dependencyMap[0]).useFileUpload250MbPowerupRollbackEnabled(guildId, location);
  const obj = require(dependencyMap[0]);
  return skuId.skuId === require(dependencyMap[1]).GUILD_POWERUP_MAX_FILE_SIZE_250_MB_SKU_ID && fileUpload250MbPowerupRollbackEnabled;
};
export const isGuildPowerupRollbackEnabled = function isGuildPowerupRollbackEnabled(closure_0, skuId, maybeGetPerkPurchaseablePopoutDCF) {
  let fileUpload250MbPowerupRollbackEnabled = skuId.skuId === require(dependencyMap[1]).GUILD_POWERUP_MAX_FILE_SIZE_250_MB_SKU_ID;
  if (fileUpload250MbPowerupRollbackEnabled) {
    fileUpload250MbPowerupRollbackEnabled = require(dependencyMap[0]).getFileUpload250MbPowerupRollbackEnabled(closure_0, maybeGetPerkPurchaseablePopoutDCF);
    const obj = require(dependencyMap[0]);
  }
  return fileUpload250MbPowerupRollbackEnabled;
};
