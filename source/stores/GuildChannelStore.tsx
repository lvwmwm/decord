// Module ID: 1907
// Function ID: 21419
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 1907 (_isNativeReflectConstruct)
let ChannelTypes;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function _createForOfIteratorHelperLoose(@@iterator) {
  let arg1 = Symbol_iterator;
  @@iterator = "undefined" !== typeof Symbol;
  if (Symbol_iterator) {
    const _Symbol = Symbol;
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (!Symbol_iterator) {
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (Symbol_iterator) {
    const iter = Symbol_iterator.call(Symbol_iterator);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = Symbol_iterator;
    if (!Array.isArray(Symbol_iterator)) {
      let tmp2;
      if (Symbol_iterator) {
        if ("string" === typeof Symbol_iterator) {
          tmp2 = _arrayLikeToArray(Symbol_iterator, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(Symbol_iterator).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = Symbol_iterator.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(Symbol_iterator, undefined);
              } else {
                const obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(Symbol_iterator);
          const callResult = toString.call(Symbol_iterator);
          const tmp3 = "Object" === substr && Symbol_iterator.constructor;
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
      arg1 = tmp;
    }
    let closure_1 = 0;
    return () => {
      if (closure_1 >= tmp.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = tmp[+closure_1];
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
  const obj = { id: NULL_STRING_GUILD_ID, [closure_26]: [], [closure_27]: [], [closure_23.GUILD_CATEGORY]: items, ["count"]: 0 };
  const items = [obj];
  return obj;
}
function comparator(comparator, comparator2) {
  return comparator.comparator - comparator2.comparator;
}
function getChannelsForGuild(id) {
  if (id === closure_22) {
    let obj = {};
    const favoriteChannels = favoriteChannels.getFavoriteChannels();
    for (const key10017 in favoriteChannels) {
      let tmp11 = key10017;
      let tmp12 = closure_16;
      let channel = closure_16.getChannel(key10017);
      if (null == channel) {
        continue;
      } else {
        let tmp8 = closure_11;
        let tmp9 = closure_11(favoriteChannels, favoriteChannels[key10017], channel);
        obj = { channel: tmp9, comparator: tmp9.position };
        obj[key10017] = obj;
        // continue
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
    }
    return obj;
  }
}
function rebuildChannels(id) {
  const arg1 = id;
  id = id.id;
  const importDefault = id;
  const tmp = getChannelsForGuild(id);
  const item = importDefault(dependencyMap[17]).forEach(tmp, (channel) => {
    channel = channel.channel;
    channel.count = channel.count + 1;
    let type = channel.type;
    if (callback(type)) {
      type = closure_26;
    } else if (callback2(type)) {
      type = closure_27;
    }
    if (channel.type === constants.GUILD_DIRECTORY) {
      if (null == closure_33[closure_1]) {
        closure_33[id] = [];
      }
      let arr = closure_33[closure_1];
      arr = arr.push(channel);
    }
    if (null != channel[type]) {
      arr = channel[type].push(channel);
      const arr2 = channel[type];
    }
  });
  return id;
}
function resetAllGuildChannels() {
  let closure_29 = {};
  let closure_33 = {};
  let closure_30 = {};
  let closure_31 = {};
  if (null != closure_28) {
    rebuildGuildChannels(closure_28);
  }
}
function rebuildGuildChannels(guildId) {
  const tmp = createGuildChannelList(guildId);
  closure_29[guildId] = tmp;
  closure_33[guildId] = [];
  rebuildChannels(tmp);
  const sorted = tmp[closure_26].sort(comparator);
  const sorted1 = tmp[closure_27].sort(comparator);
  const sorted2 = tmp[closure_23.GUILD_CATEGORY].sort(comparator);
  function rebuildDisambiguations(id) {
    const obj = {};
    closure_30[id.id] = obj;
    let closure_1 = {};
    const item = id[closure_26].forEach((channel) => {
      channel = channel.channel;
      let obj = obj(closure_3[18]);
      const channelName = obj.computeChannelName(channel, closure_21, closure_20);
      let tmp2 = null;
      if (hasOwnProperty.call(closure_1, channelName)) {
        tmp2 = closure_1[channelName];
      }
      if (null == tmp2) {
        closure_1[channelName] = 1;
        let sum = channelName;
      } else {
        closure_1[channelName] = tmp2 + 1;
        const _HermesInternal = HermesInternal;
        sum = channelName + "~" + tmp2;
      }
      obj = { id: channel.id, name: sum };
      obj[channel.id] = obj;
    });
  }(tmp);
  function rebuildGuildElevatedPermissions(guildId) {
    const currentUser = currentUser.getCurrentUser();
    const guild = guild.getGuild(guildId);
    if (null == guild) {
      let tmp5 = closure_29[guildId];
      if (null == tmp5) {
        tmp5 = callback2(guildId);
      }
      const tmp10 = callback(tmp5[closure_26]);
      let iter = tmp10();
      if (iter.done) {
        const tmp13 = callback(tmp5[closure_27]);
        let iter3 = tmp13();
        let flag = false;
        if (!iter3.done) {
          flag = true;
          while (!callback3(currentUser, iter3.value.channel)) {
            let iter4 = tmp13();
            iter3 = iter4;
            flag = false;
            if (iter4.done) {
              break;
            }
          }
        }
      } else {
        flag = true;
        while (!callback3(currentUser, iter.value.channel)) {
          let iter2 = tmp10();
          iter = iter2;
          break;
        }
      }
    } else {
      flag = true;
    }
    if (flag) {
      tmp15[guildId] = true;
    } else {
      delete r1[r2];
    }
  }(guildId);
  return tmp;
}
function handleGuildUpdates(guild) {
  const id = guild.guild.id;
  if (null == id) {
    return false;
  } else {
    closure_29[id] = undefined;
    if (closure_28 === id) {
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
    if (guild_id === closure_28) {
      rebuildGuildChannels(guild_id);
    }
  }
}
function handleGuildRoleUpdate(guildId) {
  guildId = guildId.guildId;
  closure_29[guildId] = undefined;
  if (guildId === closure_28) {
    rebuildGuildChannels(guildId);
  }
}
function hasElevatedPermissions(id) {
  let obj = importAll(dependencyMap[19]);
  obj = { user: id, context: arg1, checkElevated: false };
  return obj.hasAny(importAll(dependencyMap[20]).computePermissions(obj), closure_25);
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
    if (tmp2 === closure_28) {
      rebuildGuildChannels(tmp2);
      flag = true;
    }
  }
  return flag;
}
function handleFavoritesUpdate() {
  rebuildGuildChannels(closure_22);
}
let closure_4 = importDefault(dependencyMap[0]);
let closure_5 = importDefault(dependencyMap[1]);
let closure_6 = importDefault(dependencyMap[2]);
let closure_7 = importDefault(dependencyMap[3]);
let closure_8 = importDefault(dependencyMap[4]);
let closure_9 = importDefault(dependencyMap[5]);
let closure_10 = importDefault(dependencyMap[6]);
let closure_11 = arg1(dependencyMap[7]).createFavoritesChannelRecord;
let obj = arg1(dependencyMap[8]);
({ isGuildSelectableChannelType: closure_12, GUILD_NON_CATEGORY_CHANNEL_TYPES: closure_13, isGuildVocalChannelType: closure_14 } = obj);
let closure_15 = importDefault(dependencyMap[9]);
let closure_16 = importDefault(dependencyMap[10]);
let closure_17 = importDefault(dependencyMap[11]);
let closure_18 = importDefault(dependencyMap[12]);
let closure_19 = importDefault(dependencyMap[13]);
let closure_20 = importDefault(dependencyMap[14]);
let closure_21 = importDefault(dependencyMap[15]);
const tmp2 = arg1(dependencyMap[16]);
({ FAVORITES: closure_22, ChannelTypes } = tmp2);
({ Permissions: closure_24, ElevatedPermissions: closure_25 } = tmp2);
let closure_26 = "SELECTABLE";
let closure_27 = "VOCAL";
let closure_28 = null;
let closure_29 = {};
let closure_30 = {};
let closure_31 = {};
let closure_32 = null;
let closure_33 = {};
obj = { comparator: -1, channel: obj.createChannelRecord(obj) };
obj = { id: tmp2.NULL_STRING_CHANNEL_ID, type: ChannelTypes.GUILD_CATEGORY, name: "Uncategorized" };
let closure_35 = createGuildChannelList(tmp2.NULL_STRING_GUILD_ID);
let closure_36 = [];
let closure_37 = {};
let tmp3 = (Store) => {
  class GuildChannelStore {
    constructor() {
      self = this;
      tmp = closure_4(this, GuildChannelStore);
      obj = closure_7(GuildChannelStore);
      tmp2 = closure_6;
      if (closure_38()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = closure_7;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, closure_7(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  const arg1 = GuildChannelStore;
  callback2(GuildChannelStore, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(closure_15, closure_16, closure_10, closure_9, closure_17, closure_18, closure_19, closure_21);
      const items = [closure_10];
      this.syncWith(items, closure_48);
    }
  };
  const items = [obj, , , , , , , , , , , , , , , ];
  obj = {
    key: "getAllGuilds",
    value() {
      return closure_29;
    }
  };
  items[1] = obj;
  obj = {
    key: "getChannels",
    value(arg0) {
      if (null != arg0) {
        let tmp3 = closure_29[arg0];
        if (null == tmp3) {
          tmp3 = callback4(arg0);
        }
        let tmp = tmp3;
      } else {
        tmp = closure_35;
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
      let firstChannelOfType = self.getFirstChannelOfType(arg0, id, closure_26);
      if (null == firstChannelOfType) {
        let firstChannelOfType1 = null;
        if (flag) {
          firstChannelOfType1 = self.getFirstChannelOfType(arg0, id, closure_27);
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
        VIEW_CHANNEL = constants.VIEW_CHANNEL;
      }
      const GuildChannelStore = VIEW_CHANNEL;
      return self.getFirstChannel(arg0, (channel) => closure_19.can(VIEW_CHANNEL, channel.channel), flag);
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
        VIEW_CHANNEL = constants.VIEW_CHANNEL;
      }
      const GuildChannelStore = VIEW_CHANNEL;
      return self.getFirstChannel(arg0, (channel) => closure_19.can(VIEW_CHANNEL, channel.channel) && !channel.channel.nsfw, flag);
    }
  };
  items[7] = {
    key: "getSelectableChannelIds",
    value(arg0) {
      return this.getChannels(arg0)[closure_26].map((channel) => channel.channel.id);
    }
  };
  items[8] = {
    key: "getSelectableChannels",
    value(arg0) {
      return this.getChannels(arg0)[closure_26];
    }
  };
  items[9] = {
    key: "getVocalChannelIds",
    value(arg0) {
      return this.getChannels(arg0)[closure_27].map((channel) => channel.channel.id);
    }
  };
  items[10] = {
    key: "getDirectoryChannelIds",
    value(arg0) {
      let mapped;
      if (null != closure_33[arg0]) {
        mapped = arr.map((channel) => channel.channel.id);
      }
      if (null == mapped) {
        mapped = closure_36;
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
      return closure_31[arg0] || false;
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
      return this.getChannels(arg0)[closure_23.GUILD_CATEGORY].length > 1;
    }
  };
  items[15] = {
    key: "getTextChannelNameDisambiguations",
    value(arg0) {
      if (null == arg0) {
        const tmp2 = closure_37;
      }
      return tmp2;
    }
  };
  return callback(GuildChannelStore, items);
}(importDefault(dependencyMap[21]).Store);
tmp3.displayName = "GuildChannelStore";
tmp3 = new tmp3(importDefault(dependencyMap[22]), {
  BACKGROUND_SYNC: resetAllGuildChannels,
  CHANNEL_SELECT: function handleChannelSelect(guildId) {
    guildId = guildId.guildId;
    let tmp = null;
    if (null != guildId) {
      tmp = guildId;
    }
    let closure_28 = tmp;
    let tmp2 = null != guildId;
    if (tmp2) {
      if (null == closure_29[guildId]) {
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
    delete r2[r1];
    delete r2[r1];
    delete r2[r1];
    delete r0[r1];
    return true;
  },
  GUILD_MEMBER_UPDATE: function handleGuildMemberUpdate(guildId) {
    guildId = guildId.guildId;
    if (id.getId() !== guildId.user.id) {
      return false;
    } else {
      closure_29[guildId] = undefined;
      if (guildId === closure_28) {
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
          let tmp3 = closure_28;
          flag = true;
          if (closure_28 === guild_id) {
            let tmp4 = closure_45;
            let tmp5 = closure_45(guild_id);
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
      if (null != closure_32) {
        let tmp2 = updateSelectedVoiceChannel(store.getChannel(closure_32), null);
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
      if (sessionId.getSessionId() === channelId.sessionId) {
        tmp = callback(channel.getChannel(channelId), channelId) || arg0;
        const tmp4 = callback(channel.getChannel(channelId), channelId) || arg0;
      }
      return tmp;
    }, false);
  }
});
const result = arg1(dependencyMap[23]).fileFinishedImporting("stores/GuildChannelStore.tsx");

export default tmp3;
export const GUILD_SELECTABLE_CHANNELS_KEY = "SELECTABLE";
export const GUILD_VOCAL_CHANNELS_KEY = "VOCAL";
