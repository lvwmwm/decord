// Module ID: 11560
// Function ID: 90068
// Name: useShouldShowFileUploadRollback
// Dependencies: [4017, 4018, 566, 4021, 11561, 4058, 2]
// Exports: useShouldShowFileUploadRollback

// Module 11560 (useShouldShowFileUploadRollback)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { PowerupActiveStatusType } from "BoostedGuildTiers";

const require = arg1;
const result = require("initialize").fileFinishedImporting("modules/premium/powerups/utils/fileUpload.tsx");

export const useShouldShowFileUploadRollback = function useShouldShowFileUploadRollback(guildId, location) {
  const _require = guildId;
  const items = [_isNativeReflectConstruct];
  const stateFromStores = _require(566).useStateFromStores(items, () => outer1_3.getStateForGuild(closure_0));
  let tmp2;
  if (null != stateFromStores) {
    tmp2 = stateFromStores.allPowerups[_require(undefined, 4021).GUILD_POWERUP_MAX_FILE_SIZE_250_MB_SKU_ID];
  }
  const obj = _require(566);
  const tmp5 = importDefault(11561)(guildId, tmp2);
  let tmp6 = _require(4058).useFileUpload250MbPowerupRollbackEnabled(guildId, location) && null != tmp2 && null != tmp2.storeRemovalDate;
  if (tmp6) {
    tmp6 = tmp5.type === PowerupActiveStatusType.POWERUP_ACTIVATED;
  }
  return tmp6;
};
