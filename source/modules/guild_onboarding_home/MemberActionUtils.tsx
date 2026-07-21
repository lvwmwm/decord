// Module ID: 11376
// Function ID: 88466
// Name: useMemberActionsForChannel
// Dependencies: []
// Exports: useAllActionsCompleted, useMemberActionsForChannel, useNextMemberAction

// Module 11376 (useMemberActionsForChannel)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
const GuildMemberFlags = arg1(dependencyMap[3]).GuildMemberFlags;
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/guild_onboarding_home/MemberActionUtils.tsx");

export const useMemberActionsForChannel = function useMemberActionsForChannel(guild_id, channel) {
  channel = guild_id;
  const importDefault = channel;
  let obj = channel(dependencyMap[5]);
  const items = [closure_4];
  const items1 = [guild_id];
  const stateFromStores = obj.useStateFromStores(items, () => newMemberActions.getNewMemberActions(arg0), items1);
  const tmp = importDefault(dependencyMap[4])(guild_id);
  const items2 = [closure_5];
  const stateFromStores1 = channel(dependencyMap[5]).useStateFromStores(items2, () => completedActions.getCompletedActions(arg0));
  if (tmp) {
    let findIndexResult;
    if (null != stateFromStores) {
      findIndexResult = stateFromStores.findIndex((channelId) => channelId.channelId === arg1.id);
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
  const obj3 = channel(dependencyMap[5]);
};
export const useNextMemberAction = function useNextMemberAction(guild_id, channelId) {
  channelId = guild_id;
  const importDefault = channelId;
  let found;
  const items = [closure_4];
  const stateFromStores = channelId(closure_2[5]).useStateFromStores(items, () => newMemberActions.getNewMemberActions(arg0));
  const obj = channelId(closure_2[5]);
  const items1 = [closure_5];
  closure_2 = channelId(closure_2[5]).useStateFromStores(items1, () => completedActions.getCompletedActions(arg0));
  if (null != stateFromStores) {
    found = stateFromStores.find((channelId) => {
      let tmp;
      if (null != closure_2) {
        tmp = closure_2[channelId.channelId];
      }
      let tmp3 = true !== tmp;
      if (tmp3) {
        tmp3 = channelId.channelId !== arg1;
      }
      return tmp3;
    });
  }
  return found;
};
export const useAllActionsCompleted = function useAllActionsCompleted(guild_id) {
  const arg1 = guild_id;
  let flags;
  const items = [closure_3];
  const stateFromStores = arg1(dependencyMap[5]).useStateFromStores(items, () => selfMember.getSelfMember(arg0));
  const obj = arg1(dependencyMap[5]);
  if (null != stateFromStores) {
    flags = stateFromStores.flags;
  }
  let num = 0;
  if (null != flags) {
    num = flags;
  }
  return arg1(dependencyMap[6]).hasFlag(num, GuildMemberFlags.COMPLETED_HOME_ACTIONS);
};
