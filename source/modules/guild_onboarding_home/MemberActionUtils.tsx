// Module ID: 11415
// Function ID: 88768
// Name: useMemberActionsForChannel
// Dependencies: [1917, 4333, 4334, 3746, 5606, 624, 1360, 2]
// Exports: useAllActionsCompleted, useMemberActionsForChannel, useNextMemberAction

// Module 11415 (useMemberActionsForChannel)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import { GuildMemberFlags } from "GuildMemberFlags";

const require = arg1;
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/guild_onboarding_home/MemberActionUtils.tsx");

export const useMemberActionsForChannel = function useMemberActionsForChannel(guild_id, channel) {
  const _require = guild_id;
  const importDefault = channel;
  let obj = _require(624);
  const items = [closure_4];
  const items1 = [guild_id];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_4.getNewMemberActions(closure_0), items1);
  const tmp = importDefault(5606)(guild_id);
  const items2 = [closure_5];
  const stateFromStores1 = _require(624).useStateFromStores(items2, () => outer1_5.getCompletedActions(closure_0));
  if (tmp) {
    let findIndexResult;
    if (null != stateFromStores) {
      findIndexResult = stateFromStores.findIndex((channelId) => channelId.channelId === id.id);
    }
    let num2 = 0;
    if (null != findIndexResult) {
      num2 = findIndexResult;
    }
    let tmp5 = null;
    if (num2 >= 0) {
      tmp5 = null;
      if (null != stateFromStores) {
        tmp5 = stateFromStores[num2];
      }
    }
    obj = { channelAction: tmp5 };
    let tmp6 = null != tmp5;
    if (tmp6) {
      let tmp7;
      if (null != stateFromStores1) {
        tmp7 = stateFromStores1[tmp5.channelId];
      }
      tmp6 = true === tmp7;
    }
    obj.completed = tmp6;
    return obj;
  } else {
    return {};
  }
  const obj3 = _require(624);
};
export const useNextMemberAction = function useNextMemberAction(guild_id, channelId) {
  const _require = guild_id;
  let closure_1 = channelId;
  let found;
  const items = [closure_4];
  const stateFromStores = _require(624).useStateFromStores(items, () => outer1_4.getNewMemberActions(closure_0));
  const obj = _require(624);
  const items1 = [closure_5];
  const dependencyMap = _require(624).useStateFromStores(items1, () => outer1_5.getCompletedActions(closure_0));
  if (null != stateFromStores) {
    found = stateFromStores.find((channelId) => {
      let tmp;
      if (null != table) {
        tmp = table[channelId.channelId];
      }
      let tmp3 = true !== tmp;
      if (tmp3) {
        tmp3 = channelId.channelId !== closure_1;
      }
      return tmp3;
    });
  }
  return found;
};
export const useAllActionsCompleted = function useAllActionsCompleted(guild_id) {
  const _require = guild_id;
  let flags;
  const items = [_isNativeReflectConstruct];
  const stateFromStores = _require(624).useStateFromStores(items, () => outer1_3.getSelfMember(closure_0));
  const obj = _require(624);
  if (null != stateFromStores) {
    flags = stateFromStores.flags;
  }
  let num = 0;
  if (null != flags) {
    num = flags;
  }
  return _require(1360).hasFlag(num, GuildMemberFlags.COMPLETED_HOME_ACTIONS);
};
