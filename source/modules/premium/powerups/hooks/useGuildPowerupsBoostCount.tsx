// Module ID: 4037
// Function ID: 33600
// Name: useGuildAppliedBoostCount
// Dependencies: [31, 1838, 4038, 4017, 4041, 566, 2]
// Exports: default, getGuildPowerupsBoostCount

// Module 4037 (useGuildAppliedBoostCount)
import result from "result";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";

const require = arg1;
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/premium/powerups/hooks/useGuildPowerupsBoostCount.tsx");

export default function useGuildAppliedBoostCount(guildId) {
  const _require = guildId;
  const items = [stateFromStores1];
  const stateFromStores = _require(num[5]).useStateFromStores(items, () => {
    const guild = stateFromStores1.getGuild(closure_0);
    let prop;
    if (null != guild) {
      prop = guild.premiumSubscriberCount;
    }
    return prop;
  });
  num = 0;
  if (null != stateFromStores) {
    num = stateFromStores;
  }
  let obj = _require(num[5]);
  const gameServerEnabled = _require(num[4]).useGameServerEnabled(guildId, "GuildPowerupsBoostCount");
  const obj2 = _require(num[4]);
  const items1 = [closure_5];
  stateFromStores1 = _require(num[5]).useStateFromStores(items1, () => {
    const stateForGuild = outer1_5.getStateForGuild(closure_0);
    let appliedBoosts;
    if (null != stateForGuild) {
      appliedBoosts = stateForGuild.appliedBoosts;
    }
    return appliedBoosts;
  });
  const obj3 = _require(num[5]);
  const items2 = [stateFromStores2];
  stateFromStores2 = _require(num[5]).useStateFromStores(items2, () => {
    const stateForGuild = stateFromStores2.getStateForGuild(closure_0);
    let appliedBoosts;
    if (null != stateForGuild) {
      appliedBoosts = stateForGuild.appliedBoosts;
    }
    return appliedBoosts;
  });
  const items3 = [num, stateFromStores1, stateFromStores2, gameServerEnabled];
  return gameServerEnabled.useMemo(() => {
    if (null != stateFromStores1) {
      let num2 = 0;
      if (null != stateFromStores2) {
        num2 = stateFromStores2;
      }
      const sum = stateFromStores1 + num2;
      let obj = {};
      const _Math = Math;
      obj.available = Math.max(0, 0 - sum);
      obj.spent = sum;
      obj.total = 0;
      obj.isLoading = false;
      return obj;
    }
    obj = { available: 0, spent: 0, total: num, isLoading: true };
    return obj;
  }, items3);
};
export const getGuildPowerupsBoostCount = function getGuildPowerupsBoostCount(id) {
  guild = guild.getGuild(id);
  let prop;
  if (null != guild) {
    prop = guild.premiumSubscriberCount;
  }
  let num = 0;
  if (null != prop) {
    num = prop;
  }
  let obj = require(4041) /* items */;
  const gameServerEnabled = obj.getGameServerEnabled(id, "GuildPowerupsBoostCount");
  const stateForGuild = stateForGuild2.getStateForGuild(id);
  let appliedBoosts;
  if (null != stateForGuild) {
    appliedBoosts = stateForGuild.appliedBoosts;
  }
  const stateForGuild1 = stateForGuild.getStateForGuild(id);
  if (null != stateForGuild1) {
    appliedBoosts = stateForGuild1.appliedBoosts;
  }
  if (null != appliedBoosts) {
    let num2 = 0;
    if (null != appliedBoosts) {
      num2 = appliedBoosts;
    }
    const sum = appliedBoosts + num2;
    obj = {};
    const _Math = Math;
    obj.available = Math.max(0, num - sum);
    obj.spent = sum;
    obj.total = num;
    return obj;
  }
  obj = { available: 0, spent: 0, total: num };
  return obj;
};
