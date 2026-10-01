// Module ID: 11771
// Function ID: 11772
// Name: MemberActionUtils
// Dependencies: [2108, 5023, 5024, 4455, 6644, 563, 1385, 2]
// Exports: useAllActionsCompleted, useMemberActionsForChannel, useNextMemberAction

// Module 11771 (MemberActionUtils)
import GuildMemberConstants from "GuildMemberConstants" /* 4455 */;
import useIsNewMemberDefault from "useIsNewMember" /* 6644 */;
import GuildMemberStore from "GuildMemberStore" /* 2108 */;
import GuildOnboardingHomeSettingsStore from "GuildOnboardingHomeSettingsStore" /* 5023 */;
import GuildOnboardingMemberActionStore from "GuildOnboardingMemberActionStore" /* 5024 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap, importDefault;

const GuildMemberFlags = GuildMemberConstants.GuildMemberFlags;
const result = size.fileFinishedImporting("modules/guild_onboarding_home/MemberActionUtils.tsx");

export const useMemberActionsForChannel = function useMemberActionsForChannel(guild_id, channel) {
  let tmp5;
  _require = guild_id;
  importDefault = channel;
  const items = [GuildOnboardingHomeSettingsStore];
  const items1 = [guild_id];
  const tmp = useIsNewMemberDefault(guild_id);
  const obj = require("useStateFromStores");
  const stateFromStores = obj.useStateFromStores(items, () => GuildOnboardingHomeSettingsStore.getNewMemberActions(guild_id), items1);
  const items2 = [GuildOnboardingMemberActionStore];
  const obj3 = require("useStateFromStores");
  const stateFromStores1 = obj3.useStateFromStores(items2, () => GuildOnboardingMemberActionStore.getCompletedActions(guild_id));
  if (tmp) {
    let num;
    if (stateFromStores != null) {
      num = stateFromStores.findIndex((channelId) => channelId.channelId === channel.id);
    }
    if (num == null) {
      num = 0;
    }
    let tmp4 = null;
    if (num >= 0) {
      tmp4 = null;
      if (null != stateFromStores) {
        tmp4 = stateFromStores[num];
      }
    }
    const obj2 = { channelAction: tmp4, completed: tmp5 };
    tmp5 = null != tmp4;
    if (tmp5) {
      let tmp6;
      if (stateFromStores1 != null) {
        tmp6 = stateFromStores1[tmp4.channelId];
      }
      tmp5 = true === tmp6;
    }
    return obj2;
  } else {
    return {};
  }
};
export const useNextMemberAction = function useNextMemberAction(guild_id, channelId) {
  let closure_2;
  _require = guild_id;
  let closure_1 = channelId;
  const items = [GuildOnboardingHomeSettingsStore];
  const obj = require("useStateFromStores");
  const stateFromStores = obj.useStateFromStores(items, () => GuildOnboardingHomeSettingsStore.getNewMemberActions(guild_id));
  const items1 = [GuildOnboardingMemberActionStore];
  const obj2 = require("useStateFromStores");
  dependencyMap = obj2.useStateFromStores(items1, () => GuildOnboardingMemberActionStore.getCompletedActions(guild_id));
  let found;
  if (stateFromStores != null) {
    found = stateFromStores.find((channelId) => {
      let tmp2;
      if (closure_2 != null) {
        tmp2 = tmp[channelId.channelId];
      }
      return true !== tmp2 && channelId.channelId !== channelId;
    });
  }
  return found;
};
export const useAllActionsCompleted = function useAllActionsCompleted(guild_id) {
  _require = guild_id;
  const items = [GuildMemberStore];
  const obj = require("useStateFromStores");
  const stateFromStores = obj.useStateFromStores(items, () => GuildMemberStore.getSelfMember(guild_id));
  let num;
  const hasFlag = require("FlagUtils").hasFlag;
  require("FlagUtils");
  if (stateFromStores != null) {
    num = stateFromStores.flags;
  }
  if (num == null) {
    num = 0;
  }
  return hasFlag(num, GuildMemberFlags.COMPLETED_HOME_ACTIONS);
};
