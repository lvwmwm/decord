// Module ID: 11535
// Function ID: 89827
// Name: useGuildChannelCreated
// Dependencies: [31, 1194, 1348, 1907, 4051, 1838, 11536, 4349, 3758, 653, 566, 8407, 21, 22, 5651, 2]
// Exports: useCompletedStates, usePermissions

// Module 11535 (useGuildChannelCreated)
import result from "result";
import closure_4 from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import closure_11 from "_isNativeReflectConstruct";
import closure_12 from "_isNativeReflectConstruct";
import closure_13 from "_isNativeReflectConstruct";
import ME from "ME";

let closure_14;
let closure_15;
let closure_6;
let closure_7;
const require = arg1;
function useGuildChannelCreated(guild) {
  const _require = guild;
  const items = [closure_8];
  const items1 = [guild];
  return _require(566).useStateFromStores(items, () => {
    function hasNewChannel(channel) {
      let tmp = null != outer1_0;
      if (tmp) {
        const obj = outer2_1(outer2_2[12]);
        const extractTimestampResult = outer2_1(outer2_2[12]).extractTimestamp(channel.channel.id);
        tmp = extractTimestampResult - outer2_1(outer2_2[12]).extractTimestamp(outer1_0.id) > 500;
        const obj2 = outer2_1(outer2_2[12]);
      }
      return tmp;
    }
    let id;
    if (null != guild) {
      id = guild.id;
    }
    const channels = outer1_8.getChannels(id);
    return channels[outer1_6].some(hasNewChannel) || channels[outer1_7].some(hasNewChannel);
  }, items1);
}
function useGuildPopulated(guild) {
  const _require = guild;
  const items = [closure_5];
  let closure_1 = _require(stateFromStoresArray[10]).useStateFromStores(items, () => {
    let systemChannelId;
    if (null != guild) {
      systemChannelId = guild.systemChannelId;
    }
    return outer1_5.getChannel(systemChannelId);
  });
  const obj = _require(stateFromStoresArray[10]);
  const items1 = [closure_12];
  stateFromStoresArray = _require(stateFromStoresArray[10]).useStateFromStoresArray(items1, () => {
    if (null != id) {
      const messages = outer1_12.getMessages(id.id);
      let toArrayResult = messages.toArray();
    } else {
      toArrayResult = [];
    }
    return toArrayResult;
  });
  const obj2 = _require(stateFromStoresArray[10]);
  const items2 = [closure_9];
  const items3 = [guild, stateFromStoresArray];
  return _require(stateFromStoresArray[10]).useStateFromStores(items2, () => {
    let id;
    if (null != guild) {
      id = guild.id;
    }
    const memberCount = outer1_9.getMemberCount(id);
    let num = 0;
    if (null != memberCount) {
      num = memberCount;
    }
    return num > 1 || stateFromStoresArray.some((type) => type.type === outer2_15.USER_JOIN);
  }, items3);
}
function useGuildPersonalized(guild) {
  const _require = guild;
  let icon;
  const items = [closure_11];
  const stateFromStores = _require(566).useStateFromStores(items, () => outer1_11.hasLayers());
  const obj = _require(566);
  const items1 = [_createForOfIteratorHelperLoose];
  const stateFromStores1 = _require(566).useStateFromStores(items1, () => {
    let id;
    if (null != guild) {
      id = guild.id;
    }
    return outer1_10.getGuild(id);
  });
  if (null != stateFromStores1) {
    icon = stateFromStores1.icon;
  }
  return null != icon && !stateFromStores;
}
function useChannelsMessaged(result) {
  const _require = result;
  const items = [closure_4];
  let closure_1 = _require(566).useStateFromStores(items, () => outer1_4.getId());
  const obj = _require(566);
  const items1 = [closure_12];
  return _require(566).useStateFromStores(items1, () => callback(outer1_2[13]).some(closure_0, (id) => {
    const messages = outer2_12.getMessages(id.id);
    const toArrayResult = messages.toArray();
    return callback(outer2_2[13]).some(toArrayResult, (author) => {
      let tmp = author.author.id === outer2_1;
      if (tmp) {
        tmp = !callback(outer3_2[14])(author);
      }
      return tmp;
    });
  }));
}
function useGuildMessaged(guild) {
  const _require = guild;
  let items = [closure_5];
  const stateFromStores = _require(566).useStateFromStores(items, () => {
    let mutableBasicGuildChannelsForGuild = null;
    if (null != guild) {
      mutableBasicGuildChannelsForGuild = outer1_5.getMutableBasicGuildChannelsForGuild(guild.id);
    }
    return mutableBasicGuildChannelsForGuild;
  });
  const items1 = [stateFromStores];
  return useChannelsMessaged(React.useMemo(() => {
    if (null == stateFromStores) {
      let items = [];
    } else {
      items = stateFromStores(outer1_2[13]).values(stateFromStores);
      const obj = stateFromStores(outer1_2[13]);
    }
    return items;
  }, items1));
}
({ GUILD_SELECTABLE_CHANNELS_KEY: closure_6, GUILD_VOCAL_CHANNELS_KEY: closure_7 } = _isNativeReflectConstruct);
({ Permissions: closure_14, MessageTypes: closure_15 } = ME);
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/guild_progress/GuildProgressHooks.tsx");

export const usePermissions = function usePermissions(channel, guild) {
  const _require = channel;
  let closure_1 = guild;
  const items = [closure_13];
  const items1 = [guild, channel];
  return _require(566).useStateFromStoresObject(items, () => {
    const obj = { canInvite: channel(outer1_2[11]).canViewInviteModal(outer1_13, closure_1, channel) };
    let canResult = null != closure_1;
    if (canResult) {
      canResult = outer1_13.can(outer1_14.MANAGE_GUILD, closure_1);
    }
    obj.canManageGuild = canResult;
    let canResult1 = null != channel;
    if (canResult1) {
      canResult1 = outer1_13.can(outer1_14.SEND_MESSAGES, channel);
    }
    obj.canMessage = canResult1;
    let canResult2 = null != closure_1;
    if (canResult2) {
      canResult2 = outer1_13.can(outer1_14.MANAGE_CHANNELS, closure_1);
    }
    obj.canCreateChannel = canResult2;
    return obj;
  }, items1);
};
export { useGuildChannelCreated };
export { useGuildPopulated };
export { useGuildPersonalized };
export { useChannelsMessaged };
export { useGuildMessaged };
export const useCompletedStates = function useCompletedStates(guild) {
  return { guildPopulated: useGuildPopulated(guild), guildMessaged: useGuildMessaged(guild), guildPersonalized: useGuildPersonalized(guild), guildChannelCreated: useGuildChannelCreated(guild) };
};
