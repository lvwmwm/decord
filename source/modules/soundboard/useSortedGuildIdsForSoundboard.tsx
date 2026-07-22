// Module ID: 15633
// Function ID: 119363
// Name: useSortedGuildIdsForSoundboard
// Dependencies: []
// Exports: useSortedGuildIdsForSoundboard

// Module 15633 (useSortedGuildIdsForSoundboard)
let closure_3 = importAll(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
const EMPTY_STRING_SNOWFLAKE_ID = arg1(dependencyMap[4]).EMPTY_STRING_SNOWFLAKE_ID;
const Permissions = arg1(dependencyMap[5]).Permissions;
const result = arg1(dependencyMap[8]).fileFinishedImporting("modules/soundboard/useSortedGuildIdsForSoundboard.tsx");

export const useSortedGuildIdsForSoundboard = function useSortedGuildIdsForSoundboard(guild_id, arg1) {
  arg1 = guild_id;
  const importDefault = arg1;
  const items = [closure_6];
  const stateFromStores = arg1(dependencyMap[6]).useStateFromStores(items, () => currentUser.getCurrentUser());
  const dependencyMap = stateFromStores;
  guild_id = undefined;
  if (null != guild_id) {
    guild_id = guild_id.guild_id;
  }
  if (null == guild_id) {
    guild_id = EMPTY_STRING_SNOWFLAKE_ID;
  }
  const React = guild_id;
  const obj = arg1(dependencyMap[6]);
  const items1 = [closure_5];
  const stateFromStores1 = arg1(dependencyMap[6]).useStateFromStores(items1, () => stateFromStores2.getFlattenedGuildIds());
  let closure_4 = stateFromStores1;
  const obj2 = arg1(dependencyMap[6]);
  const items2 = [closure_4];
  const stateFromStores2 = arg1(dependencyMap[6]).useStateFromStores(items2, () => {
    let canResult = null == arg0;
    if (!canResult) {
      canResult = null == arg0.guild_id;
    }
    if (!canResult) {
      canResult = stateFromStores1.can(constants.USE_EXTERNAL_SOUNDS, arg0);
    }
    return canResult;
  });
  closure_5 = stateFromStores2;
  const items3 = [stateFromStores, arg1, guild_id, stateFromStores1, stateFromStores2];
  return React.useMemo(() => {
    if (obj.canUseSoundboardEverywhere(stateFromStores)) {
      if (stateFromStores2) {
        if ("" !== guild_id) {
          let found = arr2.filter((arg0) => arg0 !== closure_3);
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
