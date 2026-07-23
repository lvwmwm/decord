// Module ID: 8920
// Function ID: 70365
// Name: useCanRingToGuildVoiceChannel
// Dependencies: [1194, 4809, 1348, 1917, 4946, 3758, 4217, 3767, 4146, 653, 566, 8921, 4949, 4574, 2]
// Exports: canRingUsersInChannel, useCanRing

// Module 8920 (useCanRingToGuildVoiceChannel)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import closure_10 from "_isNativeReflectConstruct";
import closure_11 from "_isNativeReflectConstruct";
import ME from "ME";

let closure_12;
let closure_13;
let closure_14;
const require = arg1;
function useCanRingToGuildVoiceChannel(user, DisconnectedUserRow, stateFromStores) {
  let str = DisconnectedUserRow;
  const _require = user;
  if (DisconnectedUserRow === undefined) {
    str = "useCanRingToGuildVoiceChannel";
  }
  const importDefault = stateFromStores;
  let obj = _require(566);
  const items = [closure_8];
  stateFromStores = obj.useStateFromStores(items, () => {
    let tmp = null != stateFromStores;
    if (tmp) {
      tmp = stateFromStores(outer1_2[12])(stateFromStores, outer1_8);
    }
    return tmp;
  });
  const items1 = [closure_6, closure_7];
  const stateFromStores1 = _require(566).useStateFromStores(items1, () => {
    let guild_id;
    if (null != stateFromStores) {
      guild_id = stateFromStores.guild_id;
    }
    if (null == guild_id) {
      return false;
    } else {
      let canChat = null != outer1_6.getMember(guild_id, user.id);
      if (canChat) {
        canChat = outer1_7.getCheck(guild_id).canChat;
      }
      return canChat;
    }
  });
  let id;
  const obj2 = _require(566);
  if (null != stateFromStores) {
    id = stateFromStores.id;
  }
  const tmp3 = importDefault(4574);
  obj = {};
  let guild_id;
  if (null != stateFromStores) {
    guild_id = stateFromStores.guild_id;
  }
  obj.guildId = guild_id;
  obj.location = str;
  let enabled = importDefault(8921).useExperiment(obj).enabled;
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
({ ChannelTypes: closure_12, ChannelTypesSets: closure_13, StatusTypes: closure_14 } = ME);
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/calls/useCanRing.tsx");

export const useCanRing = function useCanRing(user, DisconnectedUserRow, selectedVoiceChannelId) {
  let str = DisconnectedUserRow;
  const _require = user;
  if (DisconnectedUserRow === undefined) {
    str = "useCanRing";
  }
  let closure_1 = selectedVoiceChannelId;
  let stateFromStores;
  const items = [closure_5];
  stateFromStores = _require(stateFromStores[10]).useStateFromStores(items, () => outer1_5.getChannel(closure_1));
  const obj = _require(stateFromStores[10]);
  const items1 = [_isNativeReflectConstruct];
  const stateFromStores1 = _require(stateFromStores[10]).useStateFromStores(items1, () => outer1_3.getId() === user.id);
  const obj2 = _require(stateFromStores[10]);
  const items2 = [closure_10];
  let stateFromStores2 = _require(stateFromStores[10]).useStateFromStores(items2, () => outer1_10.isFriend(user.id));
  const obj3 = _require(stateFromStores[10]);
  const items3 = [closure_9];
  let type;
  const stateFromStores3 = _require(stateFromStores[10]).useStateFromStores(items3, () => {
    let tmp = outer1_9.getStatus(user.id) === outer1_14.DND;
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
    let obj = importDefault(8921);
    obj = { guildId: channel.guild_id, location: "ring" };
    let enabled = obj.getCurrentConfig(obj).enabled;
    voiceState = voiceState.getVoiceState(channel.guild_id, id.getId());
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
