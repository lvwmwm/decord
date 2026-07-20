// Module ID: 1906
// Function ID: 21369
// Name: _isNativeReflectConstruct
// Dependencies: []
// Exports: findFirstVoiceChannelId, handleConnectionOpen

// Module 1906 (_isNativeReflectConstruct)
let Routes;
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
function stringifyGuildId(guildId) {
  return String(guildId);
}
function saveStorage() {
  const Storage = arg1(dependencyMap[15]).Storage;
  const obj = { selectedChannelId: closure_24, selectedVoiceChannelId: closure_26, lastChannelFollowingDestination: closure_25, lastConnectedTime: closure_27, selectedChannelIds: closure_30, mostRecentSelectedTextChannelIds: closure_32 };
  const values = importDefault(dependencyMap[16])(closure_30).values();
  const obj2 = importDefault(dependencyMap[16])(closure_30);
  const combined = values.concat(importDefault(dependencyMap[16]).values(closure_32));
  const found = combined.filter(arg1(dependencyMap[17]).isNotNullish);
  const obj4 = importDefault(dependencyMap[16]);
  const uniqResult = found.uniq();
  obj.knownThreadIds = found.uniq().filter((arg0) => {
    const basicChannel = basicChannel.getBasicChannel(arg0);
    let hasItem = set2.has(arg0);
    if (!hasItem) {
      let hasItem1 = null != basicChannel;
      if (hasItem1) {
        hasItem1 = set.has(basicChannel.type);
      }
      hasItem = hasItem1;
    }
    return hasItem;
  }).value();
  const result = Storage.set(closure_29, obj);
}
function findDefaultChannelId(guild_id) {
  if (null != guild_id) {
    const defaultChannel = defaultChannel.getDefaultChannel(guild_id);
    if (null != defaultChannel) {
      return defaultChannel.id;
    }
  }
}
function setMostRecentTextChannel(guildId, channelId) {
  if (null != guildId) {
    if (null != channelId) {
      if (closure_32[guildId] === channelId) {
        return false;
      } else {
        const channel = store.getChannel(channelId);
        let tmp3 = null != channel;
        if (tmp3) {
          tmp3 = callback3(channel.type);
        }
        guildId = undefined;
        if (null != channel) {
          guildId = channel.getGuildId();
        }
        let flag = !tmp6;
        if (!(!tmp3 || guildId !== guildId)) {
          closure_32[guildId] = channelId;
          flag = true;
        }
        return flag;
      }
    }
  }
  return false;
}
function cleanupPreviouslySelected() {
  let closure_0 = false;
  const guildsArray = store2.getGuildsArray();
  importDefault(dependencyMap[16]).each(closure_30, (arg0, arg1) => {
    let tmp = null != arg0;
    if (tmp) {
      let hasChannelResult = closure_12.hasChannel(arg0);
      if (!hasChannelResult) {
        hasChannelResult = arg0 === closure_24;
      }
      if (!hasChannelResult) {
        hasChannelResult = set.has(arg0);
      }
      if (!hasChannelResult) {
        hasChannelResult = callback(arg0);
      }
      tmp = hasChannelResult;
    }
    if (!tmp) {
      delete r2[r1];
      delete r0[r1];
      let closure_0 = true;
    }
  });
  const obj = importDefault(dependencyMap[16]);
  importDefault(dependencyMap[16]).each(closure_32, (arg0, arg1) => {
    let tmp = null != arg0;
    if (tmp) {
      let hasChannelResult = closure_12.hasChannel(arg0);
      if (!hasChannelResult) {
        hasChannelResult = set.has(arg0);
      }
      tmp = hasChannelResult;
    }
    if (!tmp) {
      delete r1[r0];
      let closure_0 = true;
    }
  });
  const item = guildsArray.forEach((id) => {
    if (null == closure_32[id.id]) {
      callback2(id.id, tmp);
    }
  });
  let tmp4 = null != closure_27;
  if (tmp4) {
    const _Date = Date;
    tmp4 = Date.now() - closure_27 >= 300000;
  }
  if (tmp4) {
    let closure_26 = null;
    closure_0 = true;
  }
  return closure_0;
}
function handleConnectionOpen(sessionId) {
  sessionId = sessionId.sessionId;
  if (null != closure_26) {
    const channel = store.getChannel(closure_26);
    let tmp3 = null != channel;
    if (tmp3) {
      let isPrivateResult = channel.isPrivate();
      if (!isPrivateResult) {
        isPrivateResult = closure_16.can(importAll(dependencyMap[18]).combine(constants2.VIEW_CHANNEL, constants2.CONNECT), channel);
        const obj2 = importAll(dependencyMap[18]);
      }
      tmp3 = isPrivateResult;
    }
    if (!tmp3) {
      closure_26 = null;
    }
  }
  if (cleanupPreviouslySelected()) {
    saveStorage();
  }
}
function navigateAwayFromChannel(id, guild_id, parent_id) {
  set.delete(id);
  let tmp2 = guild_id;
  if (null == guild_id) {
    const guildId = store3.getGuildId();
    tmp2 = guild_id;
    if (closure_30[closure_37(undefined, guildId)] === id) {
      tmp2 = guildId;
    }
  }
  const guild = store2.getGuild(tmp2);
  let flag = false;
  if (closure_26 === id) {
    closure_26 = null;
    flag = true;
  }
  if (flag) {
    saveStorage();
  }
}
function handleChannelDelete(arg0) {
  let channel;
  let type;
  ({ type, channel } = arg0);
  navigateAwayFromChannel(channel.id, channel.guild_id, channel.parent_id);
}
let closure_4 = importDefault(dependencyMap[0]);
let closure_5 = importDefault(dependencyMap[1]);
let closure_6 = importDefault(dependencyMap[2]);
let closure_7 = importDefault(dependencyMap[3]);
let closure_8 = importDefault(dependencyMap[4]);
({ isGuildTextChannelType: closure_9, THREAD_CHANNEL_TYPES: closure_10 } = arg1(dependencyMap[5]));
let closure_11 = importDefault(dependencyMap[6]);
let closure_12 = importDefault(dependencyMap[7]);
let closure_13 = importDefault(dependencyMap[8]);
let closure_14 = importDefault(dependencyMap[9]);
let closure_15 = importDefault(dependencyMap[10]);
let closure_16 = importDefault(dependencyMap[11]);
let closure_17 = importDefault(dependencyMap[12]);
const tmp2 = arg1(dependencyMap[5]);
({ ChannelTypes: closure_18, ME: closure_19, Permissions: closure_20, Routes } = arg1(dependencyMap[13]));
const isGuildHomeChannel = arg1(dependencyMap[14]).isGuildHomeChannel;
let closure_29 = "SelectedChannelStore";
let closure_30 = {};
let closure_31 = {};
let closure_32 = {};
const set = new Set();
let tmp5 = (Store) => {
  class SelectedChannelStore {
    constructor() {
      self = this;
      tmp = closure_4(this, SelectedChannelStore);
      obj = closure_7(SelectedChannelStore);
      tmp2 = closure_6;
      if (closure_34()) {
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
  const arg1 = SelectedChannelStore;
  callback2(SelectedChannelStore, Store);
  let obj = {
    key: "initialize",
    value() {
      let mostRecentSelectedTextChannelIds;
      const self = this;
      const Storage = SelectedChannelStore(closure_3[15]).Storage;
      let value = Storage.get(closure_29);
      if (null == value) {
        const obj = { selectedChannelId: closure_24, selectedVoiceChannelId: closure_26, lastChannelFollowingDestination: closure_25, lastConnectedTime: closure_27, selectedChannelIds, mostRecentSelectedTextChannelIds };
        value = obj;
      }
      if (null != value.knownThreadIds) {
        const _Set = Set;
        const set = new Set(value.knownThreadIds);
      }
      ({ selectedVoiceChannelId: closure_26, lastChannelFollowingDestination: closure_25, lastConnectedTime: closure_27, mostRecentSelectedTextChannelIds } = value);
      if (null == mostRecentSelectedTextChannelIds) {
        mostRecentSelectedTextChannelIds = {};
      }
      if (null != value.selectedChannelIds) {
        const selectedChannelIds = value.selectedChannelIds;
      }
      self.mustEmitChanges((type) => {
        let tmp = "CONNECTION_OPEN" !== type.type;
        if (tmp) {
          tmp = "VOICE_STATE_UPDATES" !== type.type;
        }
        return tmp;
      });
      self.waitFor(closure_11, closure_12, closure_13, closure_14, closure_15, closure_16, closure_17);
    }
  };
  const items = [obj, , , , , , , ];
  obj = {
    key: "getChannelId",
    value(arg0) {
      let guildId = arg0;
      let flag = arg1;
      if (arg1 === undefined) {
        flag = true;
      }
      let tmp3 = null;
      if (guildId !== closure_19) {
        if (null == guildId) {
          guildId = guildId.getGuildId();
        }
        let tmp5 = null;
        if (null != guildId) {
          tmp5 = guildId;
        }
        tmp3 = tmp5;
      }
      const tmp2Result = closure_37(tmp3);
      if (flag) {
        let tmp9 = tmp7;
        if (null == tmp7) {
          tmp9 = callback4(tmp2Result);
        }
        let tmp8 = tmp9;
      } else {
        tmp8 = tmp7;
      }
      return tmp8;
    }
  };
  items[1] = obj;
  obj = {
    key: "getVoiceChannelId",
    value() {
      let tmp = null;
      if (supported.isSupported()) {
        tmp = closure_26;
      }
      return tmp;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getMostRecentSelectedTextChannelId",
    value(arg0) {
      let tmp = null;
      if (null != arg0) {
        let tmp4 = null;
        if (null != closure_32[arg0]) {
          tmp4 = tmp3;
        }
        tmp = tmp4;
      }
      return tmp;
    }
  };
  items[4] = {
    key: "getCurrentlySelectedChannelId",
    value(arg0) {
      if (null != arg0) {
        let tmp = closure_30[arg0];
      } else {
        tmp = closure_24;
      }
      return tmp;
    }
  };
  items[5] = {
    key: "getLastSelectedChannelId",
    value(arg0) {
      if (null != arg0) {
        let tmp = closure_31[arg0];
      } else {
        tmp = closure_23;
      }
      return tmp;
    }
  };
  items[6] = {
    key: "getLastSelectedChannels",
    value(arg0) {
      return closure_31[arg0];
    }
  };
  items[7] = {
    key: "getLastChannelFollowingDestination",
    value() {
      return closure_25;
    }
  };
  return callback(SelectedChannelStore, items);
}(importDefault(dependencyMap[19]).Store);
tmp5.displayName = "SelectedChannelStore";
tmp5 = new tmp5(importDefault(dependencyMap[20]), {
  CONNECTION_OPEN: handleConnectionOpen,
  OVERLAY_INITIALIZE: function handleOverlayInitialize(selectedChannelId) {
    ({ sessionId: closure_22, selectedVoiceChannelId: closure_26 } = selectedChannelId);
    let closure_30 = {};
    let closure_31 = {};
    selectedChannelId = selectedChannelId.selectedChannelId;
    closure_30[selectedChannelId.selectedGuildId] = selectedChannelId.selectedChannelId;
    setMostRecentTextChannel(selectedChannelId.selectedGuildId, selectedChannelId);
    cleanupPreviouslySelected();
  },
  CONNECTION_CLOSED: function handleConnectionClosed() {
    let closure_22 = null;
  },
  CHANNEL_SELECT: function handleChannelSelect(arg0) {
    let channelId;
    let guildId;
    ({ guildId, channelId } = arg0);
    if (undefined === guildId) {
      return false;
    } else {
      if (null == channelId) {
        channelId = findDefaultChannelId(guildId);
      }
      let tmp3 = null != channelId;
      if (tmp3) {
        tmp3 = channelId !== channelId;
      }
      if (tmp3) {
        let closure_23 = channelId;
      }
      setMostRecentTextChannel(guildId, channelId);
      if (closure_30[closure_37(undefined, guildId)] !== channelId) {
        closure_31[stringifyGuildId(guildId)] = closure_30[closure_37(undefined, guildId)];
        closure_30[stringifyGuildId(guildId)] = channelId;
        const tmp12 = stringifyGuildId(guildId);
      }
      saveStorage();
    }
  },
  CHANNEL_CREATE: function handleChannelCreate(channel) {
    channel = channel.channel;
    const type = channel.type;
    if (constants.GUILD_ANNOUNCEMENT === type) {
      const guild_id = channel.guild_id;
      let tmp3 = null != guild_id;
      if (tmp3) {
        tmp3 = null == closure_32[guild_id];
      }
      if (tmp3) {
        closure_32[guild_id] = channel.id;
      }
      if (null != guild_id) {
        if (null == closure_30[guild_id]) {
          closure_30[guild_id] = findDefaultChannelId(guild_id);
          return true;
        }
      }
    }
    return false;
  },
  CHANNEL_DELETE: handleChannelDelete,
  CHANNEL_UPDATES: function handleChannelUpdates(channels) {
    let iter2;
    const tmp = _createForOfIteratorHelperLoose(channels.channels);
    let iter = tmp();
    if (!iter.done) {
      do {
        let value = iter.value;
        if (value.isScheduledForDeletion()) {
          let tmp2 = closure_10;
          let hasItem = closure_10.has(value.type);
          let tmp4 = closure_42;
          let tmp5 = closure_42(value.id, value.guild_id, value.parent_id);
        }
        iter2 = tmp();
        iter = iter2;
      } while (!iter2.done);
    }
  },
  THREAD_DELETE: handleChannelDelete,
  GUILD_CREATE: function handleGuildCreate(guild) {
    guild = guild.guild;
    if (null == closure_30[guild.id]) {
      const tmp2 = findDefaultChannelId(guild.id);
      closure_30[guild.id] = tmp2;
      setMostRecentTextChannel(guild.id, tmp2);
      saveStorage();
    }
  },
  GUILD_DELETE: function handleGuildDelete(guild) {
    guild = guild.guild;
    if (closure_26 === closure_30[guild.id]) {
      closure_26 = null;
    }
    if (guild.unavailable) {
      return false;
    } else {
      delete r1[r2];
      delete r1[r2];
      saveStorage();
    }
  },
  VOICE_CHANNEL_SELECT: function handleVoiceChannelSelect(channelId) {
    channelId = channelId.channelId;
    if (null == channelId) {
      const channel = store.getChannel(channelId);
      let guild_id;
      if (null != channel) {
        guild_id = channel.guild_id;
      }
      let tmp5 = null != guild_id;
      if (tmp5) {
        tmp5 = guild_id !== store3.getGuildId();
      }
      if (tmp5) {
        tmp5 = closure_30[guild_id] === channelId;
      }
      if (tmp5) {
        closure_30[guild_id] = findDefaultChannelId(guild_id);
      }
    }
    saveStorage();
  },
  VOICE_STATE_UPDATES: function handleVoiceStateUpdates(voiceStates) {
    voiceStates = voiceStates.voiceStates;
    return voiceStates.reduce((arg0, sessionId) => {
      if (sessionId.sessionId === closure_22) {
        const _clearInterval = clearInterval;
        clearInterval(interval);
        const channel = store.getChannel(channelId);
        let guildId;
        if (null != channel) {
          guildId = channel.getGuildId();
        }
        if (!tmp16) {
          let channelId = sessionId.channelId;
        }
        const _Date = Date;
        let closure_27 = Date.now();
        if (null != channelId) {
          const _setInterval = setInterval;
          let interval = setInterval(() => {
            let closure_27 = Date.now();
            callback();
          }, 60000);
        }
        callback();
        const tmp16 = sessionId.guildId !== guildId && null == sessionId.channelId;
      } else if (sessionId.userId !== id.getId()) {
        return arg0;
      } else {
        const _clearInterval2 = clearInterval;
        clearInterval(interval);
        interval = undefined;
        closure_27 = 0;
        const channel1 = store.getChannel(channelId);
        let guildId1;
        if (null != channel1) {
          guildId1 = channel1.getGuildId();
        }
        const channel2 = store.getChannel(sessionId.channelId);
        let guildId2;
        if (null != channel2) {
          guildId2 = channel2.getGuildId();
        }
        let tmp4 = null != guildId1 && guildId2 === guildId1;
        if (!tmp4) {
          tmp4 = channelId === sessionId.channelId;
        }
        if (tmp4) {
          channelId = null;
        }
        callback();
      }
      return true;
    }, false);
  },
  CHANNEL_FOLLOWER_CREATED: function handleChannelFollowingDestinationUpdate(channelId) {
    channelId = channelId.channelId;
    let tmp = null != obj;
    if (tmp) {
      tmp = channelId === obj.channelId;
    }
    if (!tmp) {
      const obj = { channelId, guildId: channelId.guildId };
      saveStorage();
    }
  },
  LOGOUT: function handleLogout() {
    let closure_30 = {};
    let closure_24 = null;
    let closure_23;
    let closure_32 = {};
    let closure_25 = {};
    let closure_26 = null;
    const Storage = arg1(dependencyMap[15]).Storage;
    Storage.remove(closure_29);
  }
});
const obj = {
  CONNECTION_OPEN: handleConnectionOpen,
  OVERLAY_INITIALIZE: function handleOverlayInitialize(selectedChannelId) {
    ({ sessionId: closure_22, selectedVoiceChannelId: closure_26 } = selectedChannelId);
    let closure_30 = {};
    let closure_31 = {};
    selectedChannelId = selectedChannelId.selectedChannelId;
    closure_30[selectedChannelId.selectedGuildId] = selectedChannelId.selectedChannelId;
    setMostRecentTextChannel(selectedChannelId.selectedGuildId, selectedChannelId);
    cleanupPreviouslySelected();
  },
  CONNECTION_CLOSED: function handleConnectionClosed() {
    let closure_22 = null;
  },
  CHANNEL_SELECT: function handleChannelSelect(arg0) {
    let channelId;
    let guildId;
    ({ guildId, channelId } = arg0);
    if (undefined === guildId) {
      return false;
    } else {
      if (null == channelId) {
        channelId = findDefaultChannelId(guildId);
      }
      let tmp3 = null != channelId;
      if (tmp3) {
        tmp3 = channelId !== channelId;
      }
      if (tmp3) {
        let closure_23 = channelId;
      }
      setMostRecentTextChannel(guildId, channelId);
      if (closure_30[closure_37(undefined, guildId)] !== channelId) {
        closure_31[stringifyGuildId(guildId)] = closure_30[closure_37(undefined, guildId)];
        closure_30[stringifyGuildId(guildId)] = channelId;
        const tmp12 = stringifyGuildId(guildId);
      }
      saveStorage();
    }
  },
  CHANNEL_CREATE: function handleChannelCreate(channel) {
    channel = channel.channel;
    const type = channel.type;
    if (constants.GUILD_ANNOUNCEMENT === type) {
      const guild_id = channel.guild_id;
      let tmp3 = null != guild_id;
      if (tmp3) {
        tmp3 = null == closure_32[guild_id];
      }
      if (tmp3) {
        closure_32[guild_id] = channel.id;
      }
      if (null != guild_id) {
        if (null == closure_30[guild_id]) {
          closure_30[guild_id] = findDefaultChannelId(guild_id);
          return true;
        }
      }
    }
    return false;
  },
  CHANNEL_DELETE: handleChannelDelete,
  CHANNEL_UPDATES: function handleChannelUpdates(channels) {
    let iter2;
    const tmp = _createForOfIteratorHelperLoose(channels.channels);
    let iter = tmp();
    if (!iter.done) {
      do {
        let value = iter.value;
        if (value.isScheduledForDeletion()) {
          let tmp2 = closure_10;
          let hasItem = closure_10.has(value.type);
          let tmp4 = closure_42;
          let tmp5 = closure_42(value.id, value.guild_id, value.parent_id);
        }
        iter2 = tmp();
        iter = iter2;
      } while (!iter2.done);
    }
  },
  THREAD_DELETE: handleChannelDelete,
  GUILD_CREATE: function handleGuildCreate(guild) {
    guild = guild.guild;
    if (null == closure_30[guild.id]) {
      const tmp2 = findDefaultChannelId(guild.id);
      closure_30[guild.id] = tmp2;
      setMostRecentTextChannel(guild.id, tmp2);
      saveStorage();
    }
  },
  GUILD_DELETE: function handleGuildDelete(guild) {
    guild = guild.guild;
    if (closure_26 === closure_30[guild.id]) {
      closure_26 = null;
    }
    if (guild.unavailable) {
      return false;
    } else {
      delete r1[r2];
      delete r1[r2];
      saveStorage();
    }
  },
  VOICE_CHANNEL_SELECT: function handleVoiceChannelSelect(channelId) {
    channelId = channelId.channelId;
    if (null == channelId) {
      const channel = store.getChannel(channelId);
      let guild_id;
      if (null != channel) {
        guild_id = channel.guild_id;
      }
      let tmp5 = null != guild_id;
      if (tmp5) {
        tmp5 = guild_id !== store3.getGuildId();
      }
      if (tmp5) {
        tmp5 = closure_30[guild_id] === channelId;
      }
      if (tmp5) {
        closure_30[guild_id] = findDefaultChannelId(guild_id);
      }
    }
    saveStorage();
  },
  VOICE_STATE_UPDATES: function handleVoiceStateUpdates(voiceStates) {
    voiceStates = voiceStates.voiceStates;
    return voiceStates.reduce((arg0, sessionId) => {
      if (sessionId.sessionId === closure_22) {
        const _clearInterval = clearInterval;
        clearInterval(interval);
        const channel = store.getChannel(channelId);
        let guildId;
        if (null != channel) {
          guildId = channel.getGuildId();
        }
        if (!tmp16) {
          let channelId = sessionId.channelId;
        }
        const _Date = Date;
        let closure_27 = Date.now();
        if (null != channelId) {
          const _setInterval = setInterval;
          let interval = setInterval(() => {
            let closure_27 = Date.now();
            callback();
          }, 60000);
        }
        callback();
        const tmp16 = sessionId.guildId !== guildId && null == sessionId.channelId;
      } else if (sessionId.userId !== id.getId()) {
        return arg0;
      } else {
        const _clearInterval2 = clearInterval;
        clearInterval(interval);
        interval = undefined;
        closure_27 = 0;
        const channel1 = store.getChannel(channelId);
        let guildId1;
        if (null != channel1) {
          guildId1 = channel1.getGuildId();
        }
        const channel2 = store.getChannel(sessionId.channelId);
        let guildId2;
        if (null != channel2) {
          guildId2 = channel2.getGuildId();
        }
        let tmp4 = null != guildId1 && guildId2 === guildId1;
        if (!tmp4) {
          tmp4 = channelId === sessionId.channelId;
        }
        if (tmp4) {
          channelId = null;
        }
        callback();
      }
      return true;
    }, false);
  },
  CHANNEL_FOLLOWER_CREATED: function handleChannelFollowingDestinationUpdate(channelId) {
    channelId = channelId.channelId;
    let tmp = null != obj;
    if (tmp) {
      tmp = channelId === obj.channelId;
    }
    if (!tmp) {
      const obj = { channelId, guildId: channelId.guildId };
      saveStorage();
    }
  },
  LOGOUT: function handleLogout() {
    let closure_30 = {};
    let closure_24 = null;
    let closure_23;
    let closure_32 = {};
    let closure_25 = {};
    let closure_26 = null;
    const Storage = arg1(dependencyMap[15]).Storage;
    Storage.remove(closure_29);
  }
};
const tmp3 = arg1(dependencyMap[13]);
const result = arg1(dependencyMap[21]).fileFinishedImporting("stores/SelectedChannelStore.tsx");

export default tmp5;
export const findFirstVoiceChannelId = function findFirstVoiceChannelId(arg0) {
  let id;
  const mutableBasicGuildChannelsForGuild = store.getMutableBasicGuildChannelsForGuild(arg0);
  const found = importDefault(dependencyMap[16]).find(mutableBasicGuildChannelsForGuild, (type) => type.type === constants.GUILD_VOICE);
  if (null != found) {
    id = found.id;
  }
  return id;
};
export { handleConnectionOpen };
