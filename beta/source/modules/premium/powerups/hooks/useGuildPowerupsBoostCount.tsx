// Module ID: 4743
// Function ID: 4744
// Name: useGuildPowerupsBoostCount
// Dependencies: [19, 4744, 2067, 4723, 4747, 504, 2]
// Exports: default, getGuildPowerupsBoostCount

// Module 4743 (useGuildPowerupsBoostCount)
import GameServerExperiment from "GameServerExperiment" /* 4747 */;
import react from "react" /* 19 */;
import GameServerStore from "GameServerStore" /* 4744 */;
import GuildStore from "GuildStore" /* 2067 */;
import GuildPowerupsStore from "GuildPowerupsStore" /* 4723 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const result = size.fileFinishedImporting("modules/premium/powerups/hooks/useGuildPowerupsBoostCount.tsx");

export default function useGuildAppliedBoostCount(guildId) {
  let num;
  let stateFromStores1;
  _require = guildId;
  const tmp = _require;
  const tmp2 = num;
  let obj = require("get initialized");
  const items = [stateFromStores1];
  num = obj.useStateFromStores(items, () => {
    const guild = GuildStore.getGuild(guildId);
    let prop;
    if (guild != null) {
      prop = guild.premiumSubscriberCount;
    }
    return prop;
  });
  if (num == null) {
    num = 0;
  }
  const tmpResult = tmp(tmp2[4]);
  const gameServerEnabled = tmpResult.useGameServerEnabled(guildId, "GuildPowerupsBoostCount");
  const items1 = [GuildPowerupsStore];
  const tmpResult3 = tmp(tmp2[5]);
  const stateFromStores = tmpResult3.useStateFromStores(items1, () => {
    const stateForGuild = GuildPowerupsStore.getStateForGuild(guildId);
    let appliedBoosts;
    if (stateForGuild != null) {
      appliedBoosts = stateForGuild.appliedBoosts;
    }
    return appliedBoosts;
  });
  const items2 = [stateFromStores];
  const tmpResult4 = tmp(tmp2[5]);
  stateFromStores1 = tmpResult4.useStateFromStores(items2, () => {
    const stateForGuild = GameServerStore.getStateForGuild(guildId);
    let appliedBoosts;
    if (stateForGuild != null) {
      appliedBoosts = stateForGuild.appliedBoosts;
    }
    return appliedBoosts;
  });
  const items3 = [num, stateFromStores, stateFromStores1, gameServerEnabled];
  return gameServerEnabled.useMemo(() => {
    if (null != stateFromStores) {
      num = stateFromStores1;
      if (stateFromStores1 == null) {
        num = 0;
      }
      const sum = tmp + num;
      const _Math = Math;
      const obj = { available: Math.max(0, num - sum), spent: sum, total: num, isLoading: false };
      return obj;
    }
    return { available: 0, spent: 0, total: num, isLoading: true };
  }, items3);
};
export const getGuildPowerupsBoostCount = function getGuildPowerupsBoostCount(id) {
  let num2;
  const guild = GuildStore.getGuild(id);
  let total;
  if (guild != null) {
    total = guild.premiumSubscriberCount;
  }
  if (total == null) {
    total = 0;
  }
  const obj = GameServerExperiment;
  const gameServerEnabled = obj.getGameServerEnabled(id, "GuildPowerupsBoostCount");
  const stateForGuild = GuildPowerupsStore.getStateForGuild(id);
  let appliedBoosts;
  if (stateForGuild != null) {
    appliedBoosts = stateForGuild.appliedBoosts;
  }
  const stateForGuild1 = GameServerStore.getStateForGuild(id);
  if (stateForGuild1 != null) {
    num2 = stateForGuild1.appliedBoosts;
  }
  if (null != appliedBoosts) {
    if (num2 == null) {
      num2 = 0;
    }
    const sum = appliedBoosts + num2;
    const _Math = Math;
    const obj2 = { available: Math.max(0, total - sum), spent: sum, total };
    return obj2;
  }
  return { available: 0, spent: 0, total };
};
