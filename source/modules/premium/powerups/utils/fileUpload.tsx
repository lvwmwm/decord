// Module ID: 11919
// Function ID: 11920
// Name: useShouldShowFileUploadRollback
// Dependencies: [4231, 4232, 589, 4235, 11920, 4272, 2]
// Exports: useShouldShowFileUploadRollback

// Module 11919 (useShouldShowFileUploadRollback)
import calculateAppliedBoosts from "calculateAppliedBoosts";
import { PowerupActiveStatusType } from "BoostedGuildTiers";

const require = arg1;
const result = require("initialize").fileFinishedImporting("modules/premium/powerups/utils/fileUpload.tsx");

export const useShouldShowFileUploadRollback = function useShouldShowFileUploadRollback(guildId, location) {
  const _require = guildId;
  const items = [calculateAppliedBoosts];
  const stateFromStores = _require(589).useStateFromStores(items, () => outer1_3.getStateForGuild(closure_0));
  let tmp4;
  if (stateFromStores != null) {
    tmp4 = stateFromStores.allPowerups[tmp(undefined, 4235).GUILD_POWERUP_MAX_FILE_SIZE_250_MB_SKU_ID];
  }
  const obj = _require(589);
  const tmp5 = importDefault(11920)(guildId, tmp4);
  let tmp6 = _require(4272).useFileUpload250MbPowerupRollbackEnabled(guildId, location) && null != tmp4 && null != tmp4.storeRemovalDate;
  if (tmp6) {
    tmp6 = tmp5.type === PowerupActiveStatusType.POWERUP_ACTIVATED;
  }
  return tmp6;
};
