// Module ID: 19214
// Function ID: 19215
// Name: useSortedGuildIdsForSoundboard
// Dependencies: [19, 5238, 6956, 1388, 1072, 1083, 563, 2174, 2]
// Exports: useSortedGuildIdsForSoundboard

// Module 19214 (useSortedGuildIdsForSoundboard)
import Constants from "Constants" /* 1072 */;
import Constants2 from "Constants" /* 1083 */;
import PremiumUtilsDefault from "PremiumUtils" /* 2174 */;
import react from "react" /* 19 */;
import PermissionStore from "PermissionStore" /* 5238 */;
import SortedGuildStore from "SortedGuildStore" /* 6956 */;
import UserStore from "UserStore" /* 1388 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const EMPTY_STRING_SNOWFLAKE_ID = Constants.EMPTY_STRING_SNOWFLAKE_ID;
const Permissions = Constants2.Permissions;
const result = size.fileFinishedImporting("modules/soundboard/useSortedGuildIdsForSoundboard.tsx");

export function useSortedGuildIdsForSoundboard(guild_id, arg1) {
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
}
