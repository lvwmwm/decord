// Module ID: 11917
// Function ID: 11918
// Name: useGuildPowerupRollbackEnabled
// Dependencies: [4272, 4235, 2]
// Exports: default, isGuildPowerupRollbackEnabled

// Module 11917 (useGuildPowerupRollbackEnabled)
const result = require("set").fileFinishedImporting("modules/premium/powerups/hooks/useGuildPowerupRollbackEnabled.tsx");

export default function useGuildPowerupRollbackEnabled(guildId, skuId, location) {
  const fileUpload250MbPowerupRollbackEnabled = require(4272) /* experiment */.useFileUpload250MbPowerupRollbackEnabled(guildId, location);
  const obj = require(4272) /* experiment */;
  return skuId.skuId === require(4235) /* VANITY_URL_POWERUP_SKU_ID */.GUILD_POWERUP_MAX_FILE_SIZE_250_MB_SKU_ID && fileUpload250MbPowerupRollbackEnabled;
};
export const isGuildPowerupRollbackEnabled = function isGuildPowerupRollbackEnabled(closure_0, skuId, maybeGetPerkPurchaseablePopoutDCF) {
  let fileUpload250MbPowerupRollbackEnabled = skuId.skuId === require(4235) /* VANITY_URL_POWERUP_SKU_ID */.GUILD_POWERUP_MAX_FILE_SIZE_250_MB_SKU_ID;
  if (fileUpload250MbPowerupRollbackEnabled) {
    fileUpload250MbPowerupRollbackEnabled = require(4272) /* experiment */.getFileUpload250MbPowerupRollbackEnabled(closure_0, maybeGetPerkPurchaseablePopoutDCF);
    const tmpResult = require(4272) /* experiment */;
  }
  return fileUpload250MbPowerupRollbackEnabled;
};
