// Module ID: 15797
// Function ID: 121858
// Name: useSortedGuildIdsForSoundboard
// Dependencies: [31, 3758, 4970, 1849, 653, 482, 624, 3776, 2]
// Exports: useSortedGuildIdsForSoundboard

// Module 15797 (useSortedGuildIdsForSoundboard)
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import { EMPTY_STRING_SNOWFLAKE_ID } from "ME";
import { Permissions } from "sum";

const require = arg1;
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/soundboard/useSortedGuildIdsForSoundboard.tsx");

export const useSortedGuildIdsForSoundboard = function useSortedGuildIdsForSoundboard(guild_id, arg1) {
  const _require = guild_id;
  let closure_1 = arg1;
  let items = [closure_6];
  stateFromStores = _require(stateFromStores[6]).useStateFromStores(items, () => outer1_6.getCurrentUser());
  guild_id = undefined;
  if (null != guild_id) {
    guild_id = guild_id.guild_id;
  }
  if (null == guild_id) {
    guild_id = EMPTY_STRING_SNOWFLAKE_ID;
  }
  const obj = _require(stateFromStores[6]);
  const items1 = [stateFromStores2];
  const stateFromStores1 = _require(stateFromStores[6]).useStateFromStores(items1, () => stateFromStores2.getFlattenedGuildIds());
  const obj2 = _require(stateFromStores[6]);
  const items2 = [stateFromStores1];
  stateFromStores2 = _require(stateFromStores[6]).useStateFromStores(items2, () => {
    let canResult = null == guild_id;
    if (!canResult) {
      canResult = null == guild_id.guild_id;
    }
    if (!canResult) {
      canResult = stateFromStores1.can(outer1_8.USE_EXTERNAL_SOUNDS, guild_id);
    }
    return canResult;
  });
  const items3 = [stateFromStores, arg1, guild_id, stateFromStores1, stateFromStores2];
  return guild_id.useMemo(() => {
    if (obj.canUseSoundboardEverywhere(stateFromStores)) {
      if (stateFromStores2) {
        if ("" !== guild_id) {
          let found = arr2.filter((arg0) => arg0 !== outer1_3);
        } else {
          found = arr2;
        }
        if ("" !== guild_id) {
          found.unshift(guild_id);
        }
        return found;
      }
    }
    const items = [guild_id];
    return items;
  }, items3);
};
