// Module ID: 11965
// Function ID: 11966
// Name: GuildProgressHooks
// Dependencies: [19, 502, 2045, 4467, 4754, 2067, 11966, 5056, 4469, 1074, 504, 9064, 11, 12, 6688, 2]
// Exports: useChannelsMessaged, useCompletedStates, useGuildChannelCreated, useGuildMessaged, useGuildPersonalized, useGuildPopulated, usePermissions

// Module 11965 (GuildProgressHooks)
import canViewInviteModal from "canViewInviteModal" /* 9064 */;
import react from "react" /* 19 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import GuildChannelStore_mod from "GuildChannelStore" /* 4467 */;
import GuildMemberCountStore from "GuildMemberCountStore" /* 4754 */;
import GuildStore from "GuildStore" /* 2067 */;
import LayerStore from "LayerStore" /* 11966 */;
import MessageStore from "MessageStore" /* 5056 */;
import PermissionStore from "PermissionStore" /* 4469 */;
import Constants from "Constants" /* 1074 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, getChannels, getGuild, id, mutableBasicGuildChannelsForGuild;

let closure_14;
let closure_15;
let metroImportDefault;
let metroRequire;
const f95097 = () => {
  let systemChannelId;
  const getChannel = ChannelStore.getChannel;
  if (guild != null) {
    systemChannelId = guild.systemChannelId;
  }
  return getChannel(systemChannelId);
};
const f95100 = () => LayerStore.hasLayers();
const f95101 = () => {
  id = undefined;
  getGuild = getGuild.getGuild;
  if (id != null) {
    id = id.id;
  }
  return getGuild(id);
};
const f95102 = () => id.getId();
let GuildChannelStore = GuildChannelStore_mod;
({ GUILD_SELECTABLE_CHANNELS_KEY: metroRequire, GUILD_VOCAL_CHANNELS_KEY: metroImportDefault } = GuildChannelStore);
GuildChannelStore = GuildChannelStore_mod;
({ Permissions: closure_14, MessageTypes: closure_15 } = Constants);
const result = size.fileFinishedImporting("modules/guild_progress/GuildProgressHooks.tsx");

export const usePermissions = function usePermissions(channel, guild) {
  _require = channel;
  let closure_1 = guild;
  let obj = require("get initialized");
  const items = [PermissionStore];
  const items1 = [guild, channel];
  return obj.useStateFromStoresObject(items, () => {
    let canResult;
    let canResult1;
    let canResult2;
    let obj2;
    const obj = { canInvite: obj2.canViewInviteModal(PermissionStore, guild, channel), canManageGuild: canResult, canMessage: canResult1, canCreateChannel: canResult2 };
    obj2 = canViewInviteModal;
    canResult = null != guild && obj3.can(constants.MANAGE_GUILD, tmp);
    canResult1 = null != tmp2 && obj3.can(constants.SEND_MESSAGES, tmp2);
    canResult2 = null != tmp && obj3.can(constants.MANAGE_CHANNELS, tmp);
    return obj;
  }, items1);
};
export const useGuildChannelCreated = function useGuildChannelCreated(arg0) {
  let closure_0;
  _require = arg0;
  const items = [GuildChannelStore];
  const items1 = [arg0];
  const obj = require("get initialized");
  return obj.useStateFromStores(items, () => {
    id = undefined;
    const tmp = getChannels;
    getChannels = getChannels.getChannels;
    if (id != null) {
      id = id.id;
    }
    function hasNewChannel(channel) {
      let tmp2 = null != id;
      if (tmp2) {
        const obj = closure_2_1(stateFromStoresArray[12]);
        const extractTimestampResult = obj.extractTimestamp(channel.channel.id);
        const obj2 = closure_2_1(stateFromStoresArray[12]);
        tmp2 = extractTimestampResult - obj2.extractTimestamp(tmp.id) > 500;
      }
      return tmp2;
    }
    const channels = getChannels(id);
    let obj = channels[closure_2_7];
    let obj2 = channels[closure_2_6];
    const tmp4 = obj2.some(hasNewChannel) || obj.some(hasNewChannel);
    return tmp4;
  }, items1);
};
export const useGuildPopulated = function useGuildPopulated(guild) {
  let stateFromStoresArray;
  _require = guild;
  const items = [ChannelStore];
  const obj = require("get initialized");
  let closure_1 = obj.useStateFromStores(items, f95097);
  const items1 = [MessageStore];
  const obj2 = require("get initialized");
  stateFromStoresArray = obj2.useStateFromStoresArray(items1, () => {
    let toArrayResult;
    if (null != closure_1) {
      const messages = MessageStore.getMessages(tmp.id);
      toArrayResult = messages.toArray();
    } else {
      toArrayResult = [];
    }
    return toArrayResult;
  });
  const items2 = [GuildMemberCountStore];
  const items3 = [guild, stateFromStoresArray];
  const obj3 = require("get initialized");
  return obj3.useStateFromStores(items2, () => {
    id = undefined;
    const getMemberCount = GuildMemberCountStore.getMemberCount;
    if (guild != null) {
      id = guild.id;
    }
    let num = getMemberCount(id);
    if (num == null) {
      num = 0;
    }
    const tmp3 = num > 1 || stateFromStoresArray.some((type) => type.type === constants.USER_JOIN);
    return tmp3;
  }, items3);
};
export const useGuildPersonalized = function useGuildPersonalized(guild) {
  _require = guild;
  const items = [LayerStore];
  const obj = require("get initialized");
  const stateFromStores = obj.useStateFromStores(items, f95100);
  const items1 = [GuildStore];
  const obj2 = require("get initialized");
  const stateFromStores1 = obj2.useStateFromStores(items1, f95101);
  let icon;
  if (stateFromStores1 != null) {
    icon = stateFromStores1.icon;
  }
  return null != icon && !stateFromStores;
};
export const useChannelsMessaged = function useChannelsMessaged(items3) {
  _require = items3;
  const items = [AuthenticationStore];
  const obj = require("get initialized");
  let closure_1 = obj.useStateFromStores(items, f95102);
  const items1 = [MessageStore];
  const obj2 = require("get initialized");
  return obj2.useStateFromStores(items1, () => {
    const obj = closure_1(stateFromStoresArray[13]);
    return obj.some(closure_0, (id) => {
      messages = messages.getMessages(id.id);
      const toArrayResult = messages.toArray();
      const obj2 = closure_1(stateFromStoresArray[13]);
      return obj2.some(toArrayResult, (author) => {
        const tmp = author.author.id === closure_1_1 && !closure_2_1(closure_2_2[14])(author);
        return tmp;
      });
    });
  });
};
export const useGuildMessaged = function useGuildMessaged(arg0) {
  let closure_0;
  _require = arg0;
  const items = [ChannelStore];
  const obj = require("get initialized");
  const stateFromStores = obj.useStateFromStores(items, () => {
    mutableBasicGuildChannelsForGuild = null;
    if (null != closure_0) {
      mutableBasicGuildChannelsForGuild = mutableBasicGuildChannelsForGuild.getMutableBasicGuildChannelsForGuild(tmp.id);
    }
    return mutableBasicGuildChannelsForGuild;
  });
  const items1 = [stateFromStores];
  _require = react.useMemo(() => {
    let items;
    if (null == stateFromStores) {
      items = [];
    } else {
      const obj = stateFromStores(stateFromStoresArray[13]);
      items = obj.values(tmp);
    }
    return items;
  }, items1);
  const items2 = [AuthenticationStore];
  const obj2 = require("get initialized");
  let closure_1 = obj2.useStateFromStores(items2, f95102);
  const items3 = [MessageStore];
  const obj3 = require("get initialized");
  return obj3.useStateFromStores(items3, () => {
    const obj = closure_1(stateFromStoresArray[13]);
    return obj.some(closure_0, (id) => {
      messages = messages.getMessages(id.id);
      const toArrayResult = messages.toArray();
      const obj2 = closure_1(stateFromStoresArray[13]);
      return obj2.some(toArrayResult, (author) => {
        const tmp = author.author.id === closure_1_1 && !closure_2_1(closure_2_2[14])(author);
        return tmp;
      });
    });
  });
};
export const useCompletedStates = function useCompletedStates(guild) {
  let icon;
  let items10;
  let items11;
  let items2;
  let items3;
  let items7;
  let obj4;
  let obj7;
  let stateFromStores1;
  let stateFromStoresArray;
  let tmpResult;
  let obj = {
    guildPopulated: obj4.useStateFromStores(items2, () => {
      id = undefined;
      const getMemberCount = GuildMemberCountStore.getMemberCount;
      if (guild != null) {
        id = guild.id;
      }
      let num = getMemberCount(id);
      if (num == null) {
        num = 0;
      }
      const tmp3 = num > 1 || stateFromStoresArray.some((type) => type.type === constants.USER_JOIN);
      return tmp3;
    }, items3),
    guildMessaged: obj7.useStateFromStores(items7, () => {
      const obj = closure_1(stateFromStoresArray[13]);
      return obj.some(closure_0, (id) => {
        messages = messages.getMessages(id.id);
        const toArrayResult = messages.toArray();
        const obj2 = closure_1(stateFromStoresArray[13]);
        return obj2.some(toArrayResult, (author) => {
          const tmp = author.author.id === closure_1_1 && !closure_2_1(closure_2_2[14])(author);
          return tmp;
        });
      });
    }),
    guildPersonalized: null != icon && !stateFromStores1,
    guildChannelCreated: tmpResult.useStateFromStores(items10, () => {
      id = undefined;
      const tmp = getChannels;
      getChannels = getChannels.getChannels;
      if (id != null) {
        id = id.id;
      }
      function hasNewChannel(channel) {
        let tmp2 = null != id;
        if (tmp2) {
          const obj = closure_2_1(stateFromStoresArray[12]);
          const extractTimestampResult = obj.extractTimestamp(channel.channel.id);
          const obj2 = closure_2_1(stateFromStoresArray[12]);
          tmp2 = extractTimestampResult - obj2.extractTimestamp(tmp.id) > 500;
        }
        return tmp2;
      }
      const channels = getChannels(id);
      let obj = channels[closure_2_7];
      let obj2 = channels[closure_2_6];
      const tmp4 = obj2.some(hasNewChannel) || obj.some(hasNewChannel);
      return tmp4;
    }, items11)
  };
  _require = guild;
  let tmp = _require;
  let tmp2 = stateFromStoresArray;
  let obj2 = require("get initialized");
  let items = [ChannelStore];
  obj2.useStateFromStores(items, f95097);
  const items1 = [MessageStore];
  const obj3 = require("get initialized");
  stateFromStoresArray = obj3.useStateFromStoresArray(items1, () => {
    let toArrayResult;
    if (null != closure_1) {
      const messages = MessageStore.getMessages(tmp.id);
      toArrayResult = messages.toArray();
    } else {
      toArrayResult = [];
    }
    return toArrayResult;
  });
  items2 = [GuildMemberCountStore];
  items3 = [guild, stateFromStoresArray];
  obj4 = require("get initialized");
  _require = guild;
  const items4 = [ChannelStore];
  const obj5 = require("get initialized");
  const stateFromStores = obj5.useStateFromStores(items4, () => {
    mutableBasicGuildChannelsForGuild = null;
    if (null != closure_0) {
      mutableBasicGuildChannelsForGuild = mutableBasicGuildChannelsForGuild.getMutableBasicGuildChannelsForGuild(tmp.id);
    }
    return mutableBasicGuildChannelsForGuild;
  });
  const items5 = [stateFromStores];
  _require = react.useMemo(() => {
    let items;
    if (null == stateFromStores) {
      items = [];
    } else {
      const obj = stateFromStores(stateFromStoresArray[13]);
      items = obj.values(tmp);
    }
    return items;
  }, items5);
  const items6 = [AuthenticationStore];
  const obj6 = require("get initialized");
  let closure_1 = obj6.useStateFromStores(items6, f95102);
  items7 = [MessageStore];
  obj7 = require("get initialized");
  _require = guild;
  const items8 = [LayerStore];
  const obj8 = require("get initialized");
  stateFromStores1 = obj8.useStateFromStores(items8, f95100);
  const items9 = [GuildStore];
  const obj9 = require("get initialized");
  const stateFromStores2 = obj9.useStateFromStores(items9, f95101);
  icon = undefined;
  if (stateFromStores2 != null) {
    icon = stateFromStores2.icon;
  }
  _require = guild;
  items10 = [GuildChannelStore];
  items11 = [guild];
  tmpResult = tmp(tmp2[10]);
  return obj;
};
