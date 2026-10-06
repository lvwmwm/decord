// Module ID: 16872
// Function ID: 16873
// Name: useSortedGuildIdsForSoundboard
// Dependencies: [19, 4472, 5751, 1378, 1086, 1097, 558, 576, 573, 4491, 2]

// Module 16872 (useSortedGuildIdsForSoundboard)
import Constants from "Constants" /* 1086 */;
import Constants2 from "Constants" /* 1097 */;
import PremiumUtilsDefault from "PremiumUtils" /* 4491 */;
import react from "react" /* 19 */;
import PermissionStore from "PermissionStore" /* 4472 */;
import SortedGuildStore from "SortedGuildStore" /* 5751 */;
import UserStore from "UserStore" /* 1378 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, guild_id;

const EMPTY_STRING_SNOWFLAKE_ID = Constants.EMPTY_STRING_SNOWFLAKE_ID;
const Permissions = Constants2.Permissions;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((guild_id, arg1) => {
  let currentUser;
  let flattenedGuildIds;
  let tmp10;
  let tmp13;
  let tmp15;
  let tmp18;
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
    class F {
      constructor() {
        return flattenedGuildIds.getFlattenedGuildIds();
      }
    }
    cResult[2] = items1;
    cResult[3] = F;
    tmp10 = F;
    tmp9 = items1;
  } else {
    tmp9 = cResult[2];
    tmp10 = cResult[3];
  }
  const tmpResult3 = tmp(573);
  const stateFromStores1 = tmpResult3.useStateFromStores(tmp9, tmp10);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [PermissionStore];
    class F {
      constructor() {
        return flattenedGuildIds.getFlattenedGuildIds();
      }
    }
    cResult[4] = items2;
    tmp13 = items2;
  } else {
    tmp13 = cResult[4];
  }
  if (cResult[5] !== guild_id) {
    class U {
      constructor() {
        const canResult = null == guild_id || null == tmp.guild_id || PermissionStore.can(Permissions.USE_EXTERNAL_SOUNDS, tmp);
        return canResult;
      }
    }
    cResult[5] = guild_id;
    class F {
      constructor() {
        return flattenedGuildIds.getFlattenedGuildIds();
      }
    }
    cResult[6] = U;
    tmp15 = U;
  } else {
    class U {
      constructor() {
        const canResult = null == guild_id || null == tmp.guild_id || PermissionStore.can(Permissions.USE_EXTERNAL_SOUNDS, tmp);
        return canResult;
      }
    }
  }
  const tmpResult4 = tmp(573);
  const stateFromStores2 = tmpResult4.useStateFromStores(tmp13, tmp15);
  const obj5 = guild_id(4491);
  if (obj5.canUseSoundboardEverywhere(stateFromStores)) {
    class U {
      constructor() {
        const canResult = null == guild_id || null == tmp.guild_id || PermissionStore.can(Permissions.USE_EXTERNAL_SOUNDS, tmp);
        return canResult;
      }
    }
    return tmp18;
  } else {
    class U {
      constructor() {
        const canResult = null == guild_id || null == tmp.guild_id || PermissionStore.can(Permissions.USE_EXTERNAL_SOUNDS, tmp);
        return canResult;
      }
    }
  }
  if (cResult[11] !== guild_id) {
    class U {
      constructor() {
        const canResult = null == guild_id || null == tmp.guild_id || PermissionStore.can(Permissions.USE_EXTERNAL_SOUNDS, tmp);
        return canResult;
      }
    }
    tmp19[0] = guild_id;
    class F {
      constructor() {
        return flattenedGuildIds.getFlattenedGuildIds();
      }
    }
    cResult[12] = tmp19;
    tmp18 = tmp19;
  } else {
    class U {
      constructor() {
        const canResult = null == guild_id || null == tmp.guild_id || PermissionStore.can(Permissions.USE_EXTERNAL_SOUNDS, tmp);
        return canResult;
      }
    }
  }
}) : ((guild_id, arg1) => {
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
