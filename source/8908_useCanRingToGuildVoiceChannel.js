// Module ID: 8908
// Function ID: 70288
// Name: useCanRingToGuildVoiceChannel
// Dependencies: []
// Exports: canRingUsersInChannel, useCanRing

// Module 8908 (useCanRingToGuildVoiceChannel)
function useCanRingToGuildVoiceChannel(user, DisconnectedUserRow, stateFromStores) {
  let str = DisconnectedUserRow;
  DisconnectedUserRow = user;
  if (DisconnectedUserRow === undefined) {
    str = "useCanRingToGuildVoiceChannel";
  }
  const importDefault = stateFromStores;
  let obj = DisconnectedUserRow(dependencyMap[10]);
  const items = [closure_8];
  stateFromStores = obj.useStateFromStores(items, () => {
    let tmp = null != arg2;
    if (tmp) {
      tmp = arg2(closure_2[12])(arg2, closure_8);
    }
    return tmp;
  });
  const items1 = [closure_6, closure_7];
  const stateFromStores1 = DisconnectedUserRow(dependencyMap[10]).useStateFromStores(items1, () => {
    let guild_id;
    if (null != arg2) {
      guild_id = arg2.guild_id;
    }
    if (null == guild_id) {
      return false;
    } else {
      let canChat = null != member.getMember(guild_id, arg0.id);
      if (canChat) {
        canChat = check.getCheck(guild_id).canChat;
      }
      return canChat;
    }
  });
  let id;
  const obj2 = DisconnectedUserRow(dependencyMap[10]);
  if (null != stateFromStores) {
    id = stateFromStores.id;
  }
  const tmp3 = importDefault(dependencyMap[13]);
  obj = {};
  let guild_id;
  if (null != stateFromStores) {
    guild_id = stateFromStores.guild_id;
  }
  obj.guildId = guild_id;
  obj.location = str;
  let enabled = importDefault(dependencyMap[11]).useExperiment(obj).enabled;
  if (null != stateFromStores) {
    const type = stateFromStores.type;
  }
  if (enabled) {
    enabled = type === constants.GUILD_VOICE;
  }
  if (enabled) {
    enabled = stateFromStores1;
  }
  if (enabled) {
    enabled = stateFromStores;
  }
  if (enabled) {
    enabled = !tmp3(id).needSubscriptionToAccess;
  }
  return enabled;
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
let closure_9 = importDefault(dependencyMap[6]);
let closure_10 = importDefault(dependencyMap[7]);
let closure_11 = importDefault(dependencyMap[8]);
({ ChannelTypes: closure_12, ChannelTypesSets: closure_13, StatusTypes: closure_14 } = arg1(dependencyMap[9]));
const tmp2 = arg1(dependencyMap[9]);
const result = arg1(dependencyMap[14]).fileFinishedImporting("modules/calls/useCanRing.tsx");

export const useCanRing = function useCanRing(user, DisconnectedUserRow, selectedVoiceChannelId) {
  let str = DisconnectedUserRow;
  DisconnectedUserRow = user;
  if (DisconnectedUserRow === undefined) {
    str = "useCanRing";
  }
  const importDefault = selectedVoiceChannelId;
  let dependencyMap;
  const items = [closure_5];
  const stateFromStores = DisconnectedUserRow(dependencyMap[10]).useStateFromStores(items, () => channel.getChannel(arg2));
  dependencyMap = stateFromStores;
  const obj = DisconnectedUserRow(dependencyMap[10]);
  const items1 = [closure_3];
  const stateFromStores1 = DisconnectedUserRow(dependencyMap[10]).useStateFromStores(items1, () => id.getId() === arg0.id);
  const obj2 = DisconnectedUserRow(dependencyMap[10]);
  const items2 = [closure_10];
  let stateFromStores2 = DisconnectedUserRow(dependencyMap[10]).useStateFromStores(items2, () => friend.isFriend(arg0.id));
  const obj3 = DisconnectedUserRow(dependencyMap[10]);
  const items3 = [closure_9];
  let type;
  const stateFromStores3 = DisconnectedUserRow(dependencyMap[10]).useStateFromStores(items3, () => {
    let tmp = status.getStatus(arg0.id) === constants.DND;
    if (tmp) {
      let guild_id;
      if (null != stateFromStores) {
        guild_id = stateFromStores.guild_id;
      }
      tmp = null != guild_id;
    }
    return tmp;
  });
  if (null != stateFromStores) {
    type = stateFromStores.type;
  }
  let hasItem = null != type;
  if (hasItem) {
    const CALLABLE = constants2.CALLABLE;
    hasItem = CALLABLE.has(type);
  }
  let tmp8 = useCanRingToGuildVoiceChannel(user, str, stateFromStores);
  if (stateFromStores2) {
    stateFromStores2 = !stateFromStores3;
  }
  if (stateFromStores2) {
    stateFromStores2 = !stateFromStores1;
  }
  if (stateFromStores2) {
    stateFromStores2 = !user.bot;
  }
  if (stateFromStores2) {
    stateFromStores2 = !user.system;
  }
  if (stateFromStores2) {
    stateFromStores2 = !user.isProvisional;
  }
  if (stateFromStores2) {
    if (!tmp8) {
      tmp8 = hasItem;
    }
    stateFromStores2 = tmp8;
  }
  return stateFromStores2;
};
export const canRingUsersInChannel = function canRingUsersInChannel(channel) {
  const CALLABLE = constants2.CALLABLE;
  if (CALLABLE.has(channel.type)) {
    const call = closure_4.getCall(channel.id);
    let tmp12 = null != call && null != call.messageId;
    if (tmp12) {
      tmp12 = !closure_4.isCallUnavailable(channel.id);
    }
    return tmp12;
  } else if (tmp === tmp2) {
    let obj = importDefault(dependencyMap[11]);
    obj = { guildId: channel.guild_id, location: "ring" };
    let enabled = obj.getCurrentConfig(obj).enabled;
    const voiceState = voiceState.getVoiceState(channel.guild_id, id.getId());
    if (enabled) {
      enabled = null != voiceState;
    }
    if (enabled) {
      enabled = voiceState.channelId === channel.id;
    }
    return enabled;
  } else {
    return false;
  }
};
export { useCanRingToGuildVoiceChannel };
