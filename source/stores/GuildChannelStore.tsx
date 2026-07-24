// Module ID: 1907
// Function ID: 21421
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 1908, 1351, 3757, 1352, 1194, 1348, 1917, 1838, 3758, 3767, 1849, 653, 22, 4320, 483, 3763, 566, 686, 2]

// Module 1907 (_isNativeReflectConstruct)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import createFavoritesChannelRecord from "createFavoritesChannelRecord";
import closure_6 from "_isNativeReflectConstruct";
import apply from "apply";
import computeDefaultGroupDmNameFromUserIds from "computeDefaultGroupDmNameFromUserIds";
import closure_9 from "_isNativeReflectConstruct";
import closure_10 from "_isNativeReflectConstruct";
import { createFavoritesChannelRecord as closure_11 } from "createFavoritesChannelRecord";
import _callSuper from "_callSuper";
import closure_15 from "_isNativeReflectConstruct";
import closure_16 from "_isNativeReflectConstruct";
import closure_17 from "_isNativeReflectConstruct";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import closure_19 from "_isNativeReflectConstruct";
import closure_20 from "_isNativeReflectConstruct";
import closure_21 from "_isNativeReflectConstruct";
import ME from "ME";

let ChannelTypes;
let closure_12;
let closure_13;
let closure_14;
let closure_22;
let closure_24;
let closure_25;
const require = arg1;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function _createForOfIteratorHelperLoose(iterable) {
  let closure_0 = iterable;
  iterable = "undefined" !== typeof Symbol;
  if (iterable) {
    const _Symbol = Symbol;
    iterable = iterable[Symbol.iterator];
  }
  if (!iterable) {
    iterable = iterable[Symbol.iterator];
  }
  if (iterable) {
    const iter = iterable.call(iterable);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = iterable;
    if (!Array.isArray(iterable)) {
      let tmp2;
      if (iterable) {
        if ("string" === typeof iterable) {
          tmp2 = _arrayLikeToArray(iterable, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(iterable).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = iterable.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(iterable, undefined);
              } else {
                let obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(iterable);
          const callResult = toString.call(iterable);
          tmp3 = "Object" === substr && iterable.constructor;
        }
      }
      tmp = tmp2;
      if (!tmp2) {
        const _TypeError = TypeError;
        const typeError = new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        throw typeError;
      }
    }
    if (tmp) {
      closure_0 = tmp;
    }
    let c1 = 0;
    return () => {
      if (closure_1 >= length.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = length[+closure_1];
      }
      return obj;
    };
  }
}
function _arrayLikeToArray(arg0, arg1) {
  let length;
  if (tmp) {
    length = arg0.length;
  }
  const ArrayResult = Array(length);
  for (let num = 0; num < length; num = num + 1) {
    ArrayResult[num] = arg0[num];
  }
  return ArrayResult;
}
function createGuildChannelList(NULL_STRING_GUILD_ID) {
  const items = [_callSuper];
  return { id: NULL_STRING_GUILD_ID, [closure_26]: [], [closure_27]: [], [closure_23.GUILD_CATEGORY]: items, ["count"]: 0 };
}
function comparator(comparator, comparator2) {
  return comparator.comparator - comparator2.comparator;
}
function getChannelsForGuild(id) {
  if (id === closure_22) {
    let obj = {};
    favoriteChannels = favoriteChannels.getFavoriteChannels();
    for (const key10017 in favoriteChannels) {
      let tmp11 = key10017;
      let tmp12 = store;
      let channel = store.getChannel(key10017);
      if (null == channel) {
        continue;
      } else {
        let tmp8 = callback3;
        let tmp9 = callback3(favoriteChannels, favoriteChannels[key10017], channel);
        obj = { channel: tmp9, comparator: tmp9.position };
        obj[key10017] = obj;
        continue;
      }
      continue;
    }
    return obj;
  } else {
    obj = {};
    const mutableGuildChannelsForGuild = store.getMutableGuildChannelsForGuild(id);
    for (const key10008 in mutableGuildChannelsForGuild) {
      let tmp10 = key10008;
      let obj1 = { channel: mutableGuildChannelsForGuild[key10008], comparator: mutableGuildChannelsForGuild[key10008].position };
      obj[key10008] = obj1;
      continue;
    }
    return obj;
  }
}
function rebuildChannels(id) {
  let closure_0 = id;
  id = id.id;
  const tmp = getChannelsForGuild(id);
  const item = id(22).forEach(tmp, (channel) => {
    channel = channel.channel;
    count.count = count.count + 1;
    let type = channel.type;
    if (outer1_12(type)) {
      type = outer1_26;
    } else if (outer1_14(type)) {
      type = outer1_27;
    }
    if (channel.type === outer1_23.GUILD_DIRECTORY) {
      if (null == outer1_33[id]) {
        outer1_33[id] = [];
      }
      let arr = outer1_33[id];
      arr = arr.push(channel);
    }
    if (null != count[type]) {
      arr = count[type].push(channel);
      const arr2 = count[type];
    }
  });
  return id;
}
function resetAllGuildChannels() {
  let closure_29 = {};
  let closure_33 = {};
  let closure_30 = {};
  let closure_31 = {};
  if (null != c28) {
    rebuildGuildChannels(c28);
  }
}
function rebuildGuildChannels(guildId) {
  const tmp = createGuildChannelList(guildId);
  closure_29[guildId] = tmp;
  closure_33[guildId] = [];
  rebuildChannels(tmp);
  const sorted = tmp[SELECTABLE].sort(comparator);
  const sorted1 = tmp[VOCAL].sort(comparator);
  const sorted2 = tmp[ChannelTypes.GUILD_CATEGORY].sort(comparator);
  (function rebuildDisambiguations(id) {
    let obj = {};
    outer1_30[id.id] = obj;
    let closure_1 = {};
    const item = id[outer1_26].forEach((channel) => {
      channel = channel.channel;
      let obj = outer2_0(outer2_3[18]);
      const channelName = obj.computeChannelName(channel, outer2_21, outer2_20);
      let tmp2 = null;
      if (hasOwnProperty.call(table, channelName)) {
        tmp2 = table[channelName];
      }
      if (null == tmp2) {
        table[channelName] = 1;
        let sum = channelName;
      } else {
        table[channelName] = tmp2 + 1;
        const _HermesInternal = HermesInternal;
        sum = channelName + "~" + tmp2;
      }
      obj = { id: channel.id, name: sum };
      obj[channel.id] = obj;
    });
  })(tmp);
  (function rebuildGuildElevatedPermissions(guildId) {
    const currentUser = outer1_21.getCurrentUser();
    const guild = outer1_18.getGuild(guildId);
    if (null == guild) {
      let tmp7 = outer1_29[guildId];
      if (null == tmp7) {
        tmp7 = outer1_45(guildId);
      }
      const tmp12 = outer1_39(tmp7[outer1_26]);
      let iter = tmp12();
      if (iter.done) {
        const tmp15 = outer1_39(tmp7[outer1_27]);
        let iter3 = tmp15();
        let flag = false;
        if (!iter3.done) {
          flag = true;
          while (!outer1_46(currentUser, iter3.value.channel)) {
            let iter4 = tmp15();
            iter3 = iter4;
            flag = false;
            if (iter4.done) {
              break;
            }
          }
        }
      } else {
        flag = true;
        while (!outer1_46(currentUser, iter.value.channel)) {
          let iter2 = tmp12();
          iter = iter2;
          break;
        }
      }
    } else {
      flag = true;
    }
    if (flag) {
      tmp17[guildId] = true;
    } else {
      delete tmp[tmp2];
    }
  })(guildId);
  return tmp;
}
function handleGuildUpdates(guild) {
  const id = guild.guild.id;
  if (null == id) {
    return false;
  } else {
    closure_29[id] = undefined;
    if (c28 === id) {
      rebuildGuildChannels(id);
    }
  }
}
function handleChannelUpdate(channel) {
  const guild_id = channel.channel.guild_id;
  if (null == guild_id) {
    return false;
  } else {
    closure_29[guild_id] = undefined;
    if (guild_id === c28) {
      rebuildGuildChannels(guild_id);
    }
  }
}
function handleGuildRoleUpdate(guildId) {
  guildId = guildId.guildId;
  closure_29[guildId] = undefined;
  if (guildId === c28) {
    rebuildGuildChannels(guildId);
  }
}
function hasElevatedPermissions(id) {
  let obj = importAll(483);
  obj = { user: id, context: arg1, checkElevated: false };
  return obj.hasAny(importAll(3763).computePermissions(obj), closure_25);
}
function updateSelectedVoiceChannel(getGuildId) {
  let closure_32 = arg1;
  let guildId;
  if (null != getGuildId) {
    guildId = getGuildId.getGuildId();
  }
  let tmp2 = null;
  if (null != guildId) {
    tmp2 = guildId;
  }
  let flag = null != tmp2;
  if (flag) {
    closure_29[tmp2] = undefined;
    flag = true;
    if (tmp2 === c28) {
      rebuildGuildChannels(tmp2);
      flag = true;
    }
  }
  return flag;
}
function handleFavoritesUpdate() {
  rebuildGuildChannels(closure_22);
}
({ isGuildSelectableChannelType: closure_12, GUILD_NON_CATEGORY_CHANNEL_TYPES: closure_13, isGuildVocalChannelType: closure_14 } = _callSuper);
({ FAVORITES: closure_22, ChannelTypes } = ME);
({ Permissions: closure_24, ElevatedPermissions: closure_25 } = ME);
const SELECTABLE = "SELECTABLE";
const VOCAL = "VOCAL";
let c28 = null;
let closure_29 = {};
let closure_30 = {};
let closure_31 = {};
let c32 = null;
let closure_33 = {};
_callSuper = { comparator: -1, channel: _callSuper.createChannelRecord(_callSuper) };
_callSuper = { id: ME.NULL_STRING_CHANNEL_ID, type: ChannelTypes.GUILD_CATEGORY, name: "Uncategorized" };
let closure_35 = createGuildChannelList(ME.NULL_STRING_GUILD_ID);
let closure_36 = [];
let closure_37 = {};
let tmp3 = ((Store) => {
  class GuildChannelStore {
    constructor() {
      self = this;
      tmp = outer1_4(this, GuildChannelStore);
      obj = outer1_7(GuildChannelStore);
      tmp2 = outer1_6;
      if (outer1_38()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = outer1_7;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, outer1_7(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  callback2(GuildChannelStore, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(outer1_15, outer1_16, outer1_10, outer1_9, outer1_17, outer1_18, outer1_19, outer1_21);
      const items = [outer1_10];
      this.syncWith(items, outer1_48);
    }
  };
  let items = [obj, , , , , , , , , , , , , , , ];
  obj = {
    key: "getAllGuilds",
    value() {
      return outer1_29;
    }
  };
  items[1] = obj;
  obj = {
    key: "getChannels",
    value(arg0) {
      if (null != arg0) {
        let tmp3 = outer1_29[arg0];
        if (null == tmp3) {
          tmp3 = outer1_45(arg0);
        }
        let tmp = tmp3;
      } else {
        tmp = outer1_35;
      }
      return tmp;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getFirstChannelOfType",
    value(arg0, arg1, arg2) {
      const found = this.getChannels(arg0)[arg2].find(arg1);
      let channel = null;
      if (null != found) {
        channel = found.channel;
      }
      return channel;
    }
  };
  items[4] = {
    key: "getFirstChannel",
    value(arg0, id) {
      let flag = arg2;
      const self = this;
      if (arg2 === undefined) {
        flag = false;
      }
      let firstChannelOfType = self.getFirstChannelOfType(arg0, id, outer1_26);
      if (null == firstChannelOfType) {
        let firstChannelOfType1 = null;
        if (flag) {
          firstChannelOfType1 = self.getFirstChannelOfType(arg0, id, outer1_27);
        }
        firstChannelOfType = firstChannelOfType1;
      }
      return firstChannelOfType;
    }
  };
  items[5] = {
    key: "getDefaultChannel",
    value(arg0) {
      let flag = arg1;
      let VIEW_CHANNEL = arg2;
      const self = this;
      if (arg1 === undefined) {
        flag = false;
      }
      if (VIEW_CHANNEL === undefined) {
        VIEW_CHANNEL = outer1_24.VIEW_CHANNEL;
      }
      return self.getFirstChannel(arg0, (channel) => outer2_19.can(VIEW_CHANNEL, channel.channel), flag);
    }
  };
  items[6] = {
    key: "getSFWDefaultChannel",
    value(arg0) {
      let flag = arg1;
      let VIEW_CHANNEL = arg2;
      const self = this;
      if (arg1 === undefined) {
        flag = false;
      }
      if (VIEW_CHANNEL === undefined) {
        VIEW_CHANNEL = outer1_24.VIEW_CHANNEL;
      }
      return self.getFirstChannel(arg0, (channel) => outer2_19.can(VIEW_CHANNEL, channel.channel) && !channel.channel.nsfw, flag);
    }
  };
  items[7] = {
    key: "getSelectableChannelIds",
    value(arg0) {
      return this.getChannels(arg0)[outer1_26].map((channel) => channel.channel.id);
    }
  };
  items[8] = {
    key: "getSelectableChannels",
    value(arg0) {
      return this.getChannels(arg0)[outer1_26];
    }
  };
  items[9] = {
    key: "getVocalChannelIds",
    value(arg0) {
      return this.getChannels(arg0)[outer1_27].map((channel) => channel.channel.id);
    }
  };
  items[10] = {
    key: "getDirectoryChannelIds",
    value(arg0) {
      let mapped;
      if (null != outer1_33[arg0]) {
        mapped = arr.map((channel) => channel.channel.id);
      }
      if (null == mapped) {
        mapped = outer1_36;
      }
      return mapped;
    }
  };
  items[11] = {
    key: "hasSelectableChannel",
    value(arg0, arg1) {
      const selectableChannelIds = this.getSelectableChannelIds(arg0);
      return selectableChannelIds.includes(arg1);
    }
  };
  items[12] = {
    key: "hasElevatedPermissions",
    value(arg0) {
      return outer1_31[arg0] || false;
    }
  };
  items[13] = {
    key: "hasChannels",
    value(arg0) {
      return this.getChannels(arg0).count > 0;
    }
  };
  items[14] = {
    key: "hasCategories",
    value(arg0) {
      return this.getChannels(arg0)[outer1_23.GUILD_CATEGORY].length > 1;
    }
  };
  items[15] = {
    key: "getTextChannelNameDisambiguations",
    value(arg0) {
      if (null == arg0) {
        const tmp2 = outer1_37;
      }
      return tmp2;
    }
  };
  return callback(GuildChannelStore, items);
})(require("initialize").Store);
tmp3.displayName = "GuildChannelStore";
tmp3 = new tmp3(require("dispatcher"), {
  BACKGROUND_SYNC: resetAllGuildChannels,
  CHANNEL_SELECT: function handleChannelSelect(guildId) {
    guildId = guildId.guildId;
    let tmp = null;
    if (null != guildId) {
      tmp = guildId;
    }
    let c28 = tmp;
    let tmp2 = null != guildId;
    if (tmp2) {
      if (null == table[guildId]) {
        rebuildGuildChannels(guildId);
      }
      tmp2 = tmp4;
    }
    return tmp2;
  },
  CONNECTION_OPEN: resetAllGuildChannels,
  OVERLAY_INITIALIZE: resetAllGuildChannels,
  CACHE_LOADED_LAZY: resetAllGuildChannels,
  GUILD_CREATE: handleGuildUpdates,
  GUILD_UPDATE: handleGuildUpdates,
  GUILD_DELETE: function handleGuildDelete(arg0) {
    delete tmp3[tmp2];
    delete tmp3[tmp2];
    delete tmp3[tmp2];
    delete tmp[tmp2];
    return true;
  },
  GUILD_MEMBER_UPDATE: function handleGuildMemberUpdate(guildId) {
    guildId = guildId.guildId;
    if (id.getId() !== guildId.user.id) {
      return false;
    } else {
      closure_29[guildId] = undefined;
      if (guildId === c28) {
        rebuildGuildChannels(guildId);
      }
    }
  },
  CHANNEL_CREATE: handleChannelUpdate,
  CHANNEL_DELETE: handleChannelUpdate,
  CHANNEL_UPDATES: function handleChannelUpdates(channels) {
    let iter3;
    const tmp = _createForOfIteratorHelperLoose(channels.channels);
    const iter = tmp();
    let iter2 = iter;
    let flag = false;
    let flag2 = false;
    if (!iter.done) {
      do {
        let guild_id = iter2.value.guild_id;
        if (null != guild_id) {
          let tmp2 = closure_29;
          closure_29[guild_id] = undefined;
          let tmp3 = c28;
          flag = true;
          if (c28 === guild_id) {
            let tmp4 = rebuildGuildChannels;
            let tmp5 = rebuildGuildChannels(guild_id);
            flag = true;
          }
        }
        iter3 = tmp();
        iter2 = iter3;
        flag2 = flag;
      } while (!iter3.done);
    }
    return flag2;
  },
  GUILD_ROLE_CREATE: handleGuildRoleUpdate,
  GUILD_ROLE_UPDATE: handleGuildRoleUpdate,
  GUILD_ROLE_DELETE: handleGuildRoleUpdate,
  IMPERSONATE_UPDATE: handleGuildRoleUpdate,
  IMPERSONATE_STOP: handleGuildRoleUpdate,
  VOICE_CHANNEL_SELECT: function handleVoiceChannelSelect(channelId) {
    channelId = channelId.channelId;
    if (null == channelId) {
      if (null != c32) {
        let tmp2 = updateSelectedVoiceChannel(store.getChannel(c32), null);
      }
      return tmp2;
    }
    tmp2 = updateSelectedVoiceChannel(store.getChannel(channelId), channelId);
  },
  VOICE_CHANNEL_STATUS_UPDATE: function handleVoiceChannelStatusUpdate(id) {
    const basicChannel = store.getBasicChannel(id.id);
    if (tmp2) {
      rebuildGuildChannels(basicChannel.guild_id);
    }
  },
  VOICE_STATE_UPDATES: function handleVoiceStateUpdates(voiceStates) {
    voiceStates = voiceStates.voiceStates;
    return voiceStates.reduce((arg0, channelId) => {
      channelId = channelId.channelId;
      let tmp = arg0;
      if (outer1_15.getSessionId() === channelId.sessionId) {
        tmp = outer1_47(outer1_16.getChannel(channelId), channelId) || arg0;
        const tmp4 = outer1_47(outer1_16.getChannel(channelId), channelId) || arg0;
      }
      return tmp;
    }, false);
  }
});
let result = require("_possibleConstructorReturn").fileFinishedImporting("stores/GuildChannelStore.tsx");

export default tmp3;
export const GUILD_SELECTABLE_CHANNELS_KEY = "SELECTABLE";
export const GUILD_VOCAL_CHANNELS_KEY = "VOCAL";
