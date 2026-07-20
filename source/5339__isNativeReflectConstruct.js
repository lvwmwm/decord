// Module ID: 5339
// Function ID: 45558
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 5339 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function _createForOfIteratorHelperLoose(@@iterator) {
  let importDefault = Symbol_iterator;
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
      importDefault = tmp;
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
function setIndex(arg0, index) {
  arg0.index = index;
}
function rebuildGuild(arg0) {
  function updateChannel(channel) {
    channel = channel.channel;
    let str = "null";
    if (null != channel.parent_id) {
      str = channel.parent_id;
    }
    let _null = obj[str];
    if (null == _null) {
      _null = obj.null;
    }
    _null.push({ channel, index: -1 });
  }
  const channels = channels.getChannels(arg0);
  const obj = { _categories: [], null: [] };
  const importDefault = obj;
  const item = channels[closure_14.GUILD_CATEGORY].forEach((channel) => {
    channel = channel.channel;
    const _categories = obj._categories;
    _categories.push({ channel, index: -1 });
    obj[channel.id] = [];
  });
  const item1 = channels[closure_10].forEach(updateChannel);
  const item2 = channels[closure_11].forEach(updateChannel);
  const item3 = importDefault(dependencyMap[11])(obj._categories, obj).forEach(setIndex);
  closure_17[arg0] = obj;
  return obj;
}
function handleConnectionOpen() {
  let closure_17 = {};
  if (null != closure_16) {
    rebuildGuild(closure_16);
  }
}
function handleGuildUpdates(guild) {
  const id = guild.guild.id;
  closure_17[id] = undefined;
  if (closure_16 === id) {
    rebuildGuild(id);
  }
}
function handleChannelUpdate(channel) {
  const guild_id = channel.channel.guild_id;
  if (null == guild_id) {
    return false;
  } else {
    closure_17[guild_id] = undefined;
    if (closure_16 === guild_id) {
      rebuildGuild(guild_id);
    }
  }
}
function handleGuildRoleUpdate(guildId) {
  guildId = guildId.guildId;
  closure_17[guildId] = undefined;
  if (guildId === closure_16) {
    rebuildGuild(guildId);
  }
}
function updateSelectedVoiceChannel(getGuildId) {
  let closure_18 = arg1;
  if (null != getGuildId) {
    if (null != getGuildId.getGuildId()) {
      const guildId = getGuildId.getGuildId();
      let flag = null != guildId;
      if (flag) {
        closure_17[guildId] = undefined;
        flag = true;
        if (guildId === closure_16) {
          rebuildGuild(guildId);
          flag = true;
        }
      }
      return flag;
    }
  }
  return false;
}
function handleFavoritesUpdate() {
  rebuildGuild(closure_15);
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = importDefault(dependencyMap[4]);
let closure_7 = importDefault(dependencyMap[5]);
let closure_8 = importDefault(dependencyMap[6]);
let closure_9 = importDefault(dependencyMap[7]);
({ GUILD_SELECTABLE_CHANNELS_KEY: closure_10, GUILD_VOCAL_CHANNELS_KEY: closure_11 } = arg1(dependencyMap[8]));
let closure_12 = importDefault(dependencyMap[8]);
let closure_13 = importDefault(dependencyMap[9]);
const tmp2 = arg1(dependencyMap[8]);
({ ChannelTypes: closure_14, FAVORITES: closure_15 } = arg1(dependencyMap[10]));
let closure_16 = null;
let closure_17 = {};
let closure_18 = null;
let closure_19 = { _categories: [], null: [] };
let tmp4 = (Store) => {
  class GuildCategoryStore {
    constructor() {
      self = this;
      tmp = closure_2(this, GuildCategoryStore);
      obj = closure_5(GuildCategoryStore);
      tmp2 = closure_4;
      if (closure_20()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = closure_5;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, closure_5(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  const importDefault = GuildCategoryStore;
  callback2(GuildCategoryStore, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(closure_12, closure_13, closure_8, closure_9, closure_7);
      const items = [closure_7];
      this.syncWith(items, closure_26);
    }
  };
  const items = [obj, ];
  obj = {
    key: "getCategories",
    value(arg0) {
      if (null != arg0) {
        let tmp3 = closure_17[arg0];
        if (null == tmp3) {
          tmp3 = callback4(arg0);
        }
        let tmp = tmp3;
      } else {
        tmp = closure_19;
      }
      return tmp;
    }
  };
  items[1] = obj;
  return callback(GuildCategoryStore, items);
}(importDefault(dependencyMap[12]).Store);
tmp4.displayName = "GuildCategoryStore";
tmp4 = new tmp4(importDefault(dependencyMap[13]), {
  CHANNEL_SELECT: function handleChannelSelect(guildId) {
    guildId = guildId.guildId;
    let tmp = null;
    if (null != guildId) {
      tmp = guildId;
    }
    let closure_16 = tmp;
    let tmp2 = null != guildId;
    if (tmp2) {
      if (null == closure_17[guildId]) {
        rebuildGuild(guildId);
      }
      tmp2 = tmp4;
    }
    return tmp2;
  },
  CONNECTION_OPEN: handleConnectionOpen,
  OVERLAY_INITIALIZE: handleConnectionOpen,
  CACHE_LOADED_LAZY: handleConnectionOpen,
  GUILD_CREATE: handleGuildUpdates,
  GUILD_UPDATE: handleGuildUpdates,
  GUILD_DELETE: function handleGuildDelete(arg0) {
    delete r0[r1];
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
          let tmp2 = closure_17;
          closure_17[guild_id] = undefined;
          let tmp3 = closure_16;
          flag = true;
          if (closure_16 === guild_id) {
            let tmp4 = closure_24;
            let tmp5 = closure_24(guild_id);
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
  GUILD_MEMBER_UPDATE: function handleGuildMemberUpdate(guildId) {
    guildId = guildId.guildId;
    if (id.getId() !== guildId.user.id) {
      return false;
    } else {
      closure_17[guildId] = undefined;
      if (guildId === closure_16) {
        rebuildGuild(guildId);
      }
    }
  },
  CURRENT_USER_UPDATE: function handleCurrentUserUpdate() {
    if (null == closure_16) {
      return false;
    } else {
      rebuildGuild(closure_16);
    }
  },
  GUILD_ROLE_CREATE: handleGuildRoleUpdate,
  GUILD_ROLE_UPDATE: handleGuildRoleUpdate,
  GUILD_ROLE_DELETE: handleGuildRoleUpdate,
  IMPERSONATE_UPDATE: handleGuildRoleUpdate,
  IMPERSONATE_STOP: handleGuildRoleUpdate,
  VOICE_CHANNEL_SELECT: function handleVoiceChannelSelect(channelId) {
    channelId = channelId.channelId;
    if (null == channelId) {
      if (null != closure_18) {
        let tmp2 = updateSelectedVoiceChannel(store.getChannel(closure_18), null);
      }
      return tmp2;
    }
    tmp2 = updateSelectedVoiceChannel(store.getChannel(channelId), channelId);
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
const obj = {
  CHANNEL_SELECT: function handleChannelSelect(guildId) {
    guildId = guildId.guildId;
    let tmp = null;
    if (null != guildId) {
      tmp = guildId;
    }
    let closure_16 = tmp;
    let tmp2 = null != guildId;
    if (tmp2) {
      if (null == closure_17[guildId]) {
        rebuildGuild(guildId);
      }
      tmp2 = tmp4;
    }
    return tmp2;
  },
  CONNECTION_OPEN: handleConnectionOpen,
  OVERLAY_INITIALIZE: handleConnectionOpen,
  CACHE_LOADED_LAZY: handleConnectionOpen,
  GUILD_CREATE: handleGuildUpdates,
  GUILD_UPDATE: handleGuildUpdates,
  GUILD_DELETE: function handleGuildDelete(arg0) {
    delete r0[r1];
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
          let tmp2 = closure_17;
          closure_17[guild_id] = undefined;
          let tmp3 = closure_16;
          flag = true;
          if (closure_16 === guild_id) {
            let tmp4 = closure_24;
            let tmp5 = closure_24(guild_id);
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
  GUILD_MEMBER_UPDATE: function handleGuildMemberUpdate(guildId) {
    guildId = guildId.guildId;
    if (id.getId() !== guildId.user.id) {
      return false;
    } else {
      closure_17[guildId] = undefined;
      if (guildId === closure_16) {
        rebuildGuild(guildId);
      }
    }
  },
  CURRENT_USER_UPDATE: function handleCurrentUserUpdate() {
    if (null == closure_16) {
      return false;
    } else {
      rebuildGuild(closure_16);
    }
  },
  GUILD_ROLE_CREATE: handleGuildRoleUpdate,
  GUILD_ROLE_UPDATE: handleGuildRoleUpdate,
  GUILD_ROLE_DELETE: handleGuildRoleUpdate,
  IMPERSONATE_UPDATE: handleGuildRoleUpdate,
  IMPERSONATE_STOP: handleGuildRoleUpdate,
  VOICE_CHANNEL_SELECT: function handleVoiceChannelSelect(channelId) {
    channelId = channelId.channelId;
    if (null == channelId) {
      if (null != closure_18) {
        let tmp2 = updateSelectedVoiceChannel(store.getChannel(closure_18), null);
      }
      return tmp2;
    }
    tmp2 = updateSelectedVoiceChannel(store.getChannel(channelId), channelId);
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
};
const tmp3 = arg1(dependencyMap[10]);
const result = arg1(dependencyMap[14]).fileFinishedImporting("stores/GuildCategoryStore.tsx");

export default tmp4;
