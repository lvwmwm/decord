// Module ID: 11528
// Function ID: 89817
// Name: useGuildPowerupRollbackEnabled
// Dependencies: [4058, 4021, 2]
// Exports: default, isGuildPowerupRollbackEnabled

// Module 11528 (useGuildPowerupRollbackEnabled)
const result = require("set").fileFinishedImporting("modules/premium/powerups/hooks/useGuildPowerupRollbackEnabled.tsx");

export default function useGuildPowerupRollbackEnabled(guildId, skuId, location) {
  const fileUpload250MbPowerupRollbackEnabled = require(4058) /* items */.useFileUpload250MbPowerupRollbackEnabled(guildId, location);
  const obj = require(4058) /* items */;
  return skuId.skuId === require(4021) /* VANITY_URL_POWERUP_SKU_ID */.GUILD_POWERUP_MAX_FILE_SIZE_250_MB_SKU_ID && fileUpload250MbPowerupRollbackEnabled;
};
export const isGuildPowerupRollbackEnabled = function isGuildPowerupRollbackEnabled(outer1_0, skuId, maybeGetPerkPurchaseablePopoutDCF) {
  let fileUpload250MbPowerupRollbackEnabled = skuId.skuId === require(4021) /* VANITY_URL_POWERUP_SKU_ID */.GUILD_POWERUP_MAX_FILE_SIZE_250_MB_SKU_ID;
  if (fileUpload250MbPowerupRollbackEnabled) {
    fileUpload250MbPowerupRollbackEnabled = require(4058) /* items */.getFileUpload250MbPowerupRollbackEnabled(outer1_0, maybeGetPerkPurchaseablePopoutDCF);
    const obj = require(4058) /* items */;
  }
  return fileUpload250MbPowerupRollbackEnabled;
};
