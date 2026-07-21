// Module ID: 4035
// Function ID: 33589
// Name: useGuildAppliedBoostCount
// Dependencies: []
// Exports: default, getGuildPowerupsBoostCount

// Module 4035 (useGuildAppliedBoostCount)
let closure_2 = importAll(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
const result = arg1(dependencyMap[6]).fileFinishedImporting("modules/premium/powerups/hooks/useGuildPowerupsBoostCount.tsx");

export default function useGuildAppliedBoostCount(guildId) {
  const arg1 = guildId;
  const items = [closure_3];
  const stateFromStores = arg1(dependencyMap[5]).useStateFromStores(items, () => {
    const guild = stateFromStores1.getGuild(arg0);
    let prop;
    if (null != guild) {
      prop = guild.premiumSubscriberCount;
    }
    return prop;
  });
  let num = 0;
  if (null != stateFromStores) {
    num = stateFromStores;
  }
  const dependencyMap = num;
  const obj = arg1(dependencyMap[5]);
  const gameServerEnabled = arg1(dependencyMap[4]).useGameServerEnabled(guildId, "GuildPowerupsBoostCount");
  const React = gameServerEnabled;
  const obj2 = arg1(dependencyMap[4]);
  const items1 = [closure_5];
  const stateFromStores1 = arg1(dependencyMap[5]).useStateFromStores(items1, () => {
    const stateForGuild = stateForGuild.getStateForGuild(arg0);
    let appliedBoosts;
    if (null != stateForGuild) {
      appliedBoosts = stateForGuild.appliedBoosts;
    }
    return appliedBoosts;
  });
  closure_3 = stateFromStores1;
  const obj3 = arg1(dependencyMap[5]);
  const items2 = [closure_4];
  const stateFromStores2 = arg1(dependencyMap[5]).useStateFromStores(items2, () => {
    const stateForGuild = stateFromStores2.getStateForGuild(arg0);
    let appliedBoosts;
    if (null != stateForGuild) {
      appliedBoosts = stateForGuild.appliedBoosts;
    }
    return appliedBoosts;
  });
  closure_4 = stateFromStores2;
  const items3 = [num, stateFromStores1, stateFromStores2, gameServerEnabled];
  return React.useMemo(() => {
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
    obj = { "Null": "ICYMI_SET_REFRESHING", "Null": true, "Null": "/assets/.cache/intl/ZGVzaWdu", "Null": null, total: num };
    return obj;
  }, items3);
};
export const getGuildPowerupsBoostCount = function getGuildPowerupsBoostCount(id) {
  const guild = guild.getGuild(id);
  let prop;
  if (null != guild) {
    prop = guild.premiumSubscriberCount;
  }
  let num = 0;
  if (null != prop) {
    num = prop;
  }
  let obj = arg1(dependencyMap[4]);
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
  obj = { "Bool(true)": -536870861, "Bool(true)": -299892737, total: num };
  return obj;
};
