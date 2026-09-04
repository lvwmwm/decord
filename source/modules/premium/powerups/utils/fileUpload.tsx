// Module ID: 12430
// Function ID: 12431
// Name: useShouldShowFileUploadRollback
// Dependencies: [4367, 4368, 586, 4371, 12431, 4408, 2]
// Exports: useShouldShowFileUploadRollback

// Module 12430 (useShouldShowFileUploadRollback)
import usePowerupActiveStatusDefault from "usePowerupActiveStatus" /* 12431 */;
import closure_3 from "calculateAppliedBoosts" /* 4367 */;
import { PowerupActiveStatusType } from "BoostedGuildTiers" /* 4368 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/premium/powerups/utils/fileUpload.tsx");

export const useShouldShowFileUploadRollback = function useShouldShowFileUploadRollback(guildId, location) {
  const _require = guildId;
  const items = [closure_3];
  const stateFromStores = _require(586).useStateFromStores(items, () => closure_1_3.getStateForGuild(closure_0));
  let tmp4;
  if (stateFromStores != null) {
    tmp4 = stateFromStores.allPowerups[tmp(undefined, 4371).GUILD_POWERUP_MAX_FILE_SIZE_250_MB_SKU_ID];
  }
  const obj = _require(586);
  const tmp5 = usePowerupActiveStatusDefault(guildId, tmp4);
  let tmp6 = _require(4408).useFileUpload250MbPowerupRollbackEnabled(guildId, location) && null != tmp4 && null != tmp4.storeRemovalDate;
  if (tmp6) {
    tmp6 = tmp5.type === PowerupActiveStatusType.POWERUP_ACTIVATED;
  }
  return tmp6;
};
