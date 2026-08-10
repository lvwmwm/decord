// Module ID: 11857
// Function ID: 11858
// Name: useGuildPowerupRollbackEnabled
// Dependencies: [4231, 4194, 2]
// Exports: default, isGuildPowerupRollbackEnabled

// Module 11857 (useGuildPowerupRollbackEnabled)
const result = require("set").fileFinishedImporting("modules/premium/powerups/hooks/useGuildPowerupRollbackEnabled.tsx");

export default function useGuildPowerupRollbackEnabled(guildId, skuId, location) {
  const fileUpload250MbPowerupRollbackEnabled = require(4231) /* experiment */.useFileUpload250MbPowerupRollbackEnabled(guildId, location);
  const obj = require(4231) /* experiment */;
  return skuId.skuId === require(4194) /* VANITY_URL_POWERUP_SKU_ID */.GUILD_POWERUP_MAX_FILE_SIZE_250_MB_SKU_ID && fileUpload250MbPowerupRollbackEnabled;
};
export const isGuildPowerupRollbackEnabled = function isGuildPowerupRollbackEnabled(closure_0, skuId, maybeGetPerkPurchaseablePopoutDCF) {
  let fileUpload250MbPowerupRollbackEnabled = skuId.skuId === require(4194) /* VANITY_URL_POWERUP_SKU_ID */.GUILD_POWERUP_MAX_FILE_SIZE_250_MB_SKU_ID;
  if (fileUpload250MbPowerupRollbackEnabled) {
    fileUpload250MbPowerupRollbackEnabled = require(4231) /* experiment */.getFileUpload250MbPowerupRollbackEnabled(closure_0, maybeGetPerkPurchaseablePopoutDCF);
    const tmpResult = require(4231) /* experiment */;
  }
  return fileUpload250MbPowerupRollbackEnabled;
};
