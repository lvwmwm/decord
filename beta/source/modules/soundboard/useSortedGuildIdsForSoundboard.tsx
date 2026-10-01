// Module ID: 16888
// Function ID: 16889
// Name: useSortedGuildIdsForSoundboard
// Dependencies: [19, 4469, 5750, 1372, 1074, 1085, 563, 4488, 2]
// Exports: useSortedGuildIdsForSoundboard

// Module 16888 (useSortedGuildIdsForSoundboard)
import Constants from "Constants" /* 1074 */;
import Constants2 from "Constants" /* 1085 */;
import PremiumUtilsDefault from "PremiumUtils" /* 4488 */;
import react from "react" /* 19 */;
import PermissionStore from "PermissionStore" /* 4469 */;
import SortedGuildStore from "SortedGuildStore" /* 5750 */;
import UserStore from "UserStore" /* 1372 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const EMPTY_STRING_SNOWFLAKE_ID = Constants.EMPTY_STRING_SNOWFLAKE_ID;
const Permissions = Constants2.Permissions;
const result = size.fileFinishedImporting("modules/soundboard/useSortedGuildIdsForSoundboard.tsx");

export const useSortedGuildIdsForSoundboard = function useSortedGuildIdsForSoundboard(guild_id, arg1) {
  let currentUser;
  let stateFromStores;
  let stateFromStores2;
  _require = guild_id;
  let closure_1 = arg1;
  const tmp = _require;
  let tmp2 = stateFromStores;
  let obj = require("useStateFromStores");
  let items = [UserStore];
  stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  guild_id = undefined;
  if (guild_id != null) {
    guild_id = guild_id.guild_id;
  }
  if (guild_id == null) {
    guild_id = EMPTY_STRING_SNOWFLAKE_ID;
  }
  const items1 = [stateFromStores2];
  const tmpResult = tmp(tmp2[6]);
  const stateFromStores1 = tmpResult.useStateFromStores(items1, () => stateFromStores2.getFlattenedGuildIds());
  const items2 = [stateFromStores1];
  const tmpResult2 = tmp(tmp2[6]);
  stateFromStores2 = tmpResult2.useStateFromStores(items2, () => {
    const canResult = null == guild_id || null == tmp.guild_id || PermissionStore.can(Permissions.USE_EXTERNAL_SOUNDS, tmp);
    return canResult;
  });
  const items3 = [stateFromStores, arg1, guild_id, stateFromStores1, stateFromStores2];
  return guild_id.useMemo(() => {
    const obj = PremiumUtilsDefault;
    if (obj.canUseSoundboardEverywhere(stateFromStores)) {
      const tmp2 = stateFromStores2;
      if (tmp2) {
        let found;
        const tmp3 = guild_id;
        if ("" !== guild_id) {
          found = arr2.filter((item) => item !== guild_id);
        } else {
          found = arr2;
        }
        if ("" !== guild_id) {
          found.unshift(tmp3);
        }
        return found;
      }
    }
    const items = [guild_id];
    return items;
  }, items3);
};
