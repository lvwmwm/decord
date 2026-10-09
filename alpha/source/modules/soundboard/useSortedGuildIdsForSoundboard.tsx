// Module ID: 17694
// Function ID: 17695
// Name: useSortedGuildIdsForSoundboard
// Dependencies: [19, 4709, 5970, 1390, 1085, 1096, 558, 576, 573, 4728, 2]

// Module 17694 (useSortedGuildIdsForSoundboard)
import Constants from "Constants" /* 1085 */;
import Constants2 from "Constants" /* 1096 */;
import PremiumUtilsDefault from "PremiumUtils" /* 4728 */;
import react from "react" /* 19 */;
import PermissionStore from "PermissionStore" /* 4709 */;
import SortedGuildStore from "SortedGuildStore" /* 5970 */;
import UserStore from "UserStore" /* 1390 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const EMPTY_STRING_SNOWFLAKE_ID = Constants.EMPTY_STRING_SNOWFLAKE_ID;
const Permissions = Constants2.Permissions;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useSortedGuildIdsForSoundboard(guild_id, arg1) {
  let currentUser;
  let flattenedGuildIds;
  let tmp10;
  let tmp12;
  let tmp14;
  let tmp17;
  let tmp4;
  let tmp5;
  let tmp9;
  _require = guild_id;
  const tmp = _require;
  const obj = require("react");
  const cResult = obj.c(13);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    const fn = function c() {
      return currentUser.getCurrentUser();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  guild_id = undefined;
  const tmpResult = tmp(573);
  const stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
  if (guild_id != null) {
    guild_id = guild_id.guild_id;
  }
  if (guild_id == null) {
    guild_id = EMPTY_STRING_SNOWFLAKE_ID;
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [SortedGuildStore];
    const fn2 = function v() {
      return flattenedGuildIds.getFlattenedGuildIds();
    };
    cResult[2] = items1;
    cResult[3] = fn2;
    tmp10 = fn2;
    tmp9 = items1;
  } else {
    tmp9 = cResult[2];
    tmp10 = cResult[3];
  }
  const tmpResult3 = tmp(573);
  const stateFromStores1 = tmpResult3.useStateFromStores(tmp9, tmp10);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [PermissionStore];
    cResult[4] = items2;
    tmp12 = items2;
  } else {
    tmp12 = cResult[4];
  }
  if (cResult[5] !== guild_id) {
    const fn3 = function h() {
      const canResult = null == guild_id || null == tmp.guild_id || PermissionStore.can(Permissions.USE_EXTERNAL_SOUNDS, tmp);
      return canResult;
    };
    cResult[5] = guild_id;
    cResult[6] = fn3;
    tmp14 = fn3;
  } else {
    tmp14 = cResult[6];
  }
  const tmpResult4 = tmp(573);
  const stateFromStores2 = tmpResult4.useStateFromStores(tmp12, tmp14);
  const obj5 = guild_id(4728);
  if (obj5.canUseSoundboardEverywhere(stateFromStores)) {
    if (stateFromStores2) {
      if (cResult[7] === "" !== guild_id) {
        if (cResult[8] === guild_id) {
          let arr6;
          if (cResult[9] === stateFromStores1) {
            arr6 = cResult[10];
          }
          tmp17 = arr6;
          if ("" !== guild_id) {
            arr6.unshift(guild_id);
            tmp17 = arr6;
          }
        }
      }
      let found = stateFromStores1;
      if ("" !== guild_id) {
        found = stateFromStores1.filter((item) => item !== guild_id);
      }
      cResult[7] = "" !== guild_id;
      cResult[8] = guild_id;
      cResult[9] = stateFromStores1;
      cResult[10] = found;
      arr6 = found;
    }
    return tmp17;
  }
  if (cResult[11] !== guild_id) {
    const items3 = [guild_id];
    cResult[11] = guild_id;
    cResult[12] = items3;
    tmp17 = items3;
  } else {
    tmp17 = cResult[12];
  }
}) : (function useSortedGuildIdsForSoundboard(guild_id, arg1) {
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
  const tmpResult = tmp(tmp2[8]);
  const stateFromStores1 = tmpResult.useStateFromStores(items1, () => stateFromStores2.getFlattenedGuildIds());
  const items2 = [stateFromStores1];
  const tmpResult2 = tmp(tmp2[8]);
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
});
const result = size.fileFinishedImporting("modules/soundboard/useSortedGuildIdsForSoundboard.tsx");

export const useSortedGuildIdsForSoundboard = tmp2;
